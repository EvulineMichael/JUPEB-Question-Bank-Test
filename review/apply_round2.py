"""Applies the round-2 fixes listed in fixes_round2.py.  Run once from the project folder:
    python3 review/apply_round2.py --dry   (check only)
    python3 review/apply_round2.py         (write)
"""
import json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from apply_fixes import spans, set_field, ROOT
from fixes_round2 import FIXES


# ======== APPLY ========
def apply(dry=False):
    log, by_file = [], {}
    for f in FIXES:
        by_file.setdefault(f["f"], []).append(f)
    for rel, fixes in by_file.items():
        path = os.path.join(ROOT, "data", rel)
        raw = open(path, encoding="utf-8").read()
        for f in fixes:
            match = [(s, e, o) for s, e, o in spans(raw)
                     if str(o.get("questionNumber")) == str(f["n"]) and o.get("type") == f.get("type", "Objective")]
            if f["kind"] == "dropdup":
                if len(match) != 2 or {k: v for k, v in match[0][2].items() if k != "question"} != {k: v for k, v in match[1][2].items() if k != "question"}:
                    raise SystemExit(f"{rel} Q{f['n']}: expected two identical copies")
                s2, e2, _ = match[1]
                prev = raw.rindex(",", 0, s2)          # remove the comma before the second copy as well
                raw = raw[:prev] + raw[e2:]
                log.append((rel, f["n"], "Duplicate copy removed", f["why"]))
                continue
            if len(match) != 1:
                raise SystemExit(f"{rel} Q{f['n']}: found {len(match)} matching questions")
            s, e, q = match[0]
            if q.get("excludeFromQuiz"):
                raise SystemExit(f"{rel} Q{f['n']}: already excluded in round 1")
            text, kind = raw[s:e], f["kind"]
            if kind == "answer":
                old = q.get("answer")
                text = set_field(text, "answer", f["answer"])
                text = set_field(text, "explanation", f["explanation"])
                log.append((rel, f["n"], f"Answer key {old} → {f['answer']}", f["why"]))
            elif kind == "explanation":
                text = set_field(text, "explanation", f["explanation"])
                log.append((rel, f["n"], "Explanation rewritten (answer unchanged)", f["why"]))
            elif kind == "exclude":
                text = set_field(text, "excludeFromQuiz", True)
                text = set_field(text, "reviewNote", f["note"])
                log.append((rel, f["n"], "Left out of quizzes, note added", f["why"]))
            elif kind == "missing":
                text = set_field(text, "excludeFromQuiz", True)
                text = set_field(text, "reviewNote", f["note"])
                log.append((rel, f["n"], "Missing excerpt/diagram/data: left out of quizzes, note added", f["why"]))
            elif kind == "field":
                text = set_field(text, f["field"], f["value"])
                log.append((rel, f["n"], f"Field '{f['field']}' set", f["why"]))
            elif kind == "text":
                if text.count(f["old"]) != 1:
                    raise SystemExit(f"{rel} Q{f['n']}: text to replace found {text.count(f['old'])} times")
                text = text.replace(f["old"], f["new"])
                label = "Option text corrected"
                if f.get("answer"):
                    label = f"Option text corrected; answer key {q.get('answer')} → {f['answer']}"
                    text = set_field(text, "answer", f["answer"])
                if f.get("explanation"):
                    text = set_field(text, "explanation", f["explanation"])
                log.append((rel, f["n"], label, f["why"]))
            json.loads(text)
            raw = raw[:s] + text + raw[e:]
        json.loads(raw)
        if not dry:
            open(path, "w", encoding="utf-8").write(raw)

    order = [("Answer key", "Answer keys corrected"), ("Option text", "Option text corrected"),
             ("Explanation", "Explanations rewritten"), ("Field", "Diagrams linked"), ("Duplicate", "Duplicates removed"), ("Left out", "Left out of quizzes"), ("Missing", "Missing passage / diagram / data")]
    if not dry:
        with open(os.path.join(ROOT, "review", "changes-log.md"), "a", encoding="utf-8") as out:
            out.write("\n\n# Answer review: changes made (round 2: full read of every objective question)\n\n")
            out.write("Originals are in backups-folder/before-answer-review-round2/data.\n\n")
            for prefix, title in order:
                rows = [r for r in log if r[2].startswith(prefix)]
                if rows:
                    out.write(f"## {title} ({len(rows)})\n\n| File | Q | Change | Why |\n|---|---|---|---|\n")
                    for rel, n, change, why in rows:
                        out.write(f"| {rel} | {n} | {change} | {why.replace('|', '/')} |\n")
                    out.write("\n")
    from collections import Counter
    print(("checked " if dry else "applied ") + f"{len(log)} changes in {len(by_file)} files:", dict(Counter(r[2].split(';')[0].split(' (')[0][:22] for r in log)))


if __name__ == "__main__":
    apply(dry="--dry" in sys.argv)

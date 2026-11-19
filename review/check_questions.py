"""Automated checks on every question file in data/.

Run from the project folder:  python3 review/check_questions.py
Writes review/automated-checks.md and prints a summary. It changes nothing.

Checks
  FILE      file is empty or not valid JSON
  ANSWER    objective answer missing, not a letter, or points past the last option
  OPTIONS   objective question with fewer than 2 options, blank or duplicate options
  CONFLICT  explanation names a different option letter as correct than the answer key
  TEXTMATCH explanation quotes the text of a different option as the answer
  REPEAT    the same question (same text and options) has different answers in different places
  THIN      explanation / model answer missing or very short
  FIELDS    required fields missing
"""
import glob, json, os, re, collections

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LETTERS = "ABCDEF"
issues = collections.defaultdict(list)       # kind -> list of (file, qnum, message)
seen = {}                                     # normalised question+options -> (file, qnum, answer)


def norm(s):
    return re.sub(r"[^a-z0-9]+", " ", str(s or "").lower()).strip()


def add(kind, f, q, msg):
    issues[kind].append((os.path.relpath(f, ROOT), q.get("questionNumber", "?") if isinstance(q, dict) else "?", msg))


# phrases in explanations that name the correct option
CLAIM = re.compile(
    r"(?:correct\s+(?:answer|option)\s*(?:is|:)?\s*|answer\s*(?:is|:)\s*|option\s+|therefore\s*,?\s*|hence\s*,?\s*)\(?([A-E])\)?(?![a-z])",
    re.I)

files = sorted(glob.glob(os.path.join(ROOT, "data", "**", "*.json"), recursive=True))
total = 0
for f in files:
    raw = open(f, encoding="utf-8").read()
    if not raw.strip():
        add("FILE", f, {}, "file is empty (0 bytes): this paper shows nothing")
        continue
    try:
        data = json.loads(raw)
    except Exception as e:
        add("FILE", f, {}, f"not valid JSON: {e}")
        continue
    qs = data if isinstance(data, list) else data.get("questions", [])
    for q in qs:
        total += 1
        for field in ("question", "type", "category", "year", "questionNumber"):
            if not str(q.get(field, "")).strip():
                add("FIELDS", f, q, f"missing '{field}'")
        if q.get("type") == "Objective":
            opts = q.get("options") or []
            real = [o for o in opts if str(o).strip()]
            ans = str(q.get("answer", "")).strip().upper()
            if len(real) < 2:
                add("OPTIONS", f, q, f"only {len(real)} option(s)")
            if len(real) != len(opts):
                add("OPTIONS", f, q, "has blank option(s)")
            normed = [norm(o) for o in real]
            exact = [re.sub(r"\s+", " ", str(o)).strip().lower() for o in real]   # keeps subscripts and symbols
            if len(set(exact)) != len(exact):
                add("OPTIONS", f, q, "two options are identical")
            if not ans:
                add("ANSWER", f, q, "no answer given")
            elif ans not in LETTERS or LETTERS.index(ans) >= len(opts):
                add("ANSWER", f, q, f"answer '{ans}' but only {len(opts)} options")
            expl = str(q.get("explanation", "")).strip()
            if len(expl) < 25:
                add("THIN", f, q, f"explanation very short ({len(expl)} chars): {expl!r}")
            # explanation claims a different letter
            claims = {m.group(1).upper() for m in CLAIM.finditer(expl)}
            claims.discard("")
            if ans and claims and ans not in claims:
                add("CONFLICT", f, q, f"key = {ans}, explanation says {'/'.join(sorted(claims))}: {expl[:140]!r}")
            # explanation's first sentence quotes another option's text more closely than the keyed option
            if ans in LETTERS and LETTERS.index(ans) < len(opts):
                first = norm(expl.split(".")[0])
                keyed = norm(opts[LETTERS.index(ans)])
                others = [(LETTERS[i], norm(o)) for i, o in enumerate(opts) if i != LETTERS.index(ans) and len(norm(o)) >= 6]
                if keyed and len(keyed) >= 6 and keyed not in first:
                    hit = [L for L, o in others if o in first and len(o) > 8]
                    if hit:
                        add("TEXTMATCH", f, q, f"key = {ans} ({opts[LETTERS.index(ans)]!r}) but explanation opens with option {hit[0]}'s text: {expl[:140]!r}")
            # same question elsewhere with a different answer
            key = norm(q.get("question")) + "||" + "|".join(sorted(exact))
            if key in seen and seen[key][2] != ans:
                pf, pn, pa = seen[key]
                # compare the actual option texts, since options may be in a different order
                pa_text = pa_opts = None
                add("REPEAT", f, q, f"same question as {pf} Q{pn}: answers differ ({pa} there, {ans} here). Check option order.")
            seen.setdefault(key, (os.path.relpath(f, ROOT), q.get("questionNumber"), ans))
        else:
            model = str(q.get("modelAnswer", "")).strip()
            if not model and not q.get("diagramMissing"):
                add("THIN", f, q, "essay has no model answer")
            elif model and len(model) < 120:
                add("THIN", f, q, f"model answer very short ({len(model)} chars)")

order = ["FILE", "ANSWER", "CONFLICT", "TEXTMATCH", "REPEAT", "OPTIONS", "FIELDS", "THIN"]
with open(os.path.join(ROOT, "review", "automated-checks.md"), "w", encoding="utf-8") as out:
    out.write(f"# Automated checks\n\n{total} questions in {len(files)} files.\n\n")
    for k in order:
        out.write(f"## {k} ({len(issues[k])})\n\n")
        for fn, qn, msg in issues[k]:
            out.write(f"- `{fn}` Q{qn}: {msg}\n")
        out.write("\n")
print(f"{total} questions in {len(files)} files")
for k in order:
    print(f"  {k:9} {len(issues[k])}")

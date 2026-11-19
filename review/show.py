"""Print questions in full.  python3 review/show.py data/physics/2022.json:35 data/maths/2021.json:39 ..."""
import json, sys
for spec in sys.argv[1:]:
    f, n = spec.rsplit(":", 1)
    d = json.load(open(f, encoding="utf-8")); qs = d if isinstance(d, list) else d.get("questions", [])
    for q in qs:
        if str(q.get("questionNumber")) == n:
            print(f"===== {f} Q{n}  [{q.get('category')}]  key={q.get('answer')}")
            print(q["question"])
            for i, o in enumerate(q.get("options") or []): print(f"  {'ABCDEF'[i]}) {o}")
            print("  EXPL:", (q.get("explanation") or q.get("modelAnswer") or "")[:900].replace("\n", " / "))

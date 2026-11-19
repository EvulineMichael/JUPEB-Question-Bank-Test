"""Print essay questions and model answers: python3 review/dump_essays.py data/x.json [maxchars]"""
import json,sys
f=sys.argv[1]; n=int(sys.argv[2]) if len(sys.argv)>2 else 100000
for q in json.load(open(f)):
    if q.get('type')!='Essay': continue
    print(f"##### Q{q.get('questionNumber')} {q.get('paper') or ''} {'[EXCLUDED]' if q.get('excludeFromQuiz') else ''}{'[DIAGRAM MISSING]' if q.get('diagramMissing') else ''}\nQ: {q.get('question')}\nA: {str(q.get('modelAnswer',''))[:n]}\n")

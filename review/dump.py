"""Compact listing of objective questions for manual review: python3 review/dump.py data/x.json [explanation_chars]"""
import json,sys
f=sys.argv[1]; n=int(sys.argv[2]) if len(sys.argv)>2 else 160
d=json.load(open(f)); qs=d if isinstance(d,list) else d.get('questions',[])
for q in qs:
    if q.get('type')!='Objective' or q.get('excludeFromQuiz'): continue
    o=' | '.join(f"{'ABCDE'[i]}) {x}" for i,x in enumerate(q.get('options',[])))
    print(f"Q{q.get('questionNumber')} [{q.get('answer')}] {q.get('question')}\n   {o}\n   > {str(q.get('explanation',''))[:n]}")

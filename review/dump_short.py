"""One line per objective question: number, key, question, all options (keyed one marked *)."""
import json,sys
for f in sys.argv[1:]:
    print('==', f)
    for q in json.load(open(f)):
        if q.get('type')!='Objective' or q.get('excludeFromQuiz'): continue
        k='ABCDE'.index(q['answer']) if q.get('answer') in list('ABCDE') else -1
        o=' ; '.join(('*' if i==k else '')+x for i,x in enumerate(q.get('options',[])))
        print(f"{q['questionNumber']} | {q['question'][:110]} || {o[:120]}".replace('\n',' / '))

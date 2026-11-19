"""Append fix code (read from stdin) before the END marker of fixes_essays_round3.py."""
import sys
p='review/fixes_essays_round3.py'; s=open(p).read(); add=sys.stdin.read()
m='# ======== END ========'; s=s.replace(m, add.rstrip()+'\n\n'+m); open(p,'w').write(s)

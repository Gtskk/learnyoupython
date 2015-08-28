import sys, re

str = sys.argv[1]
print(re.split(r'[;,\s]\s*', str))
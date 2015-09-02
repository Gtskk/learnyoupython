import sys

word_summary = []

with open(sys.argv[1], 'r') as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    # Create a list of words in current line
    words = [w.strip().lower() for w in line.split()]
    for word in words:
    	if word == 'gtskk':
    		word_summary.append(idx)

print(word_summary)
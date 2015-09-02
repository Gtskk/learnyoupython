/**
// 参考答案

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


*/

/* 此处为处理程序，可忽略 */
var PythonShell = require('python-shell'),
	path = require('path');

var file = process.argv[2],
	dir = path.dirname(file),
	filename = path.basename(file);

PythonShell.run(filename, {
	scriptPath: dir,
	args: [__dirname + '/../iterator.txt']
},function(err, results) {
	if (err) throw err;
	// results is an array consisting of messages collected during execution 
	console.log(results.join(''));
});

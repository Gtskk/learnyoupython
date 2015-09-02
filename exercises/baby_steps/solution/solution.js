/**
// 参考答案

import sys

record = []
if len(sys.argv) > 1:
	for ele in sys.argv[1:]:
		record.append(ele)

name, eamil, *numbers = record
print(numbers)


*/

/* 此处为处理程序，可忽略 */
var PythonShell = require('python-shell'),
	path = require('path');

var file = process.argv[2],
	dir = path.dirname(file),
	filename = path.basename(file);

PythonShell.run(filename, {
	scriptPath: dir,
	args: ['Dave', 'dave@example.com', '773-555-1212', '847-555-1212']
},function(err, results) {
	if (err) throw err;
	// results is an array consisting of messages collected during execution 
	console.log(results.join(''));
});

/**
// 参考答案

import sys
from collections import OrderedDict

d = OrderedDict()
record = []
if len(sys.argv) > 1:
	for ele in sys.argv[1:]:
		arr = ele.split(':')
		d[arr[0]] = arr[1]

for key in d:
	print(key, d[key])

*/

/* 此处为处理程序，可忽略 */
var PythonShell = require('python-shell'),
	path = require('path');

var file = process.argv[2],
	dir = path.dirname(file),
	filename = path.basename(file);

PythonShell.run(filename, {
	pythonPath: 'D:\\software\\python34\\python3.exe',
	scriptPath: dir,
	args: ['foo:1', 'bar:2', 'yes:3', 'no:4']
},function(err, results) {
	if (err) throw err;
	// results is an array consisting of messages collected during execution 
	console.log(results.join(''));
});

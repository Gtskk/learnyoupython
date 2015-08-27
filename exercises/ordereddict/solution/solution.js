/**
// 参考答案

from collections import OrderedDict
d = OrderedDict()
d['foo'] = 1
d['bar'] = 2
d['yes'] = 3
d['no'] = 4
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
},function(err, results) {
	if (err) throw err;
	// results is an array consisting of messages collected during execution 
	console.log(results.join(''));
});

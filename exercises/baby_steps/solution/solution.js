/**
// 参考答案

record = ('Dave', 'dave@example.com', '773-555-1212', '847-555-1212')
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
	pythonPath: 'D:\\software\\python34\\python3.exe',
	scriptPath: dir,
},function(err, results) {
	if (err) throw err;
	// results is an array consisting of messages collected during execution 
	console.log(results.join(''));
});

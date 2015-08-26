var PythonShell = require('python-shell'),
	path = require('path');

var file = process.argv[2],
	filePath = path.resolve(file),
	dir = path.dirname(filePath);

PythonShell.run(file, {
	pythonPath: 'D:\\software\\python34\\python3.exe',
	scriptPath: dir,
},function(err, results) {
	if (err) throw err;
	// results is an array consisting of messages collected during execution 
	console.log(results.join(''));
});
/**
// 参考答案

str = 'asdf fjdk; afed, fjek,asdf, foo'
import re
print(re.split(r'[;,\s]\s*', str))

*/

/* 此处为处理程序，可忽略 */
var PythonShell = require('python-shell'),
	path = require('path');

var file = process.argv[2],
	dir = path.dirname(file),
	filename = path.basename(file);

PythonShell.run(filename, {
	scriptPath: dir,
	args: ['asdf fjdk; afed, fjek,asdf, foo']
},function(err, results) {
	if (err) throw err;
	// results is an array consisting of messages collected during execution 
	console.log(results.join(''));
});

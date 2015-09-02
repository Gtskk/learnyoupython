/**
// 参考答案

portfolio = [
    {'name':'GOOG', 'shares': 50},
    {'name':'YHOO', 'shares': 75},
    {'name':'AOL', 'shares': 20},
    {'name':'SCOX', 'shares': 65}
]
print(min(s['shares'] for s in portfolio))

*/

/* 此处为处理程序，可忽略 */
var PythonShell = require('python-shell'),
	path = require('path');

var file = process.argv[2],
	dir = path.dirname(file),
	filename = path.basename(file);

PythonShell.run(filename, {
	scriptPath: dir,
},function(err, results) {
	if (err) throw err;
	// results is an array consisting of messages collected during execution 
	console.log(results.join(''));
});

/**
// 参考答案

from calendar import month_abbr
import re

datepat = re.compile(r'(\d+)/(\d+)/(\d+)')
text = 'Today is 8/28/2015. Tomorrow is 8/29/2015.'

def change_date(m):
	mon_name = month_abbr[int(m.group(1))]
	return '{} {} {}'.format(m.group(2), mon_name, m.group(3))

print(datepat.sub(change_date, text))

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
	args: ['Today is 8/28/2015. Tomorrow is 8/29/2015.']
},function(err, results) {
	if (err) throw err;
	// results is an array consisting of messages collected during execution 
	console.log(results.join(''));
});

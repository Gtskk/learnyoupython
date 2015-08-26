var exercise      = require('workshopper-exercise')()
	, filecheck     = require('workshopper-exercise/filecheck')
	, execute       = require('workshopper-exercise/execute')
	, comparestdout = require('workshopper-exercise/comparestdout')
	, path          = require('path');


// checks that the submission file actually exists
exercise = filecheck(exercise);

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise);

// compare stdout of solution and submission
exercise = comparestdout(exercise);


exercise.addSetup(function (mode, callback) {
	// mode == 'run' || 'verify'

	// supply the args to the 'execute' processor for both
	// solution and submission spawn()
	this.submissionArgs = this.submission;
	this.solutionArgs = this.solution.replace(/\.js/, '.py');

	this.submissionCommand = [ 'run-verify.js' ].concat(this.submissionArgs);

	process.nextTick(callback);
});

module.exports = exercise;

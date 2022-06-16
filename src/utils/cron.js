var CronJob = require('cron').CronJob;

var notifications = new CronJob(
	'* * * * * *',
	function() {
		console.log('You will see this message every second');
	},
	null,
	true,
	'America/Los_Angeles'
);

// module.exports = { notifications }

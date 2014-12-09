var cleanTrend = 'sux';

$.getJSON("trends.json", function(raw) {
	// console.log(json);
	// console.log(raw.trends[0].name);


	// $.each(raw.trends, function(key, value) {
	// 	// console.log(key + ": " + value.name);
	// 	var trend = value.name;
	// 	var cleanTrend = trend.replace('#', '');
	// 	console.log(cleanTrend);
	// });
	// console.log('');

	
	// PULLS A RANDOM TRENDING TOPIC FROM OBJECT OF TOPICS AND REMOVES THE '#'
	// -
	// -
	// -
	// console.log(typeof raw.trends);

	var holder = raw.trends;

	// function randomTrend() {
	// 	var randKey;
	// 	var count = 0;
	// 	for (var prop in holder) {
	// 		if (Math.random() < 1/++count) {
	// 			randKey = prop;
	// 		}
	// 		console.log('raw trend: ' + holder[prop].name);
	// 	}
	// 	var rawTrend = raw.trends[randKey].name;
	// 	cleanTrend = rawTrend.replace('#', '');
	// 	cleanTrend = cleanTrend.replace(' ', '');
	// 	console.log('');
	// 	console.log('clean & random trend: ' + cleanTrend);
	// 	return cleanTrend;
	// }
	// // randomTrend(raw.trends);
	// randomTrend();

	(function() {
		var randKey;
		var count = 0;
		for (var prop in holder) {
			if (Math.random() < 1/++count) {
				randKey = prop;
			}
			console.log('raw trend: ' + holder[prop].name);
		}
		var rawTrend = raw.trends[randKey].name;
		cleanTrend = rawTrend.replace('#', '');
		cleanTrend = cleanTrend.replace(' ', '');
		console.log('');
		console.log('clean & random trend: ' + cleanTrend);
		return cleanTrend;
	})();

});

console.log(cleanTrend);
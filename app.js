/* 
  Temperature - response.currentConditions.temp
  Feels Like - response.currentConditions.feelslike
  Address - response.address
  Descriptions - response.description
*/

let address;
let temperature;
let feelsLike;
let description;

fetch(
	'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Belgrade?key=RSFS74567369DAKB7FHJ8MZ7V',
	{ mode: 'cors' }
)
	.then(function (response) {
		return response.json();
	})
	.then(function (response) {
		address = response.address;
		temperature = response.currentConditions.temp;
		feelsLike = response.currentConditions.feelslike;
		description = response.description;
		console.log(address);
		console.log(`Temp: ${temperature}F, Feels Like: ${feelsLike}F`);
		console.log(description);
	});

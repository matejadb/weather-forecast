/* 
  Temperature - response.currentConditions.temp
  Feels Like - response.currentConditions.feelslike
  Address - response.address
  Descriptions - response.description
*/

(function weatherApp() {
	const enterButton = document.getElementById('get-location');
	const userInput = document.getElementById('weather-search');

	let address;
	let temperature;
	let feelsLike;
	let description;

	async function getWeather() {
		const response = await fetch(
			`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userInput.value}?key=RSFS74567369DAKB7FHJ8MZ7V`,
			{ mode: 'cors' }
		);
		const weatherData = await response.json();

		address = weatherData.address;
		temperature = weatherData.currentConditions.temp;
		feelsLike = weatherData.currentConditions.feelslike;
		description = weatherData.description;

		console.log(address);
		console.log(`Temp: ${temperature}F, Feels Like: ${feelsLike}F`);
		console.log(description);
	}

	const getUserLocation = () => {
		getWeather();
	};

	enterButton.addEventListener('click', getUserLocation);
})();

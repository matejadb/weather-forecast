/* 
  Temperature - response.currentConditions.temp
  Feels Like - response.currentConditions.feelslike
  Address - response.address
  Descriptions - response.description
*/

(function weatherApp() {
	const enterButton = document.getElementById('get-location');
	const userInput = document.getElementById('weather-search');

	const address = document.getElementById('address');
	const temperature = document.getElementById('temp');
	const feelsLike = document.getElementById('feels-like');
	const description = document.getElementById('description');

	async function getWeather() {
		try {
			const response = await fetch(
				`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userInput.value}?key=RSFS74567369DAKB7FHJ8MZ7V`,
				{ mode: 'cors' }
			);
			const weatherData = await response.json();

			address.textContent = weatherData.address;
			temperature.textContent = weatherData.currentConditions.temp;
			feelsLike.textContent = weatherData.currentConditions.feelslike;
			description.textContent = weatherData.description;
		} catch (error) {
			alert(`Location doesn't exist`);
		}
	}

	const getUserLocation = () => {
		getWeather();
	};

	enterButton.addEventListener('click', getUserLocation);
})();

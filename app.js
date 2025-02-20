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
	const nowShowing = document.querySelector('.now-showing');

	let metricChange = false;

	async function getWeather() {
		try {
			const response = await fetch(
				`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userInput.value}?key=RSFS74567369DAKB7FHJ8MZ7V`,
				{ mode: 'cors' }
			);
			const weatherData = await response.json();

			if (metricChange) {
				let tempC = parseFloat(weatherData.currentConditions.temp);
				let feelsLikeC = parseFloat(weatherData.currentConditions.feelslike);

				temperature.textContent = `${Math.floor((5 / 9) * (tempC - 32))} \xB0C`;
				feelsLike.textContent = `${Math.floor(
					(5 / 9) * (feelsLikeC - 32)
				)} \xB0C`;
			} else {
				temperature.textContent = `${weatherData.currentConditions.temp} \xB0F`;
				feelsLike.textContent = `${weatherData.currentConditions.feelslike} \xB0F`;
			}
			address.textContent = weatherData.address;
			description.textContent = weatherData.description;
		} catch (error) {
			alert(`Location doesn't exist`);
		}
	}

	const getUserLocation = () => {
		getWeather();
	};

	const changeMetric = () => {
		metricChange = !metricChange;
		if (metricChange) {
			nowShowing.textContent = 'Celcius';
		} else {
			nowShowing.textContent = 'Fahrenheit';
		}
	};

	enterButton.addEventListener('click', getUserLocation);
	nowShowing.addEventListener('click', changeMetric);
})();

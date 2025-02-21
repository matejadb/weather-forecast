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

	let getCelcius = true;
	/* temperature.textContent = `${weatherData.currentConditions.temp} \xB0F`;
				feelsLike.textContent = `${weatherData.currentConditions.feelslike} \xB0F`; */
	async function getWeatherCelcius() {
		try {
			const response = await fetch(
				`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userInput.value}?unitGroup=metric&key=RSFS74567369DAKB7FHJ8MZ7V`,
				{ mode: 'cors' }
			);
			const weatherData = await response.json();

			address.textContent = weatherData.address;
			temperature.textContent = `${weatherData.currentConditions.temp} \xB0C`;
			feelsLike.textContent = `${weatherData.currentConditions.feelslike} \xB0C`;
			description.textContent = weatherData.description;
		} catch (error) {
			alert(`Location doesn't exist`);
		}
	}

	async function getWeatherFahrenheit() {
		try {
			const response = await fetch(
				`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userInput.value}?key=RSFS74567369DAKB7FHJ8MZ7V`,
				{ mode: 'cors' }
			);
			const weatherData = await response.json();

			address.textContent = weatherData.address;
			temperature.textContent = `${weatherData.currentConditions.temp} \xB0F`;
			feelsLike.textContent = `${weatherData.currentConditions.feelslike} \xB0F`;
			description.textContent = weatherData.description;
		} catch (error) {
			alert(`Location doesn't exist`);
		}
	}

	const getUserLocation = () => {
		if (getCelcius) {
			getWeatherCelcius();
		} else {
			getWeatherFahrenheit();
		}
	};

	const changeMetric = () => {
		getCelcius = !getCelcius;
		if (getCelcius) {
			nowShowing.textContent = `\xB0C	`;
			getWeatherCelcius();
		} else {
			nowShowing.textContent = `\xB0F`;
			getWeatherFahrenheit();
		}
	};

	enterButton.addEventListener('click', getUserLocation);
	nowShowing.addEventListener('click', changeMetric);
})();

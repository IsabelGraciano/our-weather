const APIKey = '9a0f8ade471fd4fe88d7bc22d34debde'

async function searchCity (city: string): Promise<any[]> {
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIKey}`)
  const cityInfo = await response.json()
  return cityInfo
}

async function getForecastWeather (lat: number, lon: number): Promise<any[]> {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`)
  const weather = await response.json()
  return weather
}

async function getCurrentWeather (lat: number, lon: number): Promise<any[]> {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`)
  const weather = await response.json()
  return weather
}

export {
  searchCity,
  getForecastWeather,
  getCurrentWeather
}

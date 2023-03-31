const APIKey = 'fc9ffb92a4fd4dfabfb231918233003'

async function searchCitiesList (city: string): Promise<any[]> {
  const response = await fetch(`http://api.weatherapi.com/v1/search.json?key=${APIKey}&q=${city}`)
  const cityInfo = await response.json()
  return cityInfo
}

async function searchSpecificCity (city: string): Promise<any[]> {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}`)
  const cityInfo = await response.json()
  return cityInfo
}

async function getForecastWeather (city: string): Promise<any[]> {
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${city}&days=6`)
  const weather = await response.json()
  return weather.forecast.forecastday
}

export {
  searchCitiesList,
  searchSpecificCity,
  getForecastWeather
}

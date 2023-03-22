const APIKey = '9a0f8ade471fd4fe88d7bc22d34debde'

async function searchCity (city: string): Promise<any[]> {
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIKey}`)
  const data = await response.json()
  return data
}

export default searchCity

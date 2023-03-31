import { formatDate } from '../functions/formatDate'

interface Props {
  weatherData: Record<string, any>
}

function CurrentWeatherInfo ({ weatherData }: Props): JSX.Element {
  const data = (): Record<string, any> => {
    if (weatherData.length !== 0) {
      const data = {
        name: `${weatherData.location.name}, ${weatherData.location.country}`,
        date: weatherData.current.last_updated,
        temp: weatherData.current.temp_c,
        feels_like: weatherData.current.feelslike_c,
        wind_speed: weatherData.current.wind_mph,
        humidity: weatherData.current.humidity
      }
      return data
    }
    return {}
  }

  return (
    <>
      <div>
        <p className='dark-gray-text font-sans text-4xl font-bold'>{data().name}</p>
        <p className='dark-gray-text font-sans text-3xl font-semibold'>{formatDate(data().date)}</p>
      </div>
      <p><strong>Temperature:</strong> {data().temp}°</p>
      <p><strong>Feels like:</strong> {data().feels_like}°</p>
      <div className='flex flex-row'>
        <p><strong>Wind speed:</strong> {data().wind_speed}mph</p>
      </div>
      <div className='flex flex-row'>
        <p><strong>Humidity:</strong> {data().humidity}%</p>
      </div>
    </>
  )
}

export default CurrentWeatherInfo

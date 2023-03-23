import { formatDate } from '../functions/formatDate'

interface Props {
  weatherData: Array<Record<string, unknown>>
}

function CurrentWeatherInfo ({ weatherData }: Props): JSX.Element {
  const getDate = (): string => {
    if (weatherData.length !== 0) {
      console.log('weatherData', weatherData)
      return formatDate(weatherData.list[0].dt_txt)
    }
    return ''
  }

  const getTemp = (): string => {
    if (weatherData.length !== 0) {
      return weatherData.main.temp
    }
    return ''
  }

  const getFeelsLike = (): string => {
    if (weatherData.length !== 0) {
      return weatherData.main.feels_like
    }
    return ''
  }

  const getWindSpeed = (): string => {
    if (weatherData.length !== 0) {
      return weatherData.wind.speed
    }
    return ''
  }

  const getHumidity = (): string => {
    if (weatherData.length !== 0) {
      return weatherData.main.humidity
    }
    return ''
  }

  return (
    <>
      <p className='light-gray-text font-sans'>{weatherData.name}, {weatherData.state}</p>
      <p className='light-gray-text font-sans'>{ getDate() }</p>
      <p>{getTemp()}</p>
      <p>{getFeelsLike()}</p>
      <div className='flex flex-row'>
        <p>{getWindSpeed()}</p>
        <p>Wind: WSW 6mph</p>
      </div>
      <div className='flex flex-row'>
        <p>{getHumidity()}</p>
        <p>Humidity</p>
      </div>
    </>
  )
}

export default CurrentWeatherInfo

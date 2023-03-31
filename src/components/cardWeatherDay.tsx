import { useEffect, useState } from 'react'
import { getForecastWeather } from '../functions/fetchWeatherAPI'
import { formatDate } from '../functions/formatDate'

interface Props {
  city: string
}

function CardWeatherDay ({ city }: Props): JSX.Element {
  const [forecastData, setForecastData] = useState([])

  useEffect(() => {
    const fetchForecastData = async (): Promise<void> => {
      if (city === null) {
        setForecastData([])
        return
      }
      const forecast = await getForecastWeather(city)
      console.log('forecast', forecast)
      setForecastData(forecast)
    }
    void fetchForecastData()
  }, [city])

  return (
    <div className='flex flex-wrap justify-between'>
      {forecastData.map(data => (
        <div key={data.date} className="h-52 w-52 m-3 backdrop-blur-[15px] bg-[#ffffff33] top-0 left-0 items-center border-[#d9d9d9] border-solid border-2 rounded-lg flex flex-col justify-between">
          <p className='dark-gray-text font-sans font-bold text-xl'>{formatDate(data.date)}</p>
          <div className='flex items-center font-bold'>
            <img src={`${data.day.condition.icon}`} />
            <p>{data.day.condition.text}</p>
          </div>
          <p>Max temp: {data.day.maxtemp_c}</p>
          <p>Avg temp: {data.day.avgtemp_c}</p>
          <p>Change of rain: {data.day.daily_chance_of_rain}%</p>
        </div>
      ))}
    </div>
  )
}

export default CardWeatherDay

import SearchBar from './searchBar'
import CardWeatherDay from './cardWeatherDay'
import { useState, useEffect } from 'react'
import { getCurrentWeather, searchCity } from '../functions/fetchWeatherAPI'
import CurrentWeatherInfo from './currentWeatherInfo'

function SideBar (): JSX.Element {
  const [citiesResult, setCitiesResult] = useState<any[]>([])
  const [weatherData, setWeatherData] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      let latitude = 0
      let longitude = 0

      navigator.geolocation.getCurrentPosition(function (position) {
        latitude = position.coords.latitude
        longitude = position.coords.longitude
        void fetchCurrentPosition(latitude, longitude)
      })
    }

    void fetchData()
  }, []) // The empty dependency array means this effect will only be run once, when the component mounts.

  const fetchCurrentPosition = async (latitude: number, longitude: number): Promise<void> => {
    const weatherCity = await getCurrentWeather(latitude, longitude)
    const cityData = await searchCity(weatherCity.city.name)
    // encontrar en las ciudades una con el mismo nombre
    handleWeatherDataChange(weatherCity, 'city name', 'city state')
    console.log('current position')
  }

  const handlecitiesResultChange = (newcitiesResult: any[]): void => {
    setCitiesResult(newcitiesResult)
  }

  const handleWeatherDataChange = (weatherCity: any[], name: string, state: string): void => {
    const weatherData = { ...weatherCity, name, state }
    setWeatherData(weatherData)
  }

  const selectCity = async (lat: number, lon: number, name: string, state: string): Promise<void> => {
    const weatherCity = await getCurrentWeather(lat, lon)
    handleWeatherDataChange(weatherCity, name, state)
  }

  return (
    <div className='relative'>
      <div className="h-full w-80 backdrop-blur-[15px] bg-[#ffffff33] absolute top-0 left-0 z-2 items-center p-16 border-[#d9d9d9] border-solid border-2 rounded-lg flex flex-col justify-between">
        <SearchBar onSearchTextChange={handlecitiesResultChange} />

        <div className='bg-[#ffffff33] w-52'>
            {citiesResult.map(city => <div key={`${city.lat}-${city.lon}`} onClick={() => { void selectCity(city.lat, city.lon, city.name, city.state) }}>{city.name}, {city.state}</div>)}
        </div>

        <CurrentWeatherInfo weatherData={weatherData} />

      </div>
      <div className='absolute left-80'>
        <p>Weather Forecast</p>
        <p>Rain</p>
        <p>Light Rain</p>

        <div className='flex flex-row flex-wrap m-8'>
          <CardWeatherDay/>
          <CardWeatherDay/>
          <CardWeatherDay/>
          <CardWeatherDay/>
          <CardWeatherDay/>
        </div>
      </div>
      <img src="../../public/imgs/cloudy.png" className='h-full w-full object-contain' alt="cloudy" />

    </div>
  )
}

export default SideBar

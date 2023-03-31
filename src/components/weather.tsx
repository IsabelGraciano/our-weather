import SearchBar from './searchBar'
import CardWeatherDay from './cardWeatherDay'
import { useState, useEffect } from 'react'
import { searchSpecificCity } from '../functions/fetchWeatherAPI'
import CurrentWeatherInfo from './currentWeatherInfo'

function SideBar (): JSX.Element {
  const [citiesResult, setCitiesResult] = useState<any[]>([])
  const [weatherData, setWeatherData] = useState<any[]>([])
  const [selectedCity, setSelectedCity] = useState<string>('')
  const [showCitiesResults, setShowCitiesResults] = useState(false)

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      navigator.geolocation.getCurrentPosition(async position => {
        const { latitude, longitude } = position.coords
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
        const data = await response.json()
        const city = data.address.city || data.address.town || data.address.village || data.address.hamlet
        const weatherCity = await searchSpecificCity(city)
        setWeatherData(weatherCity)
        setSelectedCity(city)
      })
    }
    void fetchData()
  }, [])

  const handlecitiesResultChange = (newcitiesResult: any[]): void => {
    setCitiesResult(newcitiesResult)
    setShowCitiesResults(true)
  }

  const selectCity = async (cityName: string): Promise<void> => {
    const weatherCity = await searchSpecificCity(cityName)
    setSelectedCity(cityName)
    setWeatherData(weatherCity)
    setShowCitiesResults(false)
  }

  return (
    <div className='relative'>
      <div className="h-full w-96 backdrop-blur-[15px] bg-[#ffffff33] absolute top-0 left-0 z-2 items-center p-10 border-[#d9d9d9] border-solid border-2 rounded-lg flex flex-col justify-between">
        <SearchBar onSearchTextChange={handlecitiesResultChange} />

        {showCitiesResults && <div className='bg-white border-2 rounded-lg w-80 mt-1 z-10 absolute top-20'>
          {citiesResult.map(city => <div className='cursor-pointer hover:bg-[#4a6c99]' key={`${city.id}`} onClick={() => { void selectCity(city.name) }}>{city.name}, {city.region}. {city.country}</div>)}
        </div>}

        <CurrentWeatherInfo weatherData={weatherData} />

      </div>
      <div className='absolute left-96'>
        <div className='flex flex-row flex-wrap m-20'>
          <CardWeatherDay city={selectedCity} />
        </div>
      </div>
      <div className="h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('../../public/imgs/cloudy.jpg')" }}></div>

    </div>
  )
}

export default SideBar

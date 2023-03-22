import SearchBar from './searchBar'
import CardWeatherDay from './cardWeatherDay'
import { useState } from 'react'

function SideBar (): JSX.Element {
  const [citiesResult, setCititesResult] = useState<any[]>([])

  const handlecitiesResultChange = (newcitiesResult: any[]): void => {
    setCititesResult(newcitiesResult)
  }

  return (
    <div className='relative'>
      <div className="h-full w-80 backdrop-blur-[15px] bg-[#ffffff33] absolute top-0 left-0 z-2 items-center p-16 border-[#d9d9d9] border-solid border-2 rounded-lg flex flex-col justify-between">
        <SearchBar onSearchTextChange={handlecitiesResultChange} />
        -----------{citiesResult}
        <p className='light-gray-text font-sans'>Medellín, Colombia</p>
        <p className='light-gray-text font-sans'>Mar 20, 2023</p>
        <p>20 +/- 3</p>
        <p>Feels like</p>
        <div className='flex flex-row'>
          <p>9.8%</p>
          <p>Wind: WSW 6mph</p>
        </div>
        <div className='flex flex-row'>
          <p>88%</p>
          <p>Humidity</p>
        </div>

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

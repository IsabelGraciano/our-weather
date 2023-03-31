import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useState, type ChangeEvent } from 'react'
import { searchCitiesList } from '../functions/fetchWeatherAPI'
import PropTypes from 'prop-types'

interface Props {
  onSearchTextChange: (cities: any[]) => void
}

function SearchBar ({ onSearchTextChange }: Props): JSX.Element {
  const [searchText, setSearchText] = useState<string>('')

  const changeSearchText = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    setSearchText(event.target.value)
    const cities = await searchCitiesList(event.target.value)
    onSearchTextChange(cities)
  }

  return (
    <div className='mb-4 relative'>
      <input type="text" value={searchText} onChange={changeSearchText} className="border-2 border-t-transparent border-l-transparent border-r-transparent border-[#d9d9d9] bg-transparent w-80 rounded-md hover:outline-none focus:outline-none text-center" />
      <MagnifyingGlassIcon className="absolute h-5 w-5 top-1/2 right-3 transform -translate-y-1/2 decoration-[#d9d9d9]"/>
    </div>
  )
}

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired
}

export default SearchBar

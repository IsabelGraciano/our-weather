import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

function SearchBar (): JSX.Element {
  return (
    <div className='mb-4'>
      <input type="text" className="border-2 border-t-transparent border-l-transparent border-r-transparent border-[#d9d9d9] bg-transparent rounded-md hover:outline-none focus:outline-none text-center" />
      <MagnifyingGlassIcon className="absolute h-4 w-4 decoration-[#d9d9d9]"/>
    </div>
  )
}

export default SearchBar

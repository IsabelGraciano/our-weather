import SearchBar from './searchBar'

function SideBar (): JSX.Element {
  return (
        <div className="h-full w-64 bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100">
            <SearchBar />
        </div>
  )
}

export default SideBar

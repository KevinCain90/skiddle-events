import { useState } from 'react'

const SearchPage = () => {
    const [searchInput, setSearchInput] = useState("")

    const handleChange = (e) => {
      setSearchInput(e.target.value)
    }

    return ( 
        <div className="w-full bg-teal-400 flex justify-center flex-col items-center">
            <img className="h-[180px] w-[400px]"
                src="https://d1plawd8huk6hh.cloudfront.net/assets/logo/png/skiddle-logo-white-landscape.png"
                alt="skiddle">
            </img>
            <input
                className='h-[50px] w-[400px] mb-4 p-2 rounded-md'
                type="text"
                placeholder="Search for events"
                value={searchInput}
                onChange={handleChange}
            />
        </div>
    )
}

export default SearchPage
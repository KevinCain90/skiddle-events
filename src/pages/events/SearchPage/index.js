import { useState, useEffect } from 'react'
import getEvents from '../../../services/getEvents'
import EventCard from '../../../comoponents/EventCard'; 

const SearchPage = () => {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState("");

    const handleChange = (e) => {
      setSearchInput(e.target.value)
    }

    useEffect(() => {
        getEvents(searchInput).then(data => {
            setSearchResults(data);
        });
    }, [searchInput]);

    return ( 
        <>
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
            <div className='my-8'>
                {searchResults && searchResults.length > 0 ?
                    searchResults.map(event => (
                        <div class="container m-auto grid grid-cols-3 gap-4">
                          <EventCard details={event} key={event.id}/>
                        </div>
                    ))
                : 
                    <div className='text-lg p-4 flex justify-center'>No results available, please try another search.</div>
                }
            </div>
        </>
    )
}

export default SearchPage
import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useParams } from 'react-router-dom';
import getEvent from '../../../services/getEvent';

const EventPage = () => {
    const { eventId } = useParams();
    
    const [eventDetails, setEventDetails] = useState("");

    useEffect(() => {
        getEvent(eventId).then(data => {
            setEventDetails(data);
        });
    }, [eventId]);

    return ( 
        eventDetails && eventDetails.venue ? (
            <div className="flex flex-row justify-center items-center flex-wrap">
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center bg-teal-400 p-2 min-w-full text-white mb-4">
                  <NavLink to={'/'}>
                    <img className="h-[180px] w-[400px]"
                         src="https://d1plawd8huk6hh.cloudfront.net/assets/logo/png/skiddle-logo-white-landscape.png"
                         alt="skiddle" />
                  </NavLink>
                  <h2 className='text-xl mb-4'>{eventDetails.eventname}</h2>
                  <img className="rounded-sm h-[180px] w-200x]" src={eventDetails.imageurl} alt="artist" />
                </div>
                <p className='mb-2 flex items-center text-base font-bold'>
                  Location: {eventDetails.venue.name} in {eventDetails.venue.cityname}
                </p>
                <p className='mb-2 flex items-center text-base font-bold'>Date: {eventDetails.startdate}</p>
                <p className='mb-2 flex items-center text-base font-bold'>Minimum age: {eventDetails.MinAge ? eventDetails.MinAge : 'N/A'}</p>
                <p className='flex items-center text-base mb-6'>{eventDetails.description}</p>
                <div className="grid grid-cols-3 gap-4 mb-10">
                  {eventDetails.artists
                    ? eventDetails.artists.map(artist => (
                        <NavLink to={`/artist/${artist.artistid}`}>
                          <h2 className='text-xl'>Performing artists: </h2>
                          <p>Click an artist to see more</p>
                          <div className="flex-col items-center mt-12">
                            <img
                              className="h-[250px] w-full mb-4"
                              src={artist.image}
                              alt={artist.artistid}
                            />
                            <p className="flex justify-center text-base">{artist.name}</p>
                          </div>
                        </NavLink>
                      ))
                    : ""}
                </div>
              </div>
            </div>
          ) : (
            <div className='text-lg p-4 flex justify-center'>No event details available, please try another search.</div>
          )
    )
}

export default EventPage
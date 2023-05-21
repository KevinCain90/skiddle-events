import { NavLink } from "react-router-dom";
import { FaCalendar, FaMapPin  } from 'react-icons/fa';
import { DateTime } from "luxon";

const EventCard = (details) => {
    return (
        <div className="max-w-sm rounded-sm shadow-lg border border-neutral-200 text-gray-500">
            <img className="h-56 w-full" src={details.details.imageurl} alt="Event" />
            <div class="px-6 py-4">
                <h3 class="font-bold text-base mb-2 text-center">{details.details.eventname}</h3>
                <p class="text-sm mb-6">
                    {details.details.description}
                </p>
                <p className='mb-2 flex items-center text-sm'>
                    <FaMapPin className="mr-2"/>
                    {details.details.venue.name}, {details.details.venue.town}
                </p>
                <p className='mb-6 flex items-center text-sm'>
                    <FaCalendar className="mr-2"/>
                    {DateTime.fromISO(details.details.startdate).toFormat('dd MMM, yyyy')}
                </p>
                <NavLink to={`/event/${details.details.id}`}>
                    <button className="rounded-md h-[50px] w-full border-none bg-teal-400 text-white">View details</button>
                </NavLink>
            </div>
        </div>
    )
}

export default EventCard
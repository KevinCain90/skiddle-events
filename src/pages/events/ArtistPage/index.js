import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useParams } from 'react-router-dom';
import getArtist from '../../../services/getArtist';
import { FaTwitter, FaSpotify } from 'react-icons/fa'

const ArtistPage = () => {
    const { artistId } = useParams();
    
    const [artistDetails, setArtistDetails] = useState("");

    useEffect(() => {
        getArtist(artistId).then(data => {
            setArtistDetails(data);
        });
    }, [artistId]);

    return ( 
        <div className="flex justify-center items-center flex-wrap">
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center bg-teal-400 p-2 min-w-full text-white mb-4">
                    <NavLink to={'/'}>
                    <img className="h-[180px] w-[400px]"
                            src="https://d1plawd8huk6hh.cloudfront.net/assets/logo/png/skiddle-logo-white-landscape.png"
                            alt="skiddle" />
                    </NavLink>
                    <h2 className='text-xl mb-4'>{artistDetails.name}</h2>
                    <img className="rounded-sm h-[180px] w-200x]" src={artistDetails.imageurl} alt="artist" />
                </div>
                <p className='mb-10 w-1/2 flex items-center text-base'>
                    {artistDetails.description}
                </p>
                <span className='mb-2 flex items-center text-base'>
                    <a href={artistDetails.twitter}>
                        <FaTwitter className="mx-2" color='blue' size='80' />
                    </a>
                    <a href={artistDetails.spotifyartisturl}>
                        <FaSpotify color='green' size='80' href=''/>
                    </a>
                </span>
            </div>
        </div>
    )
}

export default ArtistPage
import './Weather.css'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import WeatherInfoContainer from './WeatherInfoContainer'
import { useState } from 'react'
export default function Weather(){
    const [location,setLocation] = useState("");

     return(
        <div className="main">
            <Navbar/>
            <Searchbar setLocation={setLocation} />
            <WeatherInfoContainer location={location}  />
        </div>
     )
}
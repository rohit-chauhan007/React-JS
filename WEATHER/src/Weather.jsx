import './Weather.css'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import WeatherInfoContainer from './WeatherInfoContainer'
import { useState } from 'react'
export default function Weather(){
    const [location,setLocation] = useState("");
    const [weather,setWeather] = useState(null);
     return(
        <div className="main">
            <Navbar/>
            <Searchbar setLocation={setLocation} setWeather ={setWeather} />
            <WeatherInfoContainer location={location}  weather={weather} />
        </div>
     )
}
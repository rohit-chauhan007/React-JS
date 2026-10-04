import TextField from "@mui/material/TextField";
import "./Searchbar.css";
const GEOCODING_API_URL = import.meta.env.VITE_WEATHER_GEOCODING_API_URL;
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const API_URL = import.meta.env.VITE_WEATHER_API_URL;

import Button from "@mui/material/Button";
import { useState ,useEffect} from "react";
import Weather from "./Weather";
export default function Searchbar({ setLocation, setWeather }) {
  const [city, setCity] = useState("");
  const [longatude, setLongatude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const limit = 1;
  //long lan
 
  const geocoding_url = `${GEOCODING_API_URL}?q=${city}&limit=${limit}&appid=${API_KEY}`;
  
  const url = `${API_URL}?lat=${latitude}&lon=${longatude}&appid=${API_KEY}&units=metric`;

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    lonLat();
    {
      if (city == "") {
        setCity(location);
      } else {
        setLocation(city);
      }
    }
    setCity("");
  };
  //callling geocoding api
  const lonLat = async () => {
    const response = await fetch(geocoding_url);
    const data = await response.json();
    setLatitude(data[0].lat);
    setLongatude(data[0].lon);
    WeatherApi();
  };
  //weather api calling

   const WeatherApi = async () => {
    console.log(longatude);
    const response = await fetch(url);
    const Weatherdata = await response.json();
    console.log(Weatherdata);
    console.log(Weatherdata)
     {
      if(Weatherdata.cod == "400"){
        console.log(Weatherdata.message);
      }else{
        setWeather(Weatherdata);
      }
     }
    
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="searchbar">
        <input
          onChange={handleChange}
          className="input"
          type="text"
          placeholder="Enter city..."
          value={city}
        />
        <Button onClick={handleSubmit} variant="outlined" color="success">
          Search{" "}
        </Button>
      </div>
    </form>
  );
}

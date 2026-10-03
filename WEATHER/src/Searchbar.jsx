import TextField from "@mui/material/TextField";
import "./Searchbar.css";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const API_URL = import.meta.env.VITE_WEATHER_API_URL;
const GEOCODING_API_URL = import.meta.env.VITE_WEATHER_GEOCODING_API_URL;
console.log(GEOCODING_API_URL);

import Button from "@mui/material/Button";
import { useState } from "react";
export default function Searchbar({ setLocation }) {
  const [city, setCity] = useState("");
  const [longatude,setLongatude] = useState(null);
  const [latitude,setLatitude] = useState(null);
  const cities = city;
  const limit = 1;
  const geocoding_url = `${GEOCODING_API_URL}?q=${cities}&limit=${limit}&appid=${API_KEY}`;
  const lat = latitude;
  const lon = longatude;
  const url = `${API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  const handleChange = (evt) => {
    console.log("calling handlechange");
    setCity(evt.target.value);
  };

  //callling geocoding api
  const lonLat = async () => {
    console.log("lonlat");
    const response = await fetch(geocoding_url);
    const data = await response.json();
    console.log(data);
    setLatitude(data[0].lat);
    setLongatude(data[0].lon)
    console.log("weather api called");
    WeatherApi();
  };
  //weather api calling 
  const WeatherApi = async() =>{
    console.log("calling weatherapi");
    const response = await fetch(url);
    const data = await response.json();
    console.log("called weather api",data)
  }
  const handleSubmit = async (evt) => {
    console.log("calling handle submit");
    lonLat();
    evt.preventDefault();
    {
      if (city == "") {
        setCity(location);
      } else {
        setLocation(city);
      }
    }
    setCity("");
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

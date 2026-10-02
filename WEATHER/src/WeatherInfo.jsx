import { useState } from "react";
import "./WeatherInfo.css";
import myFunction from "./date";
import { Icon } from "@iconify/react";
import weatherImage from "./assets/weather.png";
import WeatherCard from "./WeatherCard";

export default function WeatherInfo({ location = "Delhi" }) {

    const date = myFunction();

    return (
        <div className="weather_info">
            <div className="weather_locations">
                <div className="weather_location_info">
                    {!location ? <h1 style={{ fontFamily: "-apple-system" }}>Delhi</h1> : <h1 style={{ fontFamily: "-apple-system" }}>{location}</h1>}
                    <Icon
                        icon="basil:current-location-outline"
                        width={"2em"}
                        height={"2em"}
                    />
                </div>
                <div className="weather_date_info">
                    <p style={{ fontFamily: "-apple-system", }}>{date}</p>
                </div>
            </div>

            <div className="weather_temp">
                <div className="weather_forcast_img">
                    <img src={weatherImage} />
                </div>
               <div className="weather_temprature">
                <h2>28℃</h2>
               </div>
            </div>
        {/* weather_card_component */}
        <div className="weather_card">
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
        </div>
           
        </div>
    );
}

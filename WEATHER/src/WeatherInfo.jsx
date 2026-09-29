import { useState } from "react";
import "./WeatherInfo.css";
import  myFunction  from "./date";
import { Icon } from "@iconify/react";
export default function WeatherInfo({location = "Delhi"}) {
  
    const date = myFunction();
    
    return (
        <div className="weather_info">
            <div className="weather_locations">
                <div className="weather_location_info">
                   {!location ? <h1 style={{fontFamily:"-apple-system"}}>Delhi</h1> : <h1 style={{fontFamily:"-apple-system"}}>{location}</h1>}
                    <Icon 
                        icon="basil:current-location-outline"
                        width={"2em"}
                        height={"2em"}
                    />
                </div>
                <div className="weather_date_info">
                  <p style={{fontFamily:"-apple-system",}}>{date}</p>
                </div>
            </div>
            <div className="weather_temp_info">
                <div className="weather_temp">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
}

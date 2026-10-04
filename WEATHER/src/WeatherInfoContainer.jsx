import WeatherInfo from './WeatherInfo'
import './WeatherInfoContainer.css'
export default function WeatherInfoContainer({location = "Delhi",weather}) {
    return (
        <div className="weather_info_container">
            <WeatherInfo location={location} weather={weather}/>
        </div>
    )
}
import WeatherInfo from './WeatherInfo'
import './WeatherInfoContainer.css'
export default function WeatherInfoContainer({location = "Delhi"}) {
    return (
        <div className="weather_info_container">
            <WeatherInfo location={location} />
        </div>
    )
}
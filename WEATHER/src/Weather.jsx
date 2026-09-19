import './Weather.css'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
export default function Weather(){
     return(
        <div className="main">
            <Navbar />
            <Searchbar />
        </div>
     )
}
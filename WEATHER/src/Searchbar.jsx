import TextField from '@mui/material/TextField';
import './Searchbar.css'
export default function Searchbar(){
    return(
        <div className="searchbar">
           <input className='input' type='text' placeholder='Enter city...'/>
        </div>
    )
}
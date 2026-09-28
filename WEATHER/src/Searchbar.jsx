import TextField from '@mui/material/TextField';
import './Searchbar.css'

import Button from '@mui/material/Button';
import { useState } from 'react';
export default function Searchbar({setLocation}){
   const [city,setCity] = useState("");

     const handleChange = (evt) =>{
       setCity(evt.target.value);
        
     }
     const handleSubmit = (evt) =>{
        evt.preventDefault();
      {if(city == ""){
        setCity(location);
      }else{
        setLocation(city) ;
      } 
      }
       setCity("");
      
        
     }
    
    return(
   <form onSubmit={handleSubmit}>
        <div  className="searchbar">
           <input onChange={handleChange} className='input' type='text' placeholder='Enter city...' value={city} />
           <Button   onClick={handleSubmit} variant='outlined' color='success'>Search </Button>
        </div>
     </form>
    )
}
import "./Navbar.css"
import Button from '@mui/material/Button';
export default function Navbar(){
    return (
       <header className="navbar">
        <h1>SkyWard</h1>
        <nav className="navigation">
            <Button variant="outlined">Login</Button> 
            <Button variant="outlined" color="error">Logout</Button>
             
        </nav>
       </header>
    )
}
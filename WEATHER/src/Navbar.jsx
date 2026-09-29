import "./Navbar.css"
import Button from '@mui/material/Button';
import { Icon } from "@iconify/react";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
export default function Navbar() {
    const showNavigation = () =>{
        console.log("click")
    }
    return (
        <header className="navbar">
            <div className="nav-logo">
                <Icon style={{color:"yellow"}}
                    icon="bi:cloud-sun-fill"
                    width={"2em"}
                    height={"2em"}
                />
                <h1 style={{color:"white",fontFamily: "ui-sans-serif",fontOpticalSizing: "auto",fontStyle:"normal",fontStyle:"italic",fontWeight:"300"}}>SkyWard</h1>
            </div>
                <div onClick={showNavigation} className="hidden"><MenuOutlinedIcon fontSize="large" color="disabled" /></div>
            <nav className="navigation">
                <Button variant="outlined">Login</Button>
                <Button variant="outlined" color="error">Logout</Button>
            </nav>
        </header>
    )
}
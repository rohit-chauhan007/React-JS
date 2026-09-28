import "./Navbar.css"
import Button from '@mui/material/Button';
import { Icon } from "@iconify/react";
export default function Navbar() {
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

            <nav className="navigation">
                <Button variant="outlined">Login</Button>
                <Button variant="outlined" color="error">Logout</Button>
            </nav>
        </header>
    )
}
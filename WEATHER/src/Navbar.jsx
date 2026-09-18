import "./Navbar.css"
export default function Navbar(){
    return (
       <header className="navbar">
        <h1>SkyWard</h1>
        <nav className="navigation">
            <li><a href="#">Login</a></li>
             <li><a href="#">Sing up</a></li>
        </nav>
       </header>
    )
}
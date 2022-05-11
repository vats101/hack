import React from 'react'
import './navbar.css';
import logo from '../images/logo.png'
import { useNavigate ,Link} from 'react-router-dom';
const Navbar = (username) => {

    console.log(username);
    const navigate = useNavigate();

    return (
        <>
            <div className="Navbar">
                <img className="logo" src={logo} />
                {/* <a className="links" href="/mainpage">Home</a>
                <a className="links" href="/about">About</a>
                <a className="links" href="/sos">SOS</a> */}
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/sos'>SOS</Link>
                <Link to="/community">Community</Link>
            </div>
       </>
       )
    }
        
export default Navbar
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    //updating the state from clicking, initial value is set to false
    const[click, setClick] = useState(false);
    
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };


    //avoid signup button from showing in smaller screen size after refresh
    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link path="/housing-site" className="navbar-logo" onClick={closeMobileMenu}>
                        NWHM <i className="fab fa-typo3"/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to ="/housing-site" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/services" className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/products" className="nav-links" onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar

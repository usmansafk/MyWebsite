import React from 'react'
import './NavBarStyle.scss'

import { LinkedIn, GitHub, Email } from '@material-ui/icons';

const NavBar = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className='wrapper'>

                <div className="left">
                    <a href="https://www.linkedin.com/in/usmansajidcode/" target="_blank">
                        <LinkedIn className="icons" />
                    </a>
        
                    <a href="https://github.com/usmansafk" target="_blank">
                        <GitHub className="icons" />
                    </a>

                    <a href="mailto:usman230@hotmail.co.uk">
                     <Email className="icons" />
                     </a>
                </div>

                <div className="center">
                    <a href="#welcome" className="logo">usmans~afk</a>
                </div>


                <div className="right">
                    <div className="burger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>

                </div>

     
            </div>

        </div>
    )
}

export default NavBar

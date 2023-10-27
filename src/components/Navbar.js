import React from 'react'
import {NavLink} from 'react-router-dom'
import '../style/Navbar.css'

const Navbar = () => {

    return (

        <nav className="nav-wrapper">
            <div className="centered">
                <ul className="right">
                    <li><NavLink to="/" activeclassname="active">Cartão</NavLink></li>
                    <li><NavLink to="/recarga" activeclassname="active">Recarga</NavLink></li>
                    <li><NavLink to="/config" activeclassname="active">Configuração</NavLink></li>
                </ul>
            </div>
        </nav>

    )

}

export default Navbar;
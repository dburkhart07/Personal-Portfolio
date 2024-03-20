import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import {faLinkedin, faGithub,} from '@fortawesome/free-brands-svg-icons'
import {faHome, faUser, faEnvelope,} from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => (
    <div className = 'nav-bar'>
        <nav>
            <NavLink exact = "true" activeclassname = "active" to = "/">
                <FontAwesomeIcon icon = {faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink exact = "true" activeclassname = "active"  className = "about-link" to = "/about">
                <FontAwesomeIcon icon = {faUser} color="#4d4d4e" />
            </NavLink>

            <NavLink exact = "true" activeclassname = "active" className = "contact-link" to = "/contact">
                <FontAwesomeIcon icon = {faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target = "_blank" rel = 'noreferrer' href = 'https://www.linkedin.com/in/dalton-burkhart-a49679290/'>
                    <FontAwesomeIcon icon = {faLinkedin} color = "4d4d4e" />
                </a>
            </li>

            <li>
                <a target = "_blank" rel = 'noreferrer' href = 'https://github.com/dburkhart07'>
                    <FontAwesomeIcon icon = {faGithub} color = "4d4d4e" />
                </a>
            </li>

            
        </ul>
    </div>
)

export default Sidebar


import { useState } from 'react'; // Imports useState
import { Link } from 'react-router-dom'; // Links for React Router
import ThemeToggle from './ThemeToggle'; // Imports ThemeToggle
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Imports fontawesome
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Imports symbols from fontawesome

import './Header.css'; //Imports Header.css so now it is linked.

const Header = ({ title, darkMode }) => { //Header component takes two props.
    const [menuOpen, setMenuOpen] = useState(false); // Uses the useState hook to manage tge state of the nav menu. menuOpen tracks whether the menu is open (true) or closed (false).

    const toggleMenu = () => { // This function toggles the menuOpen state. Function is called when the user clicks the hamburger menu button.
        setMenuOpen(!menuOpen);
    }; 


    return (
        <header className={darkMode ? 'dark' : 'light'}> { /*header element has a dynamic class name that changes based on the darkMode prop. If darkMode is true, the class 'dark' is applied.*/ }
            <h1 className="CV-title">Madelen's CV website</h1> { /*Displays title */ }
            {!menuOpen && <h1 className="CV-title">{title}</h1>} { /*conditionally rendered and only shows the title prop passed to the Header component when the menu is not open. */ }
            <button className="menu-toggle" onClick={toggleMenu}> { /*Displays a hamburger menu icon. When the button is clicked, it calls the toggleMneu function, which toggles the menuOpen state between true and false. This decides if the nav menu will be shown or not. */ }
                <FontAwesomeIcon icon={faBars} />
            </button>
            <ThemeToggle className="theme-toggle" /> { /*Button we style for dark/light mode in CSS */}
            <nav className={menuOpen ? 'active' : ''}> { /*className of the nav element is dynamically set to 'active' if menuOpen is true. */ }
                <ul>
                    <li><Link to="/">Profile</Link></li> { /*Link component from React Router to handle client-side navigation without reloading the page. */}
                    <li><Link to="/cv">CV</Link></li> { /*Link component from React Router to handle client-side navigation without reloading the page. */}
                    <li><Link to="/projects">Projects</Link></li>{ /*Link component from React Router to handle client-side navigation without reloading the page. */}
                    <li><Link to="/contact">Contact Me</Link></li>{ /*Link component from React Router to handle client-side navigation without reloading the page. */}
                </ul>
            </nav>
        </header>
    );
};

export default Header; // Exporting Header component so it can be used elsewhere.
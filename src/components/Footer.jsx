// import { Link } from "react-router-dom";
import './Footer.css'; { /* Imports Footer.css */}

const Footer = ({ name, year }) => { { /* Footer, a functional component, is defined and accepts props as an argument. */}
    return (
        <footer>
            <p>&copy; {year} {name}. All rights reserved.</p> { /* {year} and {name} are dynamic placeholders that will display values that are passed into the Footer component via the {year} and {name} props. */}
        </footer>
    );
};

export default Footer; { /* Exports Footer component so it can be used elsewhere. */}
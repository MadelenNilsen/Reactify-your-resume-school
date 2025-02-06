import { useDispatch, useSelector } from 'react-redux'; // Import hooks from react-redux
import { toggleTheme } from '../store/themeSlice'; // Importing toggleTheme action
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing fontawesome
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'; // Importing symbols from fontawsome
import './ThemeToggle.css'; // Access ThemeToggle.css

    function ThemeToggle({ className }) { // Defines functional component called ThemeToggle. The className prop allows us to pass custom CSS classes to this component when we use.
    const dispatch = useDispatch(); // Initializes the dispatch function by calling the useDispatch hook.
    const darkMode = useSelector((state) => state.theme.darkMode); // Use useSelector hook to access darkMode state from Redux store.

    return (
        <button className={className} onClick={() => dispatch(toggleTheme())}> { /* When the button is clicked it dispatches the toggleTheme action to the Redux store. It will then toggle between light and dark mode. */}
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} /> { /* Shows the different symbols depending on what mode we are in */}
        </button>
    );
}

export default ThemeToggle; // Exports the component so we can use it elsewhere
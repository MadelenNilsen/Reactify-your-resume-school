import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Imports ReactRouter
import { useSelector } from "react-redux"; // Imports useSelector.
import Header from "./components/Header"; // Imports Header.
import Footer from "./components/Footer"; // Imports Footer.
import Profile from "./pages/Profile"; // Imports Profile.
import CV from "./pages/CV"; // Imports CV.
import Contact from "./pages/Contact"; // Imports Contact.
import Projects from "./pages/Projects";// Imports Projects.
import "./App.css"; // Imports App.css so we can access it.



function App() { // Functional component
  const darkMode = useSelector((state) => state.theme.darkMode); // This Hook allows us to read data from the Redux store. Accesses the darkMode state from the theme slice in store.
  const currentYear = new Date().getFullYear(); // currentYear variable stores the current year by using JS Date() object. We use this in our Footer component.

  return (
    <Router> { /*Router component is wrapped around entire app. Enables the routing functionality meaning React can listen for changes in URL and show corresponsing content without reoading the page. */ }
      <article className={`App ${darkMode ? "darkMode" : "lightMode"}`}> { /*Article is wrapped around entire component. Checks if darkMode is true. Changes looks based on wheter it is true or false. */ }
      <Header darkMode={darkMode} /> { /*Header component recieves prop */}

        <Routes> { /*The routes components holds all routes to our pages. Clicking the different links will take you to the corresponding page. */}
          <Route path="/" element={<Profile />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer name="Madelen" year={currentYear} /> { /*Renders Footer component. name="Madelen" is a static prop where the value "Madelen" is being passed to the Footer component. */ }
      </article>
    </Router>
  );
}

export default App; // Exports App component so it can be used elsewhere
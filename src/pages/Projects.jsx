import React from "react"; // Imports React library.
import { useState, useEffect } from 'react'; // Imports useState and useEffect hooks.

const Projects = () => { // Declaration of the Projects functional component. 
    const URL = "https://api.github.com/users/madelennilsen/repos" // API from my GitHub repo

const [data, setData] = useState([]); // data is the state variable that holds the list of repos. setData os the function to update tge date state. Initially an empty array, it has no data yet.


  useEffect(() => { // Hook to perform fetching data after the component renders.
      const fetchData = async () => { // Inside the useEffect hook an asynchronous function fetchData is defined to fetch the data from my GitHub API.
        try {
          const response = await fetch(URL); // Fetches API here.
          if (!response.ok) { // Checks if response was successful.
            throw new Error("Something went wrong while fetching API, please try again."); // If error, this will be logged.
          }
          // respons.json turns JSON respons into JS
          const result = await response.json();
          // result is now a JS object
          setData(result); // After data is succesfully fetched, setData(result) is called to update the data state with feched data.
          console.log(result); // Logs the fetched data.
        } catch(error) {
          console.error("Something went wrong ", error.message); // If error occurs this will be logged to the console.
        }
      };

      
    fetchData();
  }, []);

  return ( // The JSX returned by component.
    <> { /* Must be wrapped*/}
    <h2 className="projects-title">Check Out My Latest Projects</h2> { /* This text renders on the screen */}
    <article className="project-container">
   {data.map((repo) => ( // Maps over the data array and generates a new article element for each repository. The repo variable represents each individual repository.
     <article className="project-card" key={repo.id}> { /* The key is a unique idenifier for each element in the list */ }
       <a href={repo.html_url} target="_blank" rel="noopener noreferrer"> { /*Creates a clickable link for each repo, opening in new page because I had issues with my page not reloading properly  */ }
         {" "}
         <h3>{repo.name}</h3> { /*Renders repo's name in a h3 tag*/}
       </a>
       <p className="project-description">{repo.description || "No description available"}</p> { /*Renders repo discription, if available, if not it writes 'no description available. */}
     </article>
   ))}
   </article>
 </>
);
}

export default Projects; // Exports component so it can be used elsewhere.
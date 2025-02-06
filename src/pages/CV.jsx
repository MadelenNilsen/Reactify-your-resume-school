import React from "react"; // Imported React.



function CV() { // CV component
  return (
<section className="section-cv"> { /*Wrapped in section */ }
  <h2 className="cv-heading">Courses</h2> { /*Heading */}
  <ul className="cv-list"> { /*Unordered list with courses */ }
    <li>HTML and CSS</li>
    <li>JavaScript 1, 2 och 3</li>
    <li>UX/UI</li>
    <li>Back-End Development</li>
    <li>TypeScript</li>
    <li>Front-End Project</li>
  </ul>

  <h2 className="cv-heading">Experience</h2> { /*Heading */}
  <section className="cv-job"> { /*New section with past experience */ }
    <h3>Polarbröd AB (2019 – 2022)</h3>
    <p><strong>Packager</strong></p> { /*Bold text */}
    <ul>
      <li>Worked in a fast production pace and collaborated in teams to ensure quality and efficiency.</li>
      <li>Developed problem-solving skills by handling unexpected situations.</li>
      <li>Improved communication and teamwork skills in a dynamic environment.</li>
    </ul>
  </section>

  <section className="cv-job"> { /*Section containing experince */}
    <h3>Sidensjö Hemtjänst (2017 – 2021)</h3>
    <p><strong>Nursing Home</strong></p> { /*Bold text*/}
    <ul>
      <li>Provided care and support to elderly and people with disabilities.</li>
      <li>Developed strong communication, patience, and problem-solving skills.</li>
      <li>Worked independently and in teams to ensure well-being and safety.</li>
    </ul>
  </section>

  <h2 className="cv-heading">Frameworks and Libraries</h2> { /*New heading for frameworks and libraries*/}
  <ul className="cv-list"> { /*Unordered list */}
    <li>React</li>
    <li>Redux</li>
    <li>Vite</li>
  </ul>

  <h2 className="cv-heading">Skills</h2> { /*Skills heading */}
  <ul className="cv-list"> { /*Unordered list*/}
    <li>Problem-solver</li>
    <li>Team work</li>
    <li>Independent thinking</li>
    <li>Cominication skills</li>
  </ul>
</section>
  );
}

export default CV; // Exporting CV component so we can use it elsewhere.
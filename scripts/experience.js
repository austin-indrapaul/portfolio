let experience_data = [
  {
    name: "Pharmaceutical client, Accenture",
    role: "QA / manual tester",
    duties: [
      "Understanding the requirements from the story card and doing Asset audit, Test planning, Test case preparation and Test Execution.",
      "Content authoring and maintenance of the web-pages.",
      "Ensuring that the web pages are in compliance with accessibility standards.",
      "Testing all the Functionality, device compatibility and browser compatibility of the websites",
    ],
  },
  {
    name: "Oil & gas client, Accenture",
    role: "Sitecore Developer / Content Author / QA",
    duties: [
      "Understanding the requirements from the story card and doing Asset audit, design planning, design implementation, Test case preparation and Test Execution.",
      "Building the components for the websites.",
      "Content management, content authoring and maintenance of the web-pages.",
      "Providing the accessibility features and ensuring that the web pages are in compliance with accessibility standards.",
      "Testing all the Functionality, device compatibility and browser compatibility of the websites",
    ],
  },
];

// {experience} this variable is from about.js file

function Experience() {
  return (
    <div>
      <h2>Experience</h2>
      <hr />
      <p>
        I have overall experience of {experience} years. I worked with different industry clients, from which i got some knowledge about their industry. I used some skills that i learnt earlier in these projects. And i also learnt new skills as a project requirement. 
      </p>
      <p>
        <br />
        <strong>
          <em>Industry Experience: </em>
        </strong>
        Pharmaceutical / Life sciences, Supply chain management, Oil & gas
      </p>
      <p>
        <strong>
          <em>Tools used in the projects: </em>
        </strong>
        Jira, Sitecore CMS
      </p>
      {experience_data.map((data) => (
        <Projects name={data.name} role={data.role} duties={data.duties} />
      ))}
    </div>
  );
}

ReactDOM.render(<Experience />, document.querySelector("#experience"));

function Projects(props) {
  return (
    <div className="projects">
      <h5>
        <strong>{props.name}</strong>
      </h5>
      <h6>
        <em>
          <strong>Role: </strong>: {props.role}
        </em>
      </h6>
      <p>
        <ul>
          {props.duties.map((duty) => (
            <li>{duty}</li>
          ))}
        </ul>
      </p>
    </div>
  );
}

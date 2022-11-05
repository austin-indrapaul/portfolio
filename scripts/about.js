let education_details = [
  {"degree":"B.E (MECHANICAL) - Anna University","school":"Panimalar Engineering College - Chennai.","class":"Distinction", "percentage":85.9},
  {"degree":"H.S.C - Class 12 (TN Board)","school":"Hussain Memorial Matric. Hr. Sec. School - Chennai.","class":"Distinction", "percentage":90.5},
  {"degree":"S.S.L.C - Class 10 (TN Board)","school":"Hussain Memorial Matric. Hr. Sec. School - Chennai.","class":"Distinction", "percentage":98},
]

var experience = calculate_experience();

function calculate_experience(){
  var total_months = getMonthDifference(new Date('2020-12-14'), new Date())
  return Math.round((total_months/12)*10)/10
}

function getMonthDifference(startDate, endDate) {
  return (
    endDate.getMonth() -
    startDate.getMonth() +
    12 * (endDate.getFullYear() - startDate.getFullYear())
  );
}


function Education(props){
  return(
    <div className="education-data">
      <div>
        <h2>{props.degree}</h2>
        <p>{props.school}</p>
      </div>
      <div class="h3">
        <p>Percentage: {props.percentage}%</p>
        <p>Class: {props.grade}</p>
      </div>
    </div>
  );
}


function About() {
  return (
    <div>
      <h2>About</h2>
      <hr />
      I'm trained in various technologies which includes Java, Front end development , and .NET. Looking forward to work as a Full Stack Developer and provide 360° value to my organisation.
      <br />
      <br />
      <div id="summary">


      <h5>
        <strong>Professional summary</strong>
      </h5>
      <ul>
        <li>I have overall years experience of {experience} years.</li>
        <li>
          Working as an Associate Software Developer / ASE in Accenture from
          December 2020 to till date.
        </li>
        <li>
          Trained in various technologies which includes Java, Front end development, and .NET.
        </li>
        <li>
          Have good experience in delivering projects in Agile Methodology.
        </li>
        <li>Have good knowledge in Software Development Life Cycle.</li>
      </ul>
      <br />
      </div>
      <div id="education">
      <br />
      <h5>
        <strong>Education</strong>
      </h5>
      {education_details.map((data)=>(<Education degree={data.degree} school={data.school} percentage={data.percentage} grade={data.class} />))}
      </div>
      

      <br />
      <h5>
        <strong>Trainings and Certificatations</strong>
      </h5>
      <ul>
        <li>Completed GFT Training on .NET in Accenture with merit</li>
        <li>
        Full Stack Developer and Web accessibility expert certification from Accenture.
        </li>
        <li>
        AZ-900: Microsoft Azure Fundamentals
        </li>
        <li>SC-900: Microsoft Security, Compliance, and Identity Fundamentals</li>
      </ul>
      <br />

      <br />
      <div id="awards">
      <h5>
        <strong>Awards & Recognition</strong>
      </h5>
      <ul>
        <li>Meritorious reward for completing training in Accenture as a top scorer.</li>
        <li>
        Sparkling star of the month award, from Accenture.
        </li>
        <li>Anna university rank holder / College Topper in B.E 1st Semester.</li>
      </ul>
      <br />
      </div>
      <div
        style={{
          display: "flex",
          "flex-direction": "row",
          "justify-content": "center",
          "flex-wrap":"wrap"
        }}
        id="downloads"
      >
        <a className="btn btn-primary btn-lg m-3" href="./resources/Austin Indrapaul - CV.pdf" target="_blank" download="Austin Indrapaul - Resume">
        Download Resume &nbsp;&nbsp;<i class="bi bi-file-arrow-down-fill h4 align-middle"></i> 
        </a>
        <a className="btn btn-success btn-lg m-3" href="./resources/Austin Indrapaul - Certificates.zip" download="Austin Indrapaul - Certificates">
        Download Awards & Certificates.zip &nbsp;&nbsp;<i class="bi bi-archive-fill h4 align-middle"></i>
        </a>
      </div>
    </div>
  );
}

ReactDOM.render(<About />, document.querySelector("#about"));

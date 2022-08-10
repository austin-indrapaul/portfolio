function Projects() {
    return (
      <div>
        <h2>Projects</h2>
        <hr />

        <div class="proj">
            <h3>Banking System, Accenture Training</h3>
            <p>
            As a part of GFT training in Accenture, I was asked to develop a fully featured banking web application as a capstone project. This application features functionalities like CRUD operations for customer, deposit, money transfer, get the list of transactions and it implements three tier architecture.</p>
            {/* <p>
            <strong>Skills Used:</strong> C#, ASP .NET MVC, MS SQL Server, Entity Framework, HTML5, CSS3, Bootstrap, JavaScript, jQuery.
            <br/>
            <strong>Tools Used:</strong> Visual Studio code 2019, SQL Server Management Studio.
            </p> */}
        </div>

        <br/>
        <div class="proj">
            <h3>Vehicle Mass Identification Using Artificial Intelligence, Ashok Leyland (Jan 2020-Mar 2020)</h3>
            <p>
            I got an opportunity in Ashok Leyland to do my B.E. Final year project. I implemented the Machine Learning concepts to predict the vehicle mass using the performance data from the telematics system of the Vehicle.
            </p>
            <p>
            <strong>Skills Used:</strong> MATLAB language, Machine Learning algorithms.
            <br/>
            <strong>Tools Used:</strong> MATLAB, MS Excel.
            </p>
        </div>
    </div>
    );
}

ReactDOM.render(<Projects />, document.querySelector("#projects"));
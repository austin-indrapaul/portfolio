function Projects() {
    return (
      <div>
        <h2>Projects</h2>
        <hr />

        <div className="proj">
            <h3>Mini Projects / Case Studies</h3>
           <br/>
            <div className="m-3 mx-4">
                    <div className="proj">
                        <h4>Rest API with Springboot</h4>
                        <p>
                            This project demonstrate the CRUD operations through a Java REST application. This application is built using following technologies spring framework, H2 Database & Spring Data JPA with Hibernate.
                        </p>
                        <div className="row  justify-content-center">
                            <button type="button" className="col-12 col-md-5 btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#myModal">
                                Watch the project demo
                            </button>
                            <a type="button" href="https://github.com/austin-indrapaul/springboot_API_project_1" target="_blank" className="col-12 col-md-5 btn btn-warning m-2" >
                                Download the source code
                            </a>
                        </div>

                        <div className="modal" id="myModal">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">

                                <div className="modal-header">
                                    <h4 class="modal-title">🎞️ Watch the demo - Rest API with Springboot</h4>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                </div>

                                <div className="modal-body">                                
                                    <video class="od-VideoCanvas-video" src="https://public.bn.files.1drv.com/y4m4k4fy4lHG85jr9K89lhljv2l6fDgL2DqA5Rf7J6NCn43Eh97QF-Y5ywLsE8PI6_oePXWbA34tunsLPx7JEft0ciAOFHirOSYxGmWtve2uq-mn1Gil7i6TZtJYhwNMljDODpCAV_-kOIGmUR7_tDu0G0hBqNL8TADyMpBnG-akD98uTSQtEJ5w7KtZBl-xwQ9JTlCt48E7Aow7WovpI9-AX78khjovtHcSxZvHhCg70A?" width="100%" controls></video>                                  
                                </div>

                                <div className="modal-footer">
                                    <a type="button" href="https://github.com/austin-indrapaul/springboot_API_project_1" target="_blank" className="col-12 col-md-5 btn btn-warning" >
                                        Download the source code
                                    </a>
                                    <button type="button" className="col-12 col-md-5 btn btn-danger" data-bs-dismiss="modal">Close</button>
                                </div>

                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <br/>

        <div className="proj">
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
        
        <div className="proj">
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
        <br/>
        
    </div>
    );
}

ReactDOM.render(<Projects />, document.querySelector("#projects"));
function Skills() {
    return (
      <div>
        <h2 style={{"text-align":"center", "text-decoration":"underline"}}>Skills</h2>
        {/* <hr /> */}
        <div>
          <table class="table">
            <tr>
              <td>Languages</td>
              <td>Java, C#, Python</td>
            </tr>
            <tr>
              <td>Frameworks</td>
              <td>JSP, ASP.NET, ASP .NET MVC, Entity Framework</td>
            </tr>
            <tr>
              <td>Web Technologies</td>
              <td>HTML5, CSS3, JavaScript, jQuery, React JS</td>
            </tr>
            <tr>
              <td>Database</td>
              <td>MS SQL Server</td>
            </tr>
            <tr>
              <td>Tools</td>
              <td>Git, Jira, Sitecore CMS</td>
            </tr>
            <tr>
              <td>Other skills</td>
              <td>Data science with python</td>
            </tr>
          </table>
        </div>
        </div>
    );
}

ReactDOM.render(<Skills />, document.querySelector("#skills"));

function Footer() {
  return (
    <div id="footer-content">
      <p>Thanks for your time. If you like my profile kindly contact me.</p>
      <div class="social">
        <p id="email" class="">
          <a
            style={{ color: "yellow" }}
            href="mailto:austin.indrapaul@gmail.com"
          >
            <i class="bi bi-envelope-fill"></i> Email
          </a>
        </p>
        <p id="linkedIn" class="">
          <a
            href="https://www.linkedin.com/in/austin-indrapaul/"
            style={{ color: "dodgerblue" }}
            target="_blank"
          >
            <i class="bi bi-linkedin"></i> Linked In
          </a>
        </p>
      </div>
      <p id="ending">
        <small>
          &copy; Belongs to Austin Indrapaul : HTML5, CSS3, Bootstrap,
          JavaScript, jQuery, ReactJs and Git technologies were used to build this
          website.
        </small>
      </p>
    </div>
  );
}
ReactDOM.render(<Footer />, document.querySelector("#footer"));

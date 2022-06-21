function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand me-lg-4" href="">
          <i class="bi bi-journal-text"></i> My Portfolio
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 mb-md-0">
            <li class="nav-item ms-lg-2 dropdown">
              <a
                style={{ color: "black" }}
                class="nav-link dropdown-toggle"
                href="#about"
                id="navbarDropdown-1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a
                    style={{ color: "black" }}
                    class="nav-link dropdown-item"
                    href="#summary"
                  >
                    Professional Summary
                  </a>
                </li>
                <li>
                  <a
                    style={{ color: "black" }}
                    class="nav-link dropdown-item"
                    href="#education"
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a
                    style={{ color: "black" }}
                    class="nav-link dropdown-item"
                    href="#awards"
                  >
                    Awards & Recognition
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item ms-lg-2 dropdown">
              <a
                style={{ color: "black" }}
                class="nav-link"
                href="#experience"
              >
                Experience
              </a>
              </li>
            
              

            <li class="nav-item ms-lg-2">
              <a style={{ color: "black" }} class="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li class="nav-item ms-lg-2">
              <a style={{ color: "black" }} class="nav-link" href="#projects">
                Projects
              </a>
            </li>
          </ul>

          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 mb-md-0">
            <li id="email" class="nav-item ms-lg-2">
              <a
                style={{ color: "#00703c" }}
                class="nav-link"
                href="mailto:austin.indrapaul@gmail.com"
                data-toggle="tooltip"
                data-placement="top"
              >
                <i class="bi bi-envelope-fill"></i> Email
              </a>
              <span class="email-tooltip email-tooltip-md email-tooltip-sm">
                austin.indrapaul@gmail.com
              </span>
            </li>
            <li id="linkedIn" class="nav-item ms-lg-2">
              <a
                style={{ color: "blue" }}
                class="nav-link"
                href="https://www.linkedin.com/in/austin-indrapaul/"
                target="_blank"
              >
                <i class="bi bi-linkedin"></i> Linked In
              </a>
              <span class="linkedIn-tooltip linkedIn-tooltip-md linkedIn-tooltip-sm">
                Check linkedIn Profile
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

ReactDOM.render(<NavBar />, document.querySelector("#navigation"));

$(".nav-link").click(function () {
  $(".nav-link").not(this).removeClass("active");
  $(this).toggleClass("active");
});

$("#navigation").mouseleave(function () {
  $(".nav-link").removeClass("active");
});


$("a[class=\"nav-link\"], a[class=\"nav-link dropdown-item\"], .navbar-brand").click(function () {
  let target = $("button.navbar-toggler")
  let value =  $("button.navbar-toggler").attr("aria-expanded");
  if(value){
    target.addClass("collapsed");
    target.attr("aria-expanded","false");
    $("#navbarSupportedContent").removeClass("show");
  }
});

// $("a[class=\"nav-link dropdown-item\"]").click(function () {
//   let target = $("button.navbar-toggler")
//   let value =  $("button.navbar-toggler").attr("aria-expanded");
//   if(value){
//     target.addClass("collapsed");
//     target.attr("aria-expanded","false");
//     $("#navbarSupportedContent").removeClass("show");
//   }
// });

// $(".navbar-brand").click(function () {
//   let target = $("button.navbar-toggler")
//   let value =  $("button.navbar-toggler").attr("aria-expanded");
//   if(value){
//     target.addClass("collapsed");
//     target.attr("aria-expanded","false");
//     $("#navbarSupportedContent").removeClass("show");
//   }
// });

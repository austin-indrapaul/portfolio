function Header() {
  return (
    <div id="header-content">
      <h1 id="intro">Hi, </h1>
      <p id="description"></p>
    </div>
  );
}
ReactDOM.render(<Header />, document.querySelector("#header"));

function Writer(txt, speed = 100, id) {
  let i = 0;
  function write() {
    if (i < txt.length) {
      document.getElementById(id).innerHTML += txt.charAt(i);
      i++;
      setTimeout(write, speed);
    }
  }
  write();
}

function CallWriter() {
  function call1() {
    setTimeout(Writer("I'm Austin Indrapaul.", 75, "intro"), 75);
  }
  setTimeout(call1, 50);

  function call2() {
    Writer("Software Developer", 75, "description");
  }
  setTimeout(call2, 1700);
}

CallWriter();

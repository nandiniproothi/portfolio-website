//Get the button
let mybutton = document.getElementById("btn-back-to-top");
let myimage = document.getElementById("analytics");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
    myimage.style.display = "block";
  } else {
    mybutton.style.display = "none";
    myimage.style.display = "none";
  }
}

function backToTop() {
  console.log("working")
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function setTheme(){
    var w = new Worker('setThemeCSS.js');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    w.postMessage(prefersDarkScheme.matches);
    w.onmessage = (e) => {
        var theme_change = e.data; // fetch the message posted by the worker
        document.getElementById("theme-link").href = theme_change; // change theme accordingly
        w.terminate();
    };
}

function changeTheme() {
    var w = new Worker("changeTheme.js"); // web worker created
    var theme = document.querySelector("#theme-link").getAttribute("href"); // fetch the current css file name
    w.postMessage(theme); // pass this value to the worker
    w.onmessage = (e) => {
      var theme_change = e.data; // fetch the message posted by the worker
      document.getElementById("theme-link").href = theme_change; // change theme accordingly
      w.terminate();
    };
}

function confettiParty(){
  var heart = document.getElementById('heartPNG')
  party.confetti(heart);
}
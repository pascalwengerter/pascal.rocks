import "../styles/tailwind.css"
import "../styles/index.scss"

// console.info("Bridgetown is loaded!")

window.onload = function () {

    var text = "Hello, friend";
    var i = 0;

    var consoleTyper = setInterval(function () {
        if (i != text.length) {
        i += 1;
        document.getElementById("hello").innerHTML = text.substr(0, i) + '_';
        }
        else {
        clearInterval(consoleTyper);
        }
    }, 120);

};

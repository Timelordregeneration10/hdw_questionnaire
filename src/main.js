import generate from "./components/happy.js";
generate(0);

(function () {
    var parent = document.getElementsByClassName('contain-box')[0];
    setInterval(function () {
           parent.scrollTop+=2;
    }, 3);
})()
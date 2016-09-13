var menuX = document.getElementById("menuX");
var bar1 = document.getElementById("bar1");
var bar2 = document.getElementById("bar2");
var bar3 = document.getElementById("bar3");

(function() {
    menuX.addEventListener("click", function(e) {
        e.preventDefault();
        if (bar1.style.top !== "24px") {
            bar1.style.top = "24px";
            bar3.style.top = "24px";
            //allow timeout to animate rotation to appear fluid
            setTimeout(
                function() {
                    bar1.style.transform = "rotate(45deg)";
                    bar3.style.transform = "rotate(-45deg)";
                    bar2.style.display = "none";
                }, 200);
        } else {
            bar1.style.transform = "rotate(0deg)";
            bar3.style.transform = "rotate(0deg)";
            setTimeout(
                //allow timeout to animate bar movement to appear fluid
                function() {
                    bar2.style.display = "block";
                    bar1.style.top = "16px";
                    bar3.style.top = "32px";
                }, 200);
        }
    })
})();

var menuRotate = document.getElementById("menuRotate");
var bar1R = document.getElementById("bar1R");
var bar2R = document.getElementById("bar2R");
var bar3R = document.getElementById("bar3R");
// Toggle classlist on each click to rotate
(function() {
    menuRotate.addEventListener("click", function(e) {
        e.preventDefault();
        this.classList.toggle("rotate");
    })
})();

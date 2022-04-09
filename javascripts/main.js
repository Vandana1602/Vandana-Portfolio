window.addEventListener("load", initEvents);
function initEvents() {
    const toTop = document.querySelector(".to-top");
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            toTop.classList.add("active");
        }
        else {
            toTop.classList.remove("active");
        }
    })
    document.getElementById("ham-bar").onclick = function () {
        document.getElementById("ham-bar").style.display = "none";
        document.getElementById("cross").style.display = "block";
        document.getElementById("popup").style.display = "block";
    }
    document.getElementById("cross").onclick = function () {
        document.getElementById("ham-bar").style.display = "block";
        document.getElementById("cross").style.display = "none";
        document.getElementById("popup").style.display = "none";
    }
    function myFunction(x) {
        if (x.matches) {
            document.getElementById("popup").style.display = "flex";
        } else {
            document.getElementById("popup").style.display = "none";


        }
    }
    var x = window.matchMedia("(min-width: 768px)")
    myFunction(x)
    x.addListener(myFunction)
    document.querySelector("#head-trans").style.transform = "translatex(0%)";
    document.querySelector("#head-trans").style.opacity = "1";
    document.querySelector("#head3-trans").style.transform = "translatex(0%)";
    document.querySelector("#head3-trans").style.opacity = "1";
    document.getElementById("div-btn").style.transform = "translatex(0%)";

    document.getElementById("serv-1").onclick = function () {
        
        document.getElementById("serv-1").style.border = "2px solid white";
        document.getElementById("serv-2").style.border = "none";
        document.getElementById("row-2").style.display = "none";
        document.getElementById("row-1").style.display = "block";
    }
    document.getElementById("serv-2").onclick = function () {
        document.getElementById("serv-2").style.border = "2px solid white";
        document.getElementById("serv-1").style.border = "none";
        
        document.getElementById("row-1").style.display = "none";
        document.getElementById("row-2").style.display = "block";
    }

    function myFunction(y) {
        if (y.matches) {
            document.getElementById("serv-1").onclick = function () {
        
                document.getElementById("serv-1").style.border = "2px solid white";
                document.getElementById("serv-2").style.border = "none";
                document.getElementById("row-2").style.display = "none";
                document.getElementById("row-1").style.display = "flex";
            }
            document.getElementById("serv-2").onclick = function () {
                document.getElementById("serv-2").style.border = "2px solid white";
                document.getElementById("serv-1").style.border = "none";
                
                document.getElementById("row-1").style.display = "none";
                document.getElementById("row-2").style.display = "flex";
            }
        }
    }
    var y = window.matchMedia("(min-width: 992px)")
    myFunction(y)
    y.addListener(myFunction)

    }

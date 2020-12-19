window.onclick = function () {
    var oP = document.getElementsByTagName("p");
    if (oP[0].hasAttribute("class")) {
        oP[0].onclick = function () {
            oP[0].removeAttribute("class");
        };
    }
}
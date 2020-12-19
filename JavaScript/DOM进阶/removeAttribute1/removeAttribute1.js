window.onload = function () {
    var oP = document.getElementsByTagName("p");
    oP[0].onclick = function () {
        oP[0].removeAttribute("class");
    };
}
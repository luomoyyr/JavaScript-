window.onload = function () {
    var oBtn = document.getElementById("btn");
    var oBox = document.getElementById("box");
    oBtn.onclick = function () {
        alert(getComputedStyle(oBtn).backgroundColor);
    };
}
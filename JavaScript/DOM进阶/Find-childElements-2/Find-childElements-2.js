window.onload = function () {
    var oBtn = document.getElementById("btn");
    var oUl = document.getElementById("list");
    oBtn.onclick = function () {
        oUl.removeChild(oUl.lastChild);
    }
}
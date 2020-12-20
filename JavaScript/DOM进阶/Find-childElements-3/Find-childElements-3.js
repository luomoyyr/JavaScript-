window.onload = function () {
    var oBtn = document.getElementById("btn");
    var oUl = document.getElementById("list");
    oBtn.onclick = function () {
        if (oUl.lastChild.nodeType == 3) {
            oUl.removeChild(oUl.lastChild);
            oUl.removeChild(oUl.lastChild);
        } else {
            oUl.removeChild(oUl.lastChild);
        }
    }
}
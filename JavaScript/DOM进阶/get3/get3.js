window.onload = function () {
    var oBtn = document.getElementById("btn");
    oBtn.onclick = function () {
        var oTxt = document.getElementById("txt");
        alert(oTxt.value);
    };
}
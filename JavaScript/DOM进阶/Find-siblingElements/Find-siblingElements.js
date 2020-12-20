window.onload = function () {
    var oBtn = document.getElementById("btn");
    var oUl = document.getElementById("list");
    oBtn.onclick = function () {
        var preElement = oUl.children[2].previousElementSibling;
        oUl.removeChild(preElement);
    };
}
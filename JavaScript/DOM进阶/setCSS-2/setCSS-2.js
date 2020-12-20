window.onload = function () {
    var oBtn = document.getElementById("btn");
    var oBox = document.getElementById("box");
    oBtn.onclick = function () {
        // 获取两个文本框的值 （也就是输入的内容）
        var attr = document.getElementById("attr").value;
        var val = document.getElementById("val").value;
        oBox.style[attr] = val;
    };
}
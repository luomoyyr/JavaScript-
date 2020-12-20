window.onload = function () {
    var oBtn = document.getElementById("btn");
    var oBox = document.getElementById("box");
    oBtn.onclick = function () {
        // 获取文本框的值 （也就是输入的内容）
        var txt = document.getElementById("txt").value;
        oBox.style.cssText = txt;
    };

}
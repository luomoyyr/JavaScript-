window.onload = function()
{
    var oBtn = document.getElementById("btn");
    oBtn.onclick = function()
    {
        // 获取body中的第一个元素
        var oFirst = document.querySelector(".txt");

        // 获取2个文本框
        var oTag = document.getElementById("tag");
        var oTxt = document.getElementById("txt");

        // 根据2个文本框的值来创建一个新的节点
        var oNewTag = document.createElement(oTag.value);
        var oNewTxt = document.createTextNode(oTxt.value);
        oNewTag.appendChild(oNewTxt);
        document.body.replaceChild(oNewTag,oFirst);
    }
}
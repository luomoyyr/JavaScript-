window.onload = function(){
    var oBtn = document.getElementById("btn");
    // 为按钮添加点击事件
    oBtn.onclick = function(){
        var oUl = document.getElementById("list");
        var oTxt = document.getElementById("txt");
        // 将文本框的内容转换为 文本节点
        var txtNode = document.createTextNode(oTxt.value);
        // 动态创建一个li元素
        var oLi = document.createElement("li");
        // 将文本节点插入li元素中去
        oLi.appendChild(textNode);
        // 将 li 元素插入ul元素中去
        oUl.appendChild(oLi);
    };
}

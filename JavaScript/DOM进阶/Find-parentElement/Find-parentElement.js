window.onload = function () {
    var oTd = document.getElementsByTagName("td");
    // 遍历每一个td元素
    for (var i = 0; i < oTd.length; i++) {
        // 为每一个td元素添加点击事件
        oTd[i].onclick = function () {
            // 获得当前td的父元素 （即tr）
            var oParent = this.parentNode;
            // 为当前td的父元素添加样式
            oParent.style.color = "white";
            oParent.style.backgroundColor = "red";
        };
    }
}
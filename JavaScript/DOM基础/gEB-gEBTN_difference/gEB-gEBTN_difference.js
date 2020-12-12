window.onload = function() {
    document.body.innerHTML = " <input type='button' value='按钮'/><input type='button' value='按钮'/><input type='button' value='按钮'/>";
    var oBtn = document.getElementsByTagName("input");
    oBtn[0].onclick = function() {
        alert("表单元素共有：" + oBtn.length + "个");
    };
}
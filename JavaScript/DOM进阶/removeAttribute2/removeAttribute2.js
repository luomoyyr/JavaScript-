window.onload = function () {
    var oP = document.getElementsByTagName("p");
    var oBtnAdd = document.getElementById("btn_add");
    var oBtnRemove = document.getElementById("btn_remove");
    // 添加class
    oBtnAdd.onclick = function () {
        oP[0].className = "main";
    };
    // 删除class
    oBtnRemove.onclick = function () {
        oP[0].removeAttribute("class");
    };
}
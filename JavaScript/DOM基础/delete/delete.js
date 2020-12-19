window.onload = function ()
{
    var oBtn = document.getElementById("btn");
    oBtn.onclick = function ()
    {
        var oUl = document.getElementById("list");
        // 删除最后一个元素
        oUl.removeChild(oUl.lastElementChild);
    }
}
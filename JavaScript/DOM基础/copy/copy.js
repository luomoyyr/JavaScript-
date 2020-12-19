window.onload = function ()
{
    var oBtn = document.getElementById("btn");
    oBtn.onclick = function()
    {
        var oUl = document.getElementById("list");
        document.body.appendChild(oUl.cloneNode(1));
    }
}
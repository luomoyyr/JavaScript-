window.onclick = function () {
    var oBtn = document.getElementById("btn");
    var oFruit = document.getElementById("fruit");
    var str = "";
    oBtn.onclick = function () {
        for (var i = 0; i < oFruit.length; i++) {
            if (oFruit[i].checked) {
                str += oFruit[I].value;
            }
        }
        alert(str);
    };
}
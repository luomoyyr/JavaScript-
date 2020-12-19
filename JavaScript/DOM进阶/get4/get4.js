window.onload = function () {
    var oBtn = document.getElementById("btn");
    var oFruit = document.getElementsByName("fruit");
    oBtn.onclick = function () {
        for (var i = 0; i < oFruit.length; i++) {
            if (oFruit[i].checked) {
                alert(oFruit[i].value);
            }
        }
    };
}
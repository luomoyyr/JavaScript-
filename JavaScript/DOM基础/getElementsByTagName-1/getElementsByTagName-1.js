window, onload = function() {
    var arr = ["HTML", "CSS", "JavaScript", "jQuery", "Vue.js"];
    var oUI = document.getElementById("list");
    var oLi = document.getElementsByTagName("li");
    for (var i = 0; i < oLi.length; i++) {
        oLi[i].innerHTML = arr[i];
        oLi[i].style.color = "red";
    }
}
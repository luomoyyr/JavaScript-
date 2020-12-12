window.onload = function() {
    var CheckBox = document.getElementsByName("fruit");
    for (var i = 0; i < CheckBox.length; i++) {
        CheckBox[i].checked = true;
    }
}
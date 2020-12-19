window.onload = function () {
    var olnput = document.createElement("input");
    olnput.id = "submit";
    olnput.type = "button";
    olnput.value = "@";
    document.body.appendChild(olnput);

    olnput.onclick = function () {
        alert(olnput.id);
    };
}
var str1 = "test";
var str2 = "test123";
var str3 = "5.4";
str1 = parseInt(str1); // NaN
str2 = parseInt(str2); // NaN
str3 = parseInt(str3); // 只取得数字 5,可换成parseFloath函数则输入5.4
document.write("str1 =" + str1 + "<br>");
document.write("str2 =" + str2 + "<br>");
document.write("str3 =" + str3 + "<br>");
if (isNaN(str1) == true) {
    document.write("str1=" + str1 + "is not a number<br>")
}
if (isNaN(str2) == true) {
    document.write("str2=" + str2 + "is not a number<br>")
}
if (isNaN(str3) == true) {
    document.write("str3=" + str3 + "is not a number<br>")
}
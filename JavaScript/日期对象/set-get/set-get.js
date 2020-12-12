var d = new Date();
d.setFullYear(2021, 1, 1);
var my_day = d.getDate();
var my_month = d.getMonth() + 1;
var my_year = d.getFullYear();
document.write("今天是设置之后的" + my_year + "年" + my_month + "月" + my_day + "日" + "<hr/>");

var w = new Date();
var my_day = w.getDate();
var my_month = w.getMonth() + 1;
var my_year = w.getFullYear();
document.write("今天是设置之前的" + my_year + "年" + my_month + "月" + my_day + "日");
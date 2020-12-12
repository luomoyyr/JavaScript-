// match()方法
var str = "HelloWorld!";
document.write("match()方法：" + "<br/>");
document.write(str.match("world") + "<br/>");
document.write(str.match("World") + "<br/>");
document.write(str.match("worlld") + "<br/>");
document.write(str.match("world!") + "<hr/>");
// indexOf()方法
document.write("indexOf()方法：" + "<br/>");
document.write(str.indexOf("world") + "<br/>");
document.write(str.indexOf("World") + "<hr/>");
// search()方法
document.write("search()方法：" + "<br/>");
document.write(str.search("World"));
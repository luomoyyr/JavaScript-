// 创建数组的同时对元素赋值
var arr1 = new Array("html", "css", "javascript");
// 利用 for 循环获取所有数组元素
for (var i = 0; i < arr1.length; i++) {
    document.write(arr1[i] + "<br/>")
}
document.write("<hr>");
// 创建数组
var arr2 = new Array();
// 通过下标对数组元素赋值
arr2[0] = "html";
arr2[1] = "css";
arr2[2] = "javascript";
// 修改 arr[] 的值
arr2[0] = "哇哈哈哈";
document.write(arr2[0]);
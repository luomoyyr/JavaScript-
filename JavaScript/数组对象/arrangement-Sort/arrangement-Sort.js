// 升序比较函数
function asc(a, b) {
    return a - b;
}
// 降序比较函数
function des(a, b) {
    return b - a;
}
// 创建数组的同时对元素赋值
var arr = new Array(3, 9, 5, 4, 1, 12, 50);
document.write("排序前的数组元素：" + arr.join(",") + "<br>");
arr.sort(asc);
document.write("升序后的数组元素：" + arr.join(",") + "<br>");
arr.sort(des);
document.write("降序序后的数组元素：" + arr.join(",") + "<br>");
// reverse()方法
document.write("将数组反向排列：" + arr.reverse());
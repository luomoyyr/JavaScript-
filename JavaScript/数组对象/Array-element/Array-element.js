var arr = new Array("html", "css", "javascript", "jQuey", "Ajax");
// slice()方法
document.write(arr.slice(1, 3) + "<hr>");
// unshift() 方法
document.write("原数组元素：" + arr + "<br>");
arr.unshift("abc", "def");
document.write("开头添加新元素后的新元素：" + arr + "<hr>");
// push() 方法
arr.push("123", "456");
document.write("末尾添加新元素后的新元素：" + arr + "<hr>");
// shift() 方法
document.write("删除的第一个数组元素为：" + arr.shift() + "<hr>");
// pop() 方法
document.write("删除的最一个数组元素为：" + arr.pop());
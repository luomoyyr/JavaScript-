var msg = "\n函数的递归调用：\n\n";
// 响应按钮的点击事件
function Test() {
    var result;
    msg += "调用语句：\n";
    msg += "  result=sum(20);\n";
    msg += "调用步骤：\n";
    result = sum(20);
    msg += "计算结果：\n";
    msg += " result=" + result + "\n";
    alert(msg);
}
// 计算当前步骤加和值
function sum(m) {
    if (m == 0) {
        return 0;
    } else {
        msg += "  result=" + m + "sum(" + (m - 2) + ");\n";
        result = m + sum(m - 2);
    }
    return result;
}
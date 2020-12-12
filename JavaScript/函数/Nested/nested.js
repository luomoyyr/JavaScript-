        // 定义阶乘函数
        function fun(a) {
            // 嵌套函数定义，计算平方值的函数
            function multi(x) {
                return x * x;

            }
            var m = 1;
            for (var i = 1; i <= multi(a); i++) {
                m = m * i;
            }
            return m;
        }
        var sum = fun(2) + fun(3);
        document.write(sum);
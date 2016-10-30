/**
 * Created by Administrator on 2016/10/30 0030.
 */


/**
 * 给字符串对象新功能，去除字符串两端的空格。
 * @returns {string}
 */
String.prototype.trim = function () {
    // 定义两个变量，一个记录开始的位置，一个记录结束的位置
    // 对开始的位置字符串进行判断，如果是空格就递增，直到不是空格为止
    // 对结束的位置字符串进行判断，如果是空格就递减，直到不是空格为止

    var start, end;
    start = 0;
    end = this.length - 1;

    while (start <= end && str.charAt(start) == ' ') {
        start++;
    }

    while (start <= end && str.charAt(end) == ' ') {
        end--;
    }

    return this.substring(start, end + 1);

}

/**
 * 字符串新功能，添加一个将字符串转换成字符数组。
 * 返回一个数组
 */
String.prototype.toCharArray = function () {

    // 定义一个数组。
    var chs = [];

    for (var x = 0; x < this.length; x++) {
        chs[x] = this.charAt(x);
    }
    return chs;
}

String.prototype.reverse = function () {

    // 将数组的位置置换功能进行了封装,并定义到了反转功能内部.(闭包)
    function swap(arr, a, b) {
        var temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    var arr = this.toCharArray();

    for (var x = 0, y = arr.length - 1; x < y; x++, y--) {
        swap(arr, x, y);
    }

    return arr.join("");
}



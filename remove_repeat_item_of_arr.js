// 数组去重
var a = [1,2,2,5,4,3,6,5,7,8,9,8,0,9,8];

// 方法一
function foo (arr) {
	var res = [];
	arr.forEach(function(el , index){
		if (res.indexOf(el) == -1) {
			res.push(el);
		}
	});
	return res;
}

// 方法二
function foo (arr) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j <arr.length;) {
			if (arr[i] === arr[j]) {
				arr.splice(j, 1);
			} else {
				j++;
			}
		}
	}
}

// 方法三 此法有一个问题，对于'1'和1无法区分，因为在map里的key是一样的，因此有漏洞，不建议使用
function foo (arr) {
    var map = {}, res = [];
    for (var i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            res.push(arr[i]);
            map[arr[i]] = true;
        }
    }
    return res;
}
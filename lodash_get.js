var obj = { 'a': [{ 'b': { 'c': 3 } }] };

var result =deepGet(obj, 'a[0].b.c', 'wtf');
console.log(result);
// => 3

function deepGet (obj, path, defaultValue) {
    var arr = path.replace(/\[/g, '.').replace(/\]/g, '').split('.');
    var res = obj;
    arr.forEach(function (el) {
        res = res[el];
    });
    return res || defaultValue;
}


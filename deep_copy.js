function clone (obj) {
    if (typeCheck(obj, 'Object')) {
        var o = {};
        for (var i in obj) {
            o[i] = clone(obj[i]);
        }
        return o;
    } else if (typeCheck(obj, 'Array')) {
        var a = [];
        obj.forEach(function (el) {
            a.push(clone(el));
        });
        return a;
    } else {
        return obj;
    }
}

function typeCheck (obj, type) {
    var str = Object.prototype.toString.call(obj);
    return str === '[object ' + type + ']';
}
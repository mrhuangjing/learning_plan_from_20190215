Function.prototype._bind = function (obj) {
    var self = this;
    return function () {
        self.apply(obj, [].slice.call(arguments));
    };
};

var o = {
    name: 'hj'
};

function show () {
    console.log(this.name)
}

var name = 'w';

show();
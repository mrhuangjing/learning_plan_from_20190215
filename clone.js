function clone (obj) {
    if (typeCheck(obj, 'Array')) {
        return obj.map(el => {
            return clone(el);
        });
    } else if (typeCheck(obj, 'Object')) {
        const res = {};
        for (let i in obj) {
            res[i] = clone(obj[i]);
        }
        return res;
    } else {
        return obj;
    }
}

function typeCheck (obj, type) {
    return Object.prototype.toString.call(obj) === `[object ${type}]`;
}

let o = {
    name: 'hj',
    age: 28,
    actions: [{1: 'walk'}, {2: 'jump'}]
};

const res = clone(o);
res.age = 27;
res.actions[1][2] = 'fly';
console.log(o, res)
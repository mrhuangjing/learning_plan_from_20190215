var s = 'asdf-qwer-zxcv';
// asdfQwerZxcv

var res = s.split('-').map(function(el, index){
    if (index) {
        return el[0].toUpperCase() + el.substr(1);
    }
    return el;
}).join('');

console.log(res);
// return new Promise(function(resolve, reject){
    //执行一段代码
    // resolve(参数);
    // reject(参数);
// });

function Promise (cbk) {
    if (!cbk) {
        throw new Error('Promise resolver undefined is not a function');
    }
    this.state = 'pending';
}

Promise.all = function () {};
Promise.race = function () {};
Promise.resolve = function () {
    
};
Promise.reject = function () {};
Promise.try = function () {};

Promise.prototype = {
    then: function () {

        return new Promise(function(){});
    },
    catch: function () {

    },
    finally: function () {

    }
};
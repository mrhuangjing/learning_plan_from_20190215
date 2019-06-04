const self = {};
self.foo = function () {
    console.log(arguments.caller, arguments.callee);
}

self.foo();
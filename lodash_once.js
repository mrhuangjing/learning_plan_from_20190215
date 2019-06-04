function once (fn) {
    let cached = false;

    return () => {
        if (!cached) {
            fn();
            cached = true;
        }
    };
}

let foo = once(() => {
    console.log('call');
});

setInterval(foo, 500);
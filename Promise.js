class Promise_ {
    constructor (fn, state = 'Pending', resolveRes = null, rejectRes = null) {
        this.state = state;
        this.fn = fn;
        this.resolveRes = resolveRes;
        this.rejectRes = rejectRes;
        this.isFinally = false;

        this.fn && this.fn(Promise_.resolve, Promise_.reject);
    }

    static createMicroTask (cbk) {
        Promise.resolve().then(cbk);
    }

    static resolve (data) {
        if (this) { // Promise_类调用
            return new Promise_(null, 'fulfilled', data);
        } else { // 在fn中调用
            
        }
    }

    then (cbk) {
        if (this.state == 'fulfilled') {
            cbk && cbk(this.resolveRes);
            this.isFinally = true;
            return new Promise_().resolve();
        }
    }

    
}

let p = new Promise_((resolve, reject) => {
    resolve(1)
})
// Promise_.resolve(1)
// console.log(p)

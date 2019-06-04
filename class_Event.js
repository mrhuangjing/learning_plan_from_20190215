class Event {
    constructor () {
        this.handles = {};
    }

    on (eventName, fn) {
        if (!this.handles[eventName]) {
            this.handles[eventName] = [];
        }
        this.handles[eventName].push(fn);
    }

    trigger (eventName, param) {
        const len = this.handles[eventName].length;
        if (len) {
            for (let i = 0; i < len; i++) {
                this.handles[eventName][i](param);
            }
        }
    }

    off (eventName) {
        if (this.handles[eventName].length) {
            this.handles[eventName] = [];
        }
    }

    once (eventName, fn) {
        let wrapper = (...args) => {
            fn.apply(this, args);
            this.off(eventName,fn);
        };
        this.on(eventName, wrapper);
    }
}

const event = new Event();

event.once('show', () => {
    console.log('show');
});

event.trigger('show');
event.trigger('show');
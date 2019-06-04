// function foo () {
//     return new Promise((resolve, reject) => {
//         resolve(1);
//     });
// }

// function refuse () {
//     return new Promise((resolve, reject) => {
//         reject(1);
//     }).catch(e => {
//         return e;
//     });
// }

// async function main () {
//     try {
//         const res2 = await refuse();
//     } catch (e) {
//         console.log(e);
//     }
//     const res1 = await foo();
//     console.log('debugger');
// }

// main().then().catch(e => {
//     console.log(e);
// });



function operate () { // async operation
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const r = parseInt(Math.random() * 10);
            if (r > 5) {
                resolve(1);
            } else {
                reject(1);
            }
        }, 0);
    })
    .catch(e => {
        return false;
    });
}

async function test () { // call func operate & wait the result
    try {
        const res = await operate();
        console.log(res);
    } catch (e) {
        console.log('error -> ', e);
    }
}

test().catch(e => {
    console.log('catch -> ', e);
});
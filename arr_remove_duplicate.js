function solve (arr) {
    const res = [];
    arr.forEach(el => {
        if (res.indexOf(el) == -1) {
            res.push(el);
        }
    });
    return res;
}

function solve (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; ) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
            } else {
                j++;
            }
        }
    }
}

function solve (arr) {
    return [...new Set(arr)];
}

function solve (arr) {
    arr.sort();
    for (let i = 0; i < arr.length - 1; ) {
        if (arr[i] == arr[i + 1]) {
            arr.splice(i + 1, 1);
        } else {
            i++;
        }
    }
}

const arr = [1,1,3,2,5,4,4,6,6,6,8,8,8,8,8,876,9,0,1];
let res = solve(arr);
console.log(arr);
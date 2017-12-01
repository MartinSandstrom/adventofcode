var fs = require('fs');

fs.readFile("../../test-data/day-one.txt", "utf8", function (error, data) {
    if (error) {
        console.log(error);
    }
    console.log('ANSWER: 1420, GOT: ', doMagic(data));
});


let doMagic = (data) => {
    let sum = 0;
    let arr = data.split('');
    let numbersAHead = arr.length / 2;
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let next = getNextItem(i, arr, numbersAHead);
        if (current === next) {
            sum += parseInt(current);
        }
    }
    return sum;
}

let getNextItem = (i, arr, numbersAHead) => {
    while (numbersAHead > 0) {
        i++;
        if (!arr[i]) {
            i = 0;
        }
        numbersAHead--;
    }
    return arr[i];
}

console.log('ANSWER: 6 GOT:', doMagic('1212'));
console.log('ANSWER: 0 GOT:', doMagic('1221'));
console.log('ANSWER: 4 GOT:', doMagic('123425'));
console.log('ANSWER: 12 GOT:', doMagic('123123'));
console.log('ANSWER: 4 GOT:', doMagic('12131415'));



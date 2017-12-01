var fs = require('fs');

fs.readFile("../../test-data/day-one.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    console.log('ANSWER: ', doMagic(data));
});
let doMagic = (input) => {
    let sum = 0;
    let arr = input.split('');
    for(let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let next = arr[i + 1];
        if(!next) {
            next = arr[0];
        }
        if(current === next) {
            sum += parseInt(current);
        }
    }
    return sum;
}
console.log('ANSWER: 3 GOT:', doMagic('1122'));
console.log('ANSWER: 4 GOT:', doMagic('1111'));
console.log('ANSWER: 0 GOT:', doMagic('1234'));
console.log('ANSWER: 9 GOT:', doMagic('91212129'));
alert ("Connected!");

//Print all numbers between -10 and 19
console.log ("Print all numbers between -10 and 19");

// var num = -10;
// while (num <= 19) {
//     console.log(num);
//     num++;

for (var i = -10; i <= 19; i++) {
    console.log(i);
}


//Print all even numbers between 10 and 40
console.log ("Print all even numbers between 10 and 40");

// var num = 10;
// while (num <= 40) {
//     console.log(num);
//     num+=2;
// }


// while(num <= 40 {
//     if(num % 2 === 0) {
//         console.log(num);
//     }    
//     num++;
// }

for (var i = 10; i <= 40; i+=2) {
    console.log(i);
}

//Print all odd numbers between 300 and 333
console.log ("Print all odd numbers between 300 and 333");

var num = 300;

// while(num <= 333) {
//     if(num % 2 !== 0) {
//         console.log(num);
//     }    
//     num++;
// }

for (i = 300; i <= 333; i++) {
    if (i % 2 === 0) {
        console.log(i);

    }
}


//Print all numbers divisible by 5 AND 3 between 5 and 50

console.log ("Print all numbers divisible by 5 AND 3 between 5 and 50");

// var num = 5;

// while(num <= 50) {
//     if(num % 3 === 0 && num % 5 === 0) {
//         console.log(num);
//     }    
//     num++;
// }

for (i = 5; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}
const score = 400
//console.log(score);

const balance = new Number(100.65489555)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(3));

const  otherNumber = 0.0085
//console.log(otherNumber.toPrecision(5));

const hundreds = 10000000
//console.log(hundreds.toLocaleString('en-Us'));


// ++++++++++++++++++++ Maths ++++++++++++++++++++++++++++

//console.log(Math);//object{}
//console.log(Math.abs(-4));
//console.log(Math.round(4.5));
//console.log(Math.ceil(4.2));
//console.log(Math.min(2,5 ,8,9));
//console.log(Math.max(9, 99,95,26,59));

console.log(Math.random());// b/w 0 & 1--may bee 0.65452121
console.log(Math.random()*10);// b/w 1 & 9 but not accurate
console.log(Math.floor(Math.random()*10+1)); // to get accurate b/w 0 & 9

const min = 20 
const max = 50

console.log(Math.floor(Math.random() * (max - min + 1) + min));
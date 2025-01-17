// Dates

let myDate = new Date() // instance of date
//console.log(myDate); => 2025-01-16T14:26:31.902z
//console.log(myDate.toDateString());  => strg thu jan 16 2025
//console.log(myDate.toISOString()); => normal 
//console.log(myDate.toJSON()); => normal timeline
//console.log(myDate.toLocaleString()); => 1/16/25 2:34:41 pm

//let myCreatedDate = new Date(2025,0,16) // we can pass a specific value
//let myCreatedDate = new Date(2025,0,16,20,27)
let myCreatedDate = new Date("01-16-2025")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()// in mili sec

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime()); 
//console.log(Math.floor(Date.now()/1000)); // in sec

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1); // starts frm 0
console.log(newDate.getDay()); // wstarts from 0
console.log(newDate.getDate());

newDate.toLocaleString('default', {
    weekday: "long"
})







 





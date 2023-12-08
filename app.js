// var age = prompt("enter");
// var studentcard=prompt("do you have student card");
// var studentcard=true;

// -----------------------------------------------------------------------------------------------------
// if (age  >=18) {
//     console.log(
//         "you are aplicable"
//     );
// }
// else{
//     console.log("your age is not suitable")
// }
// ----------------------------------------------------------------------------------------------
// if (age  >=18) {
//     console.log(
//         "you are aplicable"
//     );
// }
// else  if(studentcard==true){

//     console.log("allow on student card");}
// else{
//     console.log("not allow")
// }
// ----------------------------------------------------------------------------------------------------
// if (age  >=18) {
//     console.log(
//         "you are aplicable"
//     );
// }
// else{
//     if(studentcard==yes){
//     console.log("allow on student card");}
// else{
//     console.log("not allow");
// }
// }
// ------------------------------------------------------------------------------------------------------------

// var age = 19;
// var cnic = true;
// var studentcard = false;
// if (age >= 18 && cnic == true) {
//     console.log("allow");
// }
// -----------------------------------------------------------------------------------------------
// if (age >= 18 || studentcard == true) {
//     console.log("allow");
// } else {
//     console.log("not allow");
// }
// -----------------------------------------------------------------------------------------------------
// var a="A";

// var b="B";

// var arr=["A","B","C"];

// console.log(arr);

// arr[2]=12;

// console.log(arr);

// arr[5]="D";

// console.log(arr);

// arr.push("D");
// arr.pop("D");

// console.log(arr);
// -------------------------------------------------------------------------------------------------------
// push and pop workimg at last
// shift and unshift workimg at start
// ------------------------------------------------------------------------------------------------------------------
// var arr = ["A", "B", "C", "D", "E"];

// arr.shift("");
// arr.unshift("2");
// var a = arr.slice(1, 4);
// console.log(a)
// arr.splice(2, 2, "1", "2");
// console.log(arr);

// var person = "computer"
// var person = "math"
// var person = "urdu"
// console.log(person);
// var first = "Do yo want this web-site to sends notifications? "
// alert(first)
// var a=10;
// var b = a + 1;
// var b=a++;
// // console.log(b, "B value");
// // console.log(a, "A value");
// var username = prompt("UserName");
// var age = prompt("Age");

// console.log(username, age);

// var totalMarks = 0;

// for (var i = 1; i <= 5; i++) {
//     var marks = parseFloat(prompt('Enter marks for Subject ' + i + ':'));

//     if (!isNaN(marks)) {
//         totalMarks += marks;
//     } else {
//         alert('Please enter valid marks for all subjects.');
//         break;
//     }
// }

// if (totalMarks !== 0) {
//     var percentage = (totalMarks / 5).toFixed(2);
//     alert('Total Marks: ' + totalMarks + '\nPercentage: ' + percentage + '%');
//     console.log('Total Marks: ' + totalMarks + '\nPercentage: ' + percentage + '%');
// }

var totalMarks = 500;

var a = prompt("enter marks of physics");
var a=parseInt(a)
var b = prompt("enter marks of chemistry");
var b=parseInt(b)
var c = prompt("enter marks of math");
var c=parseInt(c)
var d = prompt("enter marks of computer");
var d=parseInt(d)
var e = prompt("enter marks of urdu");
var e=parseInt(e)
var f = a + b + c + d + e;

alert(f);
var percentage = (f * 100) / totalMarks;

alert(percentage);




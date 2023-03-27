//Empty Array
var arr=[
    ["X", 2],
    ["Y", 3],
    ["Z", 4]
];


//Array Matrix
var arr=[
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
console.log(arr);


//Counting
for(var i=1; i<=10; i++){
    document.write([i]+"<br />")
}


//Table
var number= +prompt("Enter No. to view its multiplication table")
var length= +prompt("Enter Length of table")
document.write("<b>Multiplication Table of: </b>"+ number+'<br />'+"<b>Length: </b>"+ length+"<br />");

for(let i = 1; i <= length; i++) {

    const result = i * number;
    document.write(`${number} * ${i} = ${result}`+'<br />');
}




//Loop Fruits
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
    
for (var i=0; i<fruits.length;i++){
    document.write(fruits[i]+"<br />");
}
document.write("<br />")
for(var i=0; i<fruits.length;i++){
    document.write("Element at index "+" "+i+" "+"is "+fruits[i]+"<br />");

}




//Loop Eg
var counting="<b>Counting:</b>"
var arrLoop1=    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]
var reverseCounting= "<b>Reverse Counting:</b>"
var arrLoop2=    ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"]
var even="<b>Even:</b>"
var arrLoop3=    ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20"]
var odd="<b>Odd:</b>"
var arrLoop4=    ["1", "3", "5", "7", "9", "11", "13", "15", "17", "19"]
var series="<b>Series:</b>"
var arrLoop5=    ["2k", "4k", "6k", "8k", "10k", "12k", "14k", "16k", "18k", "20k"]

document.write(counting+"<br/>"+arrLoop1+"<br/>");    
document.write(reverseCounting+"<br/>"+arrLoop2+"<br/>");    
document.write(even+"<br/>"+arrLoop3+"<br/>");    
document.write(odd+"<br/>"+arrLoop4+"<br/>");    
document.write(series+"<br/>"+arrLoop5+"<br/>");    
    
 


//Search with in an Array
var arr=  ["cake", "apple pie", "cookie", "chips", "patties"]
var inputFind=prompt("What do you want to order?")
inputFind=inputFind.toLowerCase();
var flagValue=true;
for (i=0; i<arr.length; i++){
    if (arr[i] == inputFind) {
        flagValue=false;
        inputFind=inputFind.toLowerCase();
       alert(inputFind + " "+"is available at"+" "+i+" "+"in our bakery");
    } 

 }
 if(flagValue){
    alert("Not Found")
 }


//Largest number in an Array
var arr = [24,53,78,91,12];
temp = 0;

arr.forEach((element) => {
  if (temp < element) {
    temp = element;
  }
});

console.log(`The largest number in the array: ${temp}`);





//Smallest number in an Array
var arr = [24,53,78,91,12];
temp = Math.min(...arr);

console.log(`The smallest number in the array: ${temp}`);


//Multiples of 5
for(var i=1;i<=20;i++){
    document.write(i*5+", ")
}



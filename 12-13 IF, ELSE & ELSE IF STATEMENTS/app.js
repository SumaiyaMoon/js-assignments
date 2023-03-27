
//Case identification
var inputChar = prompt("Enter alphabet")
if(inputChar>="A" && inputChar<="Z"){
    alert(inputChar + " "+ "is an UpperCase character");
}
else if(inputChar>="a" && inputChar<="z"){
    alert(inputChar + " "+ "is a LowerCase character");
}
else{
    alert(inputChar + " "+ "is not an Alphabetical Character");
}


//Integers
var inputInteger1= +prompt("Enter Integer")
var inputInteger2= +prompt("Enter Integer")
if(inputInteger1>inputInteger2){
    alert("Greater no. is "+" "+inputInteger1)
}
else if(inputInteger1<inputInteger2){
    alert("Greater no. is "+" "+inputInteger2)
}
else if(inputInteger1==inputInteger2){
    alert("The given numbers"+" "+inputInteger1+" "+"&"+" "+inputInteger2+" "+"are equal")
}
else{
    alert("Given input is not an integer")
}


//+ive and -ive number identification
var inputInteger= +prompt("Enter Integer")
if (inputInteger>0){
    alert("no. is a positive integer")
}
else if (inputInteger<0){
    alert("no. is a negative integer")
}
else if (inputInteger==0){
    alert("no. is a zero integer")
}
else{
    alert("given input is NaN")
}


//Vowel
var inputCharString = prompt("Enter only one character"); 

    if(inputCharString=="a" || inputCharString=="e" || inputCharString=="i" || inputCharString=="o" || inputCharString=="u" ){
        alert("True")
    }
    else{
        alert("False")
    }
   


//Password
var myPassword = "JP123"
var enterPassword = prompt("Enter your Password")
if(myPassword===enterPassword){
    alert("Correct")
}
else{
    console.log("Incorrect Password")
    alert("Incorrect Password")
}


//This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}



//Time
var timeInput = +prompt("Enter Time","1900/2000/0200")
if(timeInput>=0000 && timeInput<1200){
    alert("Good Morning")
}
else if(timeInput>=1200 && timeInput<1700){
    alert("Good Afternoon")
}
else if(timeInput>=1700 && timeInput<2100){
    alert("Good Evening")
}
else if(timeInput>=2100 && timeInput<=2359){
    alert("Good Night")
}
else{
    alert("Enter a valid time")
}
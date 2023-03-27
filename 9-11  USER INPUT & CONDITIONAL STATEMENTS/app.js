//Input1 Karachi City

var inputCity= prompt("Enter City");
var myCity = "karachi";
inputCity=inputCity.toLowerCase();
if(inputCity==myCity){
    alert("Welcome to the City of Lights");
}
else{
    alert("Hello World");
}

//Input2 Gender
var inputGender = prompt("Enter your Gender","male/female");
var genderMale = "male";
var genderFemale = "female";
inputGender=inputGender.toLowerCase();
if(inputGender==genderMale){
    alert("Good Morning Sir")
}
else if(inputGender==genderFemale){
    alert("Good Morning Ma'am")
}


//Input3 Traffic Signals
 var mustStop="red";
 var readyToMove="yellow";
 var moveNow="green";
 var inputColor = prompt("Enter the color of the traffic signal to find out what message they are conveying.","Red/Yellow/Green") ;
inputColor=inputColor.toLowerCase();
if(inputColor==mustStop){
    alert("Must Stop");
}
else if(inputColor==readyToMove){
    alert("Ready to Move");
}
else if(inputColor==moveNow){
    alert("Move Now");
}


Fuel in litres

var inputCarFuel = +prompt("Enter Fuel in Car (ltr.s)","10/20/30/60") ;
 if (inputCarFuel<=0.25) {
    alert("Please refill the fuel in your car");
}
else{
    alert("Thanks for your input");

}



//Running Script

 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
//Command execution is completed at b so 82 is != to 83 (post increament)
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
//Command is stopped at c here so 12 is != to 13 (post increament)

if (c === 13){
alert("condition 2 is true");
}
//c++ === 13 is executed in this step as it was declared in above condition so now c=13
if (++c < 14){
alert("condition 3 is true");
}
// 14 is not less than 14 (++c===14)
if(c === 14){
alert("condition 4 is true");
}

 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}

 if("car" < "cat"){
alert("car is smaller than cat")
 }
 //difference of alphabetical order in b/w r & t



// Marksheet

var inputObtMarksSubj1 = +prompt("Enter Marks of 1st Subj");
var inputObtMarksSubj2 = +prompt("Enter Marks of 2nd Subj");
var inputObtMarksSubj3 = +prompt("Enter Marks of 3rd Subj");
var inputTotalMarksof3Subjects = +prompt("Total Marks");
var totalObtMarks = inputObtMarksSubj1+inputObtMarksSubj2+inputObtMarksSubj3
var percentage= (totalObtMarks/inputTotalMarksof3Subjects)*100 
var grade80andAbove= "A+";
var grade70andAbove= "A";
var grade60andAbove= "B";
var gradeBelow60= "Fail";
if(percentage>=80){
   document.write("<b>Total Marks: </b>"+" "+inputTotalMarksof3Subjects+"<br />"+"<b>Marks Obtained: </b>"+" "+totalObtMarks+"<br />"+"<b>Percentage: </b>"+" "+percentage+"<br />"+"<b>Grade: </b>"+" "+grade80andAbove+"<br />"+"<b>Remarks: </b>"+" "+"Excellent");
}
else if(percentage>=70){
    document.write("<b>Total Marks: </b>"+" "+inputTotalMarksof3Subjects+"<br />"+"<b>Marks Obtained: </b>"+" "+totalObtMarks+"<br />"+"<b>Percentage: </b>"+" "+percentage+"<br />"+"<b>Grade: </b>"+" "+grade70andAbove+"<br />"+"<b>Remarks: </b>"+" "+"Good");
}
else if(percentage>=60){
    document.write("<b>Total Marks: </b>"+" "+inputTotalMarksof3Subjects+"<br />"+"<b>Marks Obtained: </b>"+" "+totalObtMarks+"<br />"+"<b>Percentage: </b>"+" "+percentage+"<br />"+"<b>Grade: </b>"+" "+grade60andAbove+"<br />"+"<b>Remarks: </b>"+" "+"You need to improve");
}
else if(percentage<=59.99){
    document.write("<b>Total Marks: </b>"+" "+inputTotalMarksof3Subjects+"<br />"+"<b>Marks Obtained: </b>"+" "+totalObtMarks+"<br />"+"<b>Percentage: </b>"+" "+percentage+"<br />"+"<b>Grade: </b>"+" "+gradeBelow60+"<br />"+"<b>Remarks: </b>"+" "+"Sorry");
}


//Guess Game
var secretNumber=2;
var inputNo= +prompt("Guess the Number","1 to 10");
var guessno= 1;
if (inputNo== 1){
alert("Close enough to the correct answer");
}
else if(inputNo==2){
    alert("Bingo! Correct Answer");
}
else if (inputNo==3,4,5,6,7,8,9,10){
 alert("Keep Trying.. You will guess the Correct one Soon!")
}


//Use of modulus1
var input_Number = +prompt("Let me check if your number is divisible by 3");
if (input_Number % 3 == 0){
    alert("Yes, "+input_Number+ " " +"is divisible by 3");
}
else{
    alert("No, "+input_Number+ " " +"is not divisible by 3");

}

//Use of modulus2
var n= +prompt("Enter any number to know whether it's even or odd");
if(n % 2 == 0){
    alert(n+" "+"is an even number");
}
else{
    alert(n+" "+"is an odd number");
}


//Temp Alerts
var temp=  +prompt("Temperature")
if(temp>40){
    alert("It is too hot outside.")
}
else if(temp>30){
    alert("The Weather today is Normal.")
}
else if(temp>20){
    alert("Today’s Weather is cool.")
}
else if(temp>10){
    alert("OMG! Today’s weather is so Cool.")
}


Calculator


var operator = prompt('Enter operator ( either +, -, * , / or % ): ');

var number1 = +prompt('Enter first number: ');
var number2 = +prompt('Enter second number: ');

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else if (operator == '%') {
    result = number1 % number2
}
else {
    result = number1 / number2;
}

document.write(number1 +" "+ operator+" "+ number2+" "+ "="+" " +result);


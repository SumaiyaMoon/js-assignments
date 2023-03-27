
//ADDITION
var a=5;
var b=4;
var c= a+b;
document.write(" "+"Sum of"+" "+ a+ " "+"and"+" "+b+" "+"is"+" "+c);

//SUBRACTION
var a=5;
var b=4;
var c= a-b;
document.write(" "+"Difference of"+" "+ a+ " "+"and"+" "+b+" "+"is"+" "+c);

//DIVISION
var a=5;
var b=4;
var c= a/b;
document.write(" "+"Quotient of"+" "+ a+ " "+"and"+" "+b+" "+"is"+" "+c);

///MULTIPLICATION
var a=5;
var b=4;
var c= a*b;
document.write(" "+"Product of"+" "+ a+ " "+"and"+" "+b+" "+"is"+" "+c);






//INCREAMENT & DECREAMENT
var x;
document.write("Value after variable declaration is: "+ x);
document.write("<br>");

x=5;
document.write("Initial Value: "+ x);
document.write("<br>");

x++;
document.write("Value after increament is: "+ x);
document.write("<br>");

var b= x+7;
document.write("Value after addition is: "+ b);
document.write("<br>");

x--;
var b=x+7;
document.write("Value after decreament is: "+ b);
document.write("<br>");

var c= b %3;
document.write("The reminder is: "+ c);
document.write("<br>");



//mOVIE TICKET
var costPerTicket= 600;
var costper5Ticket= costPerTicket*5;
document.write("Total cost to buy 5 tickets to a movie is : " +" "+costper5Ticket+" "+"PKR");


//TABLE OF 4(1)
var table4products = ["4","8","12","16","20","24","28","32","36","40"];
var table4multiplicand = ["1","2","3","4","5","6","7","8","9","10"];
var table4multiplier = "4";
var mathExpression= "x";
var equalSign= "=";
var flagValue=false;
for(var i=0; i<table4multiplicand.length; i++){
    for(var j=0; j<table4products.length; j++){
        var flagValue=false;
        document.write(table4multiplier +" "+ mathExpression+" " +table4multiplicand[i]+" "+equalSign+" "+table4products[j]);
        document.write("<br>");
    }
}
if (!flagValue){
    console.log("end")
}


//TABLE OF 4(2)

var number=4;
for(let i = 1; i <= 10; i++) {

    const result = i * number;

    document.write(`${number} * ${i} = ${result}`+'<br />');
}



//TEMPERATURE CONVERTER
var tempCent = "50°C" 
var tempFarn = "122°F"
document.write(tempCent +"is"+ tempFarn+"<br />");
var tempF = "50°F" 
var tempC = "10°C"
document.write(tempF +"is"+ tempC );



//SHOPPING CART
document.write("<h2>Shopping Cart</h2>");
document.write("<br>");



var priceOfItem1  = 650;
var priceOfItem2  = 100;
var orderedQuantityOfItem1 = 3;
var orderedQuantityOfItem2 = 7;
var shippingCharges = 100;


document.write("Price of item 1 is "+priceOfItem1);
document.write("<br>");
document.write("Quantity of item 1 is "+orderedQuantityOfItem1);
document.write("<br>");
document.write("Price of item 2 is "+priceOfItem2);
document.write("<br>");
document.write("Quantity of item 2 is "+orderedQuantityOfItem2);
document.write("<br>");
document.write("Shipping Charges "+shippingCharges);
document.write("<br>");

var totalCost=priceOfItem1*3 + priceOfItem2*7 + shippingCharges;
document.write("<br>");
document.write("Total Cost is " + totalCost);
document.write("<br>");







//MARKSHEET
document.write("<h2>MarksSheet</h2>");
document.write("<br>");
document.write("<br>");


var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained/totalMarks)*100 +"%";

document.write("Total Marks: "+totalMarks);
document.write("<br>");
document.write("Obtained Marks: "+marksObtained);
document.write("<br>");
document.write("Percentage: "+percentage);


//CURRENCY CONVERTER
var dollarUSD= 10;
var riyalSAR= 25;
var dollar1inPKR= 283.02;
var  riyal1inPKR= 75.34;
var availableUSDinPKR= dollarUSD*dollar1inPKR;
var availableSARinPKR= riyalSAR*riyal1inPKR;
var totalPKR= availableSARinPKR+availableUSDinPKR;
document.write("Total Currency in PKR:  "+ totalPKR);




//BODMAS
var a;
a=5;
var b= ((a+5)*10)/2;
console.log(b);





//AGE CALCULATOR
var yearNow=2023;
var yearBirth=1947;
var age= yearNow-yearBirth;
document.write("Current Year is "+" "+yearNow+"<br />");
document.write("Your Birth Year is "+" "+yearBirth+"<br />");
document.write("Your Age is :"+" "+age);





//RADIUS OF A CIRCLE
var radius=10;
var circumference=2*radius*3.142;
var area=3.142*(10*10);
document.write("Radius: "+ radius+"<br />");
document.write("Circumference: "+ circumference+"<br />");
document.write("Area: "+ area);





//SUPPLY CALCULATOR
var favSnack= "Snacks";
var maxAge=65;
var myAge=15;
var snacksPerDay=3;
var x= (snacksPerDay)*(maxAge-myAge);
document.write("Favourite Snacks: "+favSnack+"<br />");
document.write("My Age: "+myAge+"<br />");
document.write("Max Age: "+maxAge+"<br />");
document.write("Snacks Per Day: "+snacksPerDay+"<br />");
document.write("You will need"+" "+x+" "+"snacks to last you until the ripe old age of"+" "+"65");

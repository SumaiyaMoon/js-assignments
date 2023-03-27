//INCREAMENT & DECREAMENT


var a=10;
document.write("Value of a is" +" "+a);
document.write("<br />");

document.write("............................................................");
document.write("<br />");
document.write("<br />");


++a;
document.write("Value of ++a is" +" "+a);
document.write("<br />");

document.write("Now the value of a is" +" "+ a);
document.write("<br />");

document.write("<br />");

a++;
document.write("Value of a++ is" +" "+"11");
document.write("<br />");

document.write("Now the value of a is" +" "+a);
document.write("<br />");

document.write("<br />");



--a;
document.write("Value of --a is" +" "+a);
document.write("<br />");

document.write("Now the value of a is" +" "+ a);
document.write("<br />");

document.write("<br />");

a--;
document.write("Value of a++ is" +" "+"11");
document.write("<br />");

document.write("Now the value of a is" +" "+a);
document.write("<br />");

document.write("<br />");














//INCREAMENT DECREAMENT

var a = 2, b = 1;
var result = --a - --b + ++b + b--;


// ( 
// --a a=1
// --b b=0
// ++b b=1
// b-- b=1 (command completed at b )
// BODM  A  add  S sub
// --a - (--b+ ++b + b--)
// 1-(0+1+1)
// 1-0+1+1
// 3
// )

document.write("result : " + result);





//INPUT GREET USER
var user=prompt("Enter You Name");
alert("Hello" + " "+  user);






//INPUT TABLE OF NO.
var numberInput =+prompt("Enter No.")

for (i=1; i<=10 ; i++){
    if(numberInput){
document.write(numberInput*[i]+"<br />")
}
}
for (i=1; i<=10 ; i++){
if(!numberInput){
    document.write(5*[i]+"<br />")

}
}


//REPORT CARD
var subj1= prompt("Subject1");
var subj1Total= +prompt("Total Marks");
var subj1Obtained= +prompt("Ontained Marks");
var subj1percentage= ((subj1Obtained/subj1Total)*100)+"%";

var subj2= prompt("Subject2");
var subj2Total= +prompt("Total Marks");
var subj2Obtained= +prompt("Ontained Marks");
var subj2percentage=((subj2Obtained/subj2Total)*100)+"%";


var subj3= prompt("Subject3");
var subj3Total= +prompt("Total Marks");
var subj3Obtained= +prompt("Ontained Marks");
var subj3percentage= ((subj3Obtained/subj3Total)*100)+"%";



var totalsubj="3 subjs in total: ";
var totMarks=subj1Total+subj2Total+subj3Total;
var obtMarks=subj1Obtained+subj2Obtained+subj3Obtained;
var tPercentage= ((obtMarks/totMarks)*100)+"%";


document.write("<b>Subjects</b>"+" "+"<b>Total Marks</b>"+" "+"<b>Obtained Marks</b>"+" "+"<b>Percentage</b>"+"<br />");
document.write(subj1+" "+subj1Total+" "+subj1Obtained+" "+subj1percentage+"<br />");
document.write(subj2+" "+subj2Total+" "+subj2Obtained+" "+subj2percentage+"<br />");
document.write(subj3+" "+subj3Total+" "+subj3Obtained+" "+subj3percentage+"<br />");
document.write(totalsubj+" "+totMarks+" "+obtMarks+" "+tPercentage+"<br />");
                                             //chap 1 Alert//
/*                                           

//task 1
 alert("hello visitors","alert title");

 //task 2
 alert("error! please enter a valid password")

 //task 3
 alert("welcome to JS land...\n Happy coding!")

 //task 4
 alert("Welcome to JS land")

 alert("happy coding!\n ")

 //task 5
 */



 
                                      //chap 2 strings and variables //
/*
                                          
 //task 1
 var username="";
 //task 2
 var myname="nimra akram";
 //task 3
 var messege="hello world";
 alert(messege)
 //task 4
 var myname="nimra";
 var myage="21 years old";
 var studentof="i'm a computer science student";
 alert(myname)
 alert(myage)
 alert(studentof)
 //tast 5
 var word="pizza";




 //task 6
 var email="nimraakram321@gmail.com";
 alert("my email address is "+ email)
 //task 7
 var book="A smarter way to learn javascript"
 alert("i'm trying to learn from the book"+ book)
 //task 8
 document.write("yah! i can write HTML content through javascript")
 //task 9
 var stype="ஜ"
 var clock="۩"
 var watch="۞"
 var line="▬"
 alert(line+line+line+line+line+line+line+line+line+stype+clock+watch+clock+stype+line+line+line+line+line+line+line+line+line)
 */
    

                                         //chap 3 variables and numbers //

 /*
 //task 1
 var age="15";
 alert("i'm " +age+ " years old" )
 //task 2


 //task 3
 var birthyear=Number("1999");
 document.write("my birth year is "+birthyear+" \n Data type of my declared variable is number \n")
 //task 4
 var Vname=prompt("enter your name")
 var Ptitle=prompt("you product name")
 var quntity=prompt("enter your product quntity")
 document.write( "\n"+Vname+" ordered "+quntity +Ptitle+ " on XYZ clothing store")
 */
                                        //chap 4 variable name: legal & illegal
/*
 //task 1
 var a, b, c;

 var $ ="$";
 var _ ="_";
 var numbers ="numbers";
 var letter="letter";
 var $boy;

 //var 223222;
 //var 6sas;
 //var %sgsg_;
 //var dsdsh#;
 //var !geee;
 var str="Rules for naming JSvariables"

 document.write(str.bold())
 document.write("<br>")
 document.write("<br>")
 document.write("<br>")

 document.write("Variable names can only contain "+letter+","+numbers+","+$+"and "+_+".For example $my_1stVariable")
 document.write("<br>")
 document.write("Variables must begin with a"+letter+" ,"+$+" or"+_+". For example $name, _name or name")
 document.write("<br>")
 document.write(" Variable names are case sensitive")
 document.write("<br>")
 document.write("Variable names should not be JS keywords")
 
 
 */
                                             //chap 5 maths expressions

 //task 1
 /*
 var num1=prompt("enter 1st your number") 
 var num2=prompt("enter 2nd your number")
 var n1=Number(num1)
 var n2=Number(num2)
 var sum=n1+n2;
 var sub=n1-n2;
 var mul=n1*n2;
 var div=n1/n2;

 document.write("sum of "+num1+"and "+num2+" is "+sum)
 document.write("<br>")
 //task 2
 document.write("subtraction of "+num1+"and "+num2+" is "+sub)
 document.write("<br>")
 document.write("multiplication of "+num1+"and "+num2+" is "+mul)
 document.write("<br>")
 document.write("division of "+num1+"and "+num2+" is "+div)
 
*/
//task 3
/*
var b;
document.write("value after varible declaration is "+ b)
document.write("<br>")
b=3;
document.write("initialize value is "+b)
document.write("<br>")
var b=++b;
document.write("value after increment is "+b)
document.write("<br>")
b=b+7;
document.write("value after additions is "+b)
document.write("<br>")
b=--b;
document.write("value afer decrement is "+b)
document.write("<br>")
b=b%3;
document.write("the remainder is " +b)
*/
//task 4
/*
var ticket_price=600 ;
var ticket=Number(prompt("how many tickets do you want"))
var total_cost=ticket*ticket_price;
document.write("Total cost to buy 5 tikcets to a movie is "+total_cost+"PKR")
*/
// task 5
/*
var a;
a=Number(prompt("enter your table number"))
document.write("table of "+a)
document.write("<br>")
for(var i=1;i<=10;i++){
    document.write(a+" X "+i+" = "+a*i )
    document.write("<br>")
}
*/
//task 6
/*
var C=prompt("enter the value for celcius")
var F=prompt("enter the value for Ferenheit")
var f=(C*9/5)+32;
var c=(F-32)*5/9;
document.write(C+"C is "+f+"F")
document.write("<br>")
document.write(F+"F is "+c+"C")

*/
//task 7
/*
var price_item1=Number(prompt("enter the price of item"))
var Q1=Number(prompt("enter the quntity of item"))
var price_item2=Number(prompt("enter the price of next item "))
var Q2=Number(prompt("enter the quntity of item"))
var ship_charges=Number(100)
var total=(price_item1*Q1)+(price_item2*Q2)+ship_charges;
document.write("price of itme 1 is "+price_item1)
document.write("<br>")
document.write("Quantity of itme 1 is "+Q1)
document.write("<br>")
document.write("price of itme 2 is "+price_item2)
document.write("<br>")
document.write("Quantity of itme 2 is "+Q2)
document.write("<br>")
document.write("Shipping Charges"+ship_charges)
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("Total cost of your order is "+total)
*/
//task 8
/*
var t_marks=Number(prompt("enter your total marks"))
var O_marks=Number(prompt("enter your obtained marks"))
var persentage=(O_marks/t_marks)*100;
document.write("Total marks: "+t_marks)
document.write("<br>")
document.write("Obtained marks: "+O_marks)
document.write("<br>")
document.write("persentage: "+persentage+"%")
*/
//task 9
/*
var UK=Number(104.80)
var S_R=Number(28)
var uk=Number(prompt("number of Us dollors"))
var s_r=Number(prompt("number of saudi riyal"))
var convert_doller=uk*UK;
var convert_riyal=s_r*S_R;
var PKR=convert_doller+convert_riyal;
document.write("Total currency in PKR:"+PKR)
*/
//task 10
/*
var number=Number(5);
number=((number+5)*10)/2;
document.write("the number is " +number)
*/
//task 11
/*
var C_year=prompt("enter the current year")
var B_year=prompt("enter the birth year")
var your_age=C_year-B_year;
var your_age2=(C_year-B_year)-1;
document.write("Current Year: "+C_year)
document.write("<br>")
document.write("Birth Year: "+B_year)
document.write("<br>")
document.write("your age is "+your_age)
document.write("Or "+your_age2)
*/
//task 12
/*
var Radius=Number(prompt("enter radius"))
var pie=3.142;
var circumference=2*(pie*Radius);
var Area_of_circle=pie*Radius*Radius;
document.write("Radius of a circle: "+Radius)
document.write("<br>")
document.write("The circumference is "+circumference)
document.write("<br>")
document.write("The area is: "+Area_of_circle)
*/
//task 13
/*
var fav_snack=prompt("enter your favourite snacks")
var C_age=Number(prompt("enter your current age"))
var max_age=Number(prompt("enter your etimate age"))
var snacks_per_day=Number(prompt("enter your number of snacks per day"))
var cal=(max_age-C_age)*snacks_per_day;
document.write("Favourite snacks: "+fav_snack)
document.write("<br>")
document.write("Current age: "+C_age)
document.write("<br>")
document.write("Estimated Maximum age: "+max_age)
document.write("<br>")
document.write("Amount of snacks per day: "+snacks_per_day)
document.write("<br>")
document.write("you will need "+cal+" "+fav_snack +" to last you until the ripe old age of "+max_age)
*/

                                      //chap 6-9 maths expression//
//task 1
/*
var a=10;
document.write("Result:<br>")
document.write("The value of a is:"+a+"<br>")
document.write("-------------------------")
document.write("<br>")
document.write("The value of ++a is :"+(++a) +"<br>")
document.write("Now the value of a is :"+a +"<br>")
document.write("<br>")
document.write("The value of a++ is :"+(a++)+"<br>")
document.write("Now the value of a is:"+a+"<br>")
document.write("<br>")
document.write("The value of ++a is :"+(--a) +"<br>")
document.write("Now the value of a is :"+a +"<br>")
document.write("<br>")
document.write("The value of a++ is :"+(a--)+"<br>")
document.write("Now the value of a is:"+a+"<br>")
*/
//task 2
/*
var a = 2, b = 1;
document.write("a: "+a+"<br>")
document.write("b: "+b+"<br>")
var result = --a - --b + ++b + b--;
document.write("--a: "+1+", --b: "+0+", ++b: "+1+", b--: "+1)
document.write("<br> Result:"+result)
*/
//task 3
/*
var name=prompt("plese enter your name ")
document.write("Good day "+name)
*/
//task 5
/*
var num=Number(prompt("enter your number for the table"))
if(num!==0){
    for(var i=1;i<=10;i++){
        document.write(num+" x "+i+" = "+num*i)
        document.write("<br>")
    }
    
}else{
    for(var i=1;i<=10;i++){
    document.write(5+" x "+i+" = "+5*i)
        document.write("<br>")
    }
}
*/
//task 6
/*....................................
var sub1=prompt("enter your first subject name")
var sub2=prompt("enter your second subject name")
var sub3=prompt("enter your third subject name")
var total_marks=100;
var O_sub1=prompt("enter your marks for first subject")
var O_sub2=prompt("enter your marks for second subject")
var O_sub3=prompt("enter your marks for third subject")
var persentage_sub1=(O_sub1/total_marks)*100;
var persentage_sub2=(O_sub2/total_marks)*100;
var persentage_sub3=(O_sub3/total_marks)*100;
var t_t_marks=total_marks+total_marks+total_marks;
var t_o_marks=O_sub1+O_sub2+O_sub3
var t_percenage=(t_t_marks/t_o_marks)*100
document.write("subject"+"    "+"T-marks"+"    "+"O-marks"+"    "+"%age")
document.write("<br>")
document.write("<br>")
document.write(sub1+"      "+total_marks+"     "+O_sub1+"     "+persentage_sub1)
document.write("<br>")
document.write(sub2+"    "+total_marks+"   "+O_sub2+"  "+persentage_sub2)
document.write("<br>")
document.write(sub3+"    "+total_marks+"   "+O_sub3+"  "+persentage_sub3)
document.write("<br>")
document.write("         "+t_t_marks+"   "+t_o_marks+"   "+t_percenage)
...............................................
*/

                                  //chap 9-11 user input & conditional statements
//task 1
/*
var city=prompt("enter the city name")

if (city==='karachi'){
    alert("welcome to the city of lights")
}
else{
    alert("welcom to "+city)
}

*/
//task 2
/*
var gender=prompt("please type ypur gender")
if(gender==="female")
{
    document.write("Good morning Ma'am")

}
else{
    document.write("Good morning Sir")
}
*/
//task 3
/*
var traffic_light=prompt("enter the color of traffic light")
if(traffic_light==='red'){
    alert("Must stop")
}
else if(traffic_light==="yellow"){
    alert("Ready to move")
}
else{
    alert("Move now")
}
*/
//task 4
/*
var fuel=Number(prompt("enter the fuel in your car in liters"))
if(fuel<0.25){
    alert("please refil the fuel in your car")
}
else{
    alert("refill your car fuel if needed")
}
*/
//task 5
/*
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
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
    alert("car is smaller than cat");
    }
 */
 //task 6
 /*
 var Obtained_marks=Number(prompt("enter your obtained marks in 3 subjects"))
 var Total_marks=Number(prompt("enter your totals marks of 3 subjects "))
 var persentage=(Obtained_marks/Total_marks)*100
 document.write("Marks sheet")
 document.write("<br>")
 document.write("<br>")
 document.write("Total marks: "+Total_marks)
 document.write("<br>")
 document.write("Obtained marks: "+Obtained_marks)
 document.write("<br>")
 document.write("Percentage: "+persentage+"%")
 document.write("<br>")
 if(persentage>80 || persentage===80){
     document.write("Grade: A-one")
     document.write("<br>")
     document.write("remarks: Excellent")
 }
 else if(persentage>70|| persentage===70){
    document.write("Grade: A")
    document.write("<br>")
    document.write("remarks: Good")
 }
 else if(persentage>60|| persentage===60){
    document.write("Grade: B")
    document.write("<br>")
    document.write("remarks: You need to improve")
 }
 else{
    document.write("Grade: Fail")
    document.write("<br>")
    document.write("remarks: Sorry")
 }
 */
 //task 7
 /*
 var secret_num=9;
 var number=Number(prompt("enter your number in the range of 1-10"))
 if(secret_num===number){
     alert("BINGO! correct answer")
 }
 else{
     alert("your close enough to the correct answer")
 }
 */
 //task 8
 /*
 var num=Number(prompt("enter the number"))
 if(num%3===0){
     alert(" the number is divisible by 3")
 }
 else {
     alert("it is not divisible by 3")
 }
 */
 //task 9
 /*
 var num=Number(prompt("enter the number"))
 if (num%2==0){
     alert("it is an even number")
 }
 else{
     alert("it is an odd number")
 }
 */
 //task 10
 /*
 var temperature=Number(prompt("enter the temperature of today"))
 if(temperature>40){
     alert("It is too hot outside")
 }
 else if(temperature>30){
     alert("The weather today ids normal")
 }
 else if(temperature>20){
     alert("Today's weather is cool")
 }
 else if(temperature>10){
     alert("OMG! Today's weather is so cool ")
 }
 */
 //task 11
 /*
 var num1=Number(prompt("enter your first number"))
 var num2=Number(prompt("enter your senconf number"))
 var operator=prompt("enter your operator")
 var result;
 if(operator==="+"){
     result=num1+num2;
 }
 else if(operator==="-"){
     result=num2-num1;
 }
 else if(operator==="/"){
     result=num1/num2;
 }
 else if(operator==="*"){
     result=num1*num2;
 }
 else if(operator==="%"){
     result=num2%num1;
 }
 alert("the result is "+result)
 */

                            //chap 12-13 IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS//
 //task 1
 /*..............................................
 var char=prompt("enter your number or string")
 if//
 ............................................*/
 //task 2
 /*
 var num1=Number(prompt("enter you number"))
 var num2=Number(prompt("enter you second number"))
 if(num1>num2){
     alert(num1+" is greater")
 }
 else if(num2>num1){
     alert(num2+" is greater")
 }
 else{
     alert("Both integers are equal")
 }
 */
 //task 3
 /*
 var number=Number(prompt("enter the nunber"))
 if (number>0){
     alert("your number is positive")
 }
 else if(number<0){
     alert("your number is negative")
 }
 else {
     alert("your number is zero")
 }
 */
 //task 4
 /*
 var alpha=prompt("enter your alphabet")
 if(alpha==='a'){
     alert("true")
 }
 else if(alpha==='e'){
     alert("true")
 }
 else if(alpha==="i"){
     alert("true")
 }
 else if(alpha==="o"){
     alert("true")
 }
 else if(alpha==="u"){
     alert("ture")
 }
 else{
     alert("false")
 }
 */
 //task 5
 /*
 var password="nimraakram";
 var verifypassword=prompt("enter your password")
 if(password===verifypassword){
     alert("your password is correct")
 }
 else if(verifypassword==='0'){
     alert("please enter your password")
     verifypassword=prompt("enter your password")
 }
 else{
     alert("please enter correct password")
 }
 */
 //task 6
 /*
 var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
alert(greeting)
}
else{
greeting = "Good evening";
alert(greeting)
}
*/
//task 7
/*
var time=Number(prompt("enter the time in 24 hours"))
if(time>=0000 && time<1200){
    alert("Good morning!")

}
else if(time>=1200 && time<1700){
    alert("Good afternoon!")
}
else if(time>=1700 && time<2100){
    alert("Good evening!")
}
else if(time>=2100 && time<2359)(
    alert("Good night!")
)*/
                                              // chap 14-16 arrays//
//task 1
/*
var arr=[];
// task 2
var arr1=[];
// task 3
var arr2=["nimra","akram","shumayil"];
//task 4
var arr4=Number([12,45,6,9]);
//task 5
var arr5=[true,false]
//task 6
var arr6=["nimra",13,true]
//task 7
var arr7=[ "SSC", "HSC","BCS",
    "BS", "BCOM", "MS", "M. Phil.", "PhD"]
document.write("Qulification")
document.write("<br>")
document.write(arr7)
*/
//task 8
/*
var name=["micheal", "helley","sheldon"]
var score=[250,456,345]
var Percentage=[(score[0]/500)*100,(score[1]/500)*100,(score[2]/500)*100]
for(var i=0;i<=2;i++){
    document.write("score of "+name[i]+" is "+score[i]+". percentage: "+Percentage[i]+"%")
    document.write("<br>")
}
*/
//task 9
/*
var color =["red","yellow","green"]
document.write(color)
document.write("<br>")

var desire=prompt("enter your color you want to add in the beginning")
color.unshift(desire)
document.write(color)
document.write("<br>")
var desire1=prompt("enter your color you want to add in the beginning")
color.push(desire1)
document.write(color)

var desire2=prompt("enter the color to add in the beginning")
var desire3=prompt("enter the second color to add ")
color.unshift(desire2)
color.unshift(desire3)
document.write(color)
document.write("<br>")
color.shift()
document.write(color)
color.pop()
document.write("<br>")
document.write(color)
*/
//task 10
/*
var score=[122,45,786,54,334,90]
document.write("scores of the students: "+score)
document.write("<br>")
score.sort()
console.log(score)
document.write("ordered scores of student: "+score)
*/
//task 11
/*
document.write("cities list")
document.write("<br>")
var cities_list=["karachi","Islamabad","quetta","lahore","peshawer"]
document.write(cities_list)
var selected_list=cities_list.slice(1,3)
document.write("<br>")
document.write("selected cities list")
document.write("<br>")
document.write(selected_list)
*/
//task 12
/*
var arr = ["This", "is", "my ", "cat"];
document.write("Array:")
document.write("<br>")
document.write(arr)
arr.join()
document.write("<br>")
document.write("String:")
document.write("<br>")
document.write(arr)
*/
// task 13
/*
var components=[];
components.push("keybord")
components.push("mouse")
components.push("monitor")
components.push("cpu")


document.write(components.shift())
document.write("<br>");

document.write(components.shift())
document.write("<br>");
document.write(components.shift())
document.write("<br>");

document.write(components.shift())

*/
//task 14
/*
var components=[];
components.push("keybord")
components.push("mouse")
components.push("monitor")
components.push("cpu")


document.write(components.pop())
document.write("<br>");

document.write(components.pop())
document.write("<br>");
document.write(components.pop())
document.write("<br>");

document.write(components.pop())
*/
//task 15
/*
var manufacturer=[ "Apple",
    "Samsung", "Motorola", "Nokia", "Sony" ,"Haier"]

*/
                                 // chap 17 - 20 array and loops//
//task 1
/*
var arr=[],[];
//task 2
/*...................................................
var arr1=[[0,1, 2, 3],[1,0,1,2],[2,1,0,1]]
for(var i=0;i<3;i++){
    for(var j=0;j<=3;j++){
          document.write(arr1[i,j])

    }
}
*/
//task 3
/*
var count=[0,1,2,3,4,5,6,7,8,10]
for(var i=0;i<count.length;i++){
    document.write(count[i]);
    document.write("<br>")
}
*/
//task 4
/*
var number=Number(prompt("enter the number for the table"))
var lenght=Number(prompt("enter the lenght for the table"))
for(var i=0;i<=lenght;i++){
    document.write(number+" x "+i+" = "+number*i)
    document.write("<br>")
}
*/
//task 5
/*
var fruits = ['apple','banana', 'mango', 'orange','strawberry'];

for(var i=0;i<fruits.length;i++){
    document.write("Element at index "+i+" is "+fruits[i])
    document.write("<br>")
}

*/
//task 6
/*
var count=Number(prompt("enter the range of your number"))
document.write("counting:")
for(var i=0;i<=count;i++){
    document.write(i+",")
}
document.write("<br>")
var reverse_count=Number(prompt("enter the range of your number"))
document.write("reverse counting")
for(var i=reverse_count;i>=1;i--){
    document.write(i+",")
}
document.write("<br>")
var even_count=Number(prompt("enter the range of your number"))
document.write("Even:")
for(var i=0;i<=even_count;i++){
    if(i%2==0){
        document.write(i+",")
    }
    
}
document.write("<br>")
var Odd_count=Number(prompt("enter the range of your number"))
document.write("Odd:")
for(var i=0;i<=even_count;i++){
    if(i%2==1){
        document.write(i+",")
    }
    
}
document.write("<br>")
var series=Number(prompt("enter the range of your number"))
document.write("Series:")
for(var i=1;i<=even_count;i++){
    if(i%2==0){
        document.write(i+"k,")
    }
    
}
*/
//task 7
/*
A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
var search=prompt("welcome to ABC Bakery.enter what you want")
for(var i=0;i<=A.length;i++){
    if(search===A[i]){
        document.write(search+" is available a index "+i+" in our bakery")
        break;
    }
    else{
        document.write(search+" is not available in our bakery")
        break
    }
}
*/
//task 8
/*.................................
 var array = [24, 53, 78, 91, 12];
 var largest= 0;
 
 for (i=0; i<=largest;i++){
     if (array[i]>largest) {
         var largest=array[i];
     }
 }
 
 
 
 
 document.write("Array Items",array);
 document.write("<br>");

document.write("The Largest number is: ",largest);


//task 9
....................................................
//task 10
*/
/*
var number=Number(prompt("enter the number for its multipules"))
for(var i=1;number*i<=100;i++){
    document.write(number*i+",")
}
  */
 





 
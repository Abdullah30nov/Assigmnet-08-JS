                                     //CHAPTER-31/34
                                     //QUESTION-NO-01
// var currentDate = new Date()
// document.write(currentDate);
                                     //QUESTION-NO-02
// var months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"];

// var currentMonthIndex = new Date().getMonth();

// var currentMonth = months[currentMonthIndex];  

// document.write("The current month is: " + currentMonth);

                                     //QUESTION-NO-03
// var weekDays = ["Sun","Mon","Thue","Wed","Thur","Fri","Sat"];

// var daysindex = new Date().getDay();

// var currentday = weekDays[daysindex];

// document.write("Today is: " + currentday)

                                      //QUESTION-NO-04
// var weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// var daysindex = new Date().getDay();

// var currentday = weekDays[daysindex];

// if (currentday === "Sunday"){
//     alert(currentday + " It's Fun day")
// }

// else if (currentday === "Saturday"){
//     alert(currentday + " It's Fun day")
// }

// else{
//     alert(currentday + " It's working day")
// }

                                          //QUESTION-NO-05
// var currentdate = new Date();

// var dayOfMonth = currentdate.getDate();

// if(dayOfMonth < 16){
//     document.write("First fifteen days of the month");
// }

// else{
//     document.write("Last days of the month");
// }

                                          //QUESTION-NO-06
// var currentDate = new Date();

// var ms1970 = currentDate.getTime();

// var mssince1970 = ms1970 / (1000 * 60);

// mssince1970 = Math.floor(mssince1970)

// document.write("Minute since 1 january 1970 ):- ",mssince1970);

                                          //QUESTION-NO-07
// var hour = new Date().getHours()

// if (hour < 12){
//     alert("Its AM")
// }
// else{
//     alert("It's PM")
// }

                                          //QUESTION-NO-08
// var lastdate = new Date("31 december 2024");

// document.write("Laster date: " + lastdate);

                                          //QUESTION-NO-09

// var currentDate = new Date();

// var ramadanDate = new Date("18 june 2015");

// var timeDiff = currentDate.getTime() - ramadanDate.getTime();

// var passday = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

// document.write(passday + " days have passed since 1st Ramadan, 2015 " )

                                      //QUESTION-NO-10
// var currnetdate = new Date("1 january 2015")

// var currentdateindex = currnetdate.getTime()

// var diff = currentdateindex.getTime()-currnetdate.getTime()

// diff = diff / (1000 * 60)

// document.write(diff)

                                      //QUESTION-NO-11
// var numOfUnit = 410
// var perUnit = 16
// var netpayment = numOfUnit*perUnit
// var latepayment = 350
// var grossamount = netpayment+latepayment

// document.write("<h1>K-Electric Bill</h1><br><br>Customer Name: <b>ABC Customer</b><br><br>Month: <b>February</b><br><br>Numbers of units: ",numOfUnit + "<br><br>Charges per units: ",perUnit,"<br><br>Net Amount Payable (within Due Date): ",netpayment,"<br><br>Late Payment Surcharges: ",latepayment,"<br><br>Gross Amount Payable (After Due Date): ", grossamount ,"<br><br>Last Date: 30 February 1947")

                                      //CHAPTER-NO-35,38
                                      //QUESTION-NO-01
// var currentdate = new Date();
// document.write(currentdate);

                                      //QUESTION-NO-02
// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// firstName = firstName.toUpperCase();
// lastName = lastName.toUpperCase();
// document.write("Hi, ",firstName+" "+lastName);

                                      //QUESTION-NO-03
// var firstnum = +prompt("Enter First Number...");
// var lastnum = +prompt("Enter Last Number...");
// var sumof = firstnum + lastnum
// document.write(sumof);

                                      //QUESTION-NO-04
// function calculate(num1, num2, operator) {
// let result;
// switch (operator) {
// case '+':
//     result = num1 + num2;
//     break;
// case '-':
//     result = num1 - num2;
//     break;
// case '*':
//     result = num1 * num2;
//     break;
// case '/':
//     if (num2 !== 0) {
//         result = num1 / num2;
//     } else {
//         result = "Cannot divide by zero";
//     }
//     break;
// default:
// result = "Invalid operator";
// }
// document.write("Result: " + result);
// }
// calculate(5, 3, '+'); // Output: Result: 8

                                          //QUESTION-NO-05
// function square(number) {
//     return number * number;
// }

// // Example usage
// console.log(square(5));






































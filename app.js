// question 1
var arr = [1, 2, 3, 4];
var sum = 0;
for(var i = 0; i < arr.length; i++){
    sum = sum + arr[i];
}

document.write("Sum of array is: " + sum);


// question 2
var arr = [1, 2, 3, 4];
var sum = 0;

for(var i = 0; i < arr.length; i++){
    sum = sum + arr[i];
}

var average = sum / arr.length;
document.write("Average is: " + average);



// question 3
var userName = prompt("enter user name");
var passward = prompt("passward")
 if(userName == "masood123"){
    document.write("login is success full")
}

else if(passward =="Me123"){
document.write("passward is success fully login")
}
else{
    document.write("invalid login")
}
/*var male=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var century,weekDays,year,month,day;*/
var cc=parseInt(prompt("enter your century"));
var yy=parseInt(prompt("enter last two numbers of year"));
var mm=parseInt(prompt("enter born month"));
var dd=parseInt(prompt("enter  date"));



weekDays = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;

var day=console.log(weekDays.toFixed());
var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
for(var i=0;i<days.length;i++){
if(day=i){
console.log(days[i]);
}
else if (day<0) {
    console.log("hhhh");
}
else{
    alert(" weekDays is greater than 7");
}
}
// var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]


/*CC - is the century digits. For example 1989 has CC = 19

 YY - is the Year digits (1989 has YY = 89)

 MM -  is the Month

 DD - is the Day of the month 

 mod - is the modulus function ( % )*/
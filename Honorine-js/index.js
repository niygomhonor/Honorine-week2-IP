/*var male=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var century,weekDays,year,month,day;*/
var formakan = document.getElementById('form1');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == formakan) {
        formakan.style.display = "none";
    }
};

var cc=parseInt(prompt("enter your century"));
var yy=parseInt(prompt("enter last two numbers of year"));
var mm=parseInt(prompt("enter born month"));
var dd=parseInt(prompt("enter  date"));
var gender=prompt("Enter gender");

weekDays = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;

 var day=console.log(weekDays.toFixed());
 



switch(day,gender){
case(0,"male"):
alert("Kwasi");
break;

case (1,"male"):
alert("Kwadwo");
break;
case 2,"male":
alert("Kwabena");
break;
case 3,"male":
alert("Kwaku");
break;
case 4,"male":
alert("Yaw");
break;
case 5,"male":
alert("Kofi");

case 6,"male":
alert("Kwame");
break;
  
case 

default:
alert("hhhh");

}


//var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]


/*CC - is the century digits. For example 1989 has CC = 19

 YY - is the Year digits (1989 has YY = 89)

 MM -  is the Month

 DD - is the Day of the month 

 mod - is the modulus function ( % )*/
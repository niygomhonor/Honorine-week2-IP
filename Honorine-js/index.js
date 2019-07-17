/*var male=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];


var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var century,weekDays,year,month,day;*/

var cc=parseInt(prompt("enter your century"));
var yy=parseInt(prompt("enter last two numbers of year"));
var mm=parseInt(prompt("enter born month"));
var dd=parseInt(prompt("enter  date"));
var gender=prompt("Enter gender");
var weekDays;
weekDays = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;

 var day=console.log(weekDays.toFixed());
switch(gender){
case "male":
if(day===0){
alert("Kwasi");
}else if(day===1){
alert("Kwadwo");
}
else if(day===2){
    alert("Kwabena");
}
else if(day===3){
    alert("Kwaku");
}
else if(day===4){
    alert("Yaw");
}
else if(day===5){
    alert("Kofi");
}
else if(day===6){
    alert("Kwame");
}
var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
case "female":
 if(day===0){
    alert("Akosua");
}
    else if(day===1){
        alert("Adwoa");
    }
        else if(day===2){
            alert("Abenaa");
        }
            else if(day===3){
                alert("Akua");
            }
                else if(day===4){
                    alert("Yaa");}

                    else if(day===5){
                        alert("Afua");
                    }
                    else if(_day===6){
                        alert("Ama");
                    }
                    

}


//var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]


/*CC - is the century digits. For example 1989 has CC = 19

 YY - is the Year digits (1989 has YY = 89)

 MM -  is the Month

 DD - is the Day of the month 

 mod - is the modulus function ( % )*/

var cc=parseInt(prompt("enter your century"));
var yy=parseInt(prompt("enter last two numbers of year"));
var mm=parseInt(prompt("enter born month"));
var dd=parseInt(prompt("enter  date"));
var gender=prompt("Enter gender");
var weekDays;
weekDays = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;

var day=console.log(weekDays.toFixed());




if(day===0 && gender==="male"){
alert("Kwasi");
}else if(day===1  && gender==="male"){
alert("Kwadwo");
}
else if(day===2 && gender==="male"){
    alert("Kwabena");
}
else if(day===3 && gender==="male"){
    alert("Kwaku");
}
else if(day===4 && gender==="male"){
    alert("Yaw");
}
else if(day===5 && gender==="male"){
    alert("Kofi");
}
else if(day===6 && gender==="male"){
    alert("Kwame");
}

else if(day===0&& gender==="female"){
    alert("Akosua" );
}
else if(day===1 && gender==="female"){
        alert("Adwoa");
}
else if(day===2  && gender==="female"){
     alert("Abenaa");
}
else if(day===3  && gender==="female"){
    alert("Akua");
}
else if(day===4  && gender==="female"){
 alert("Yaa");
}

else if(day===5  && gender==="female"){
    alert("Afua");
}
else if(_day===6  && gender==="female"){
    alert("Ama");
}
         





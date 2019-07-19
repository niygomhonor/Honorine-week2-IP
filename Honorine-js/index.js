function myakhan() {
var fullName=document.getElementById("myname").value;

var cc=document.getElementById("ccc").value;
var yy=document.getElementById("yyy").value;
var mm=document.getElementById("mmm").value;
var dd=document.getElementById("ddd").value;
var gender=document.getElementById("yourgender").value;
if ((cc==''&&yy=='') ||(mm==''||dd=='')|| gender=='') {
    alert("Please insert required information ");
}
var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//document.getElementById("but").Value;

var weekDays;
weekDays = ( ( (cc/4) +2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;

var d=weekDays.toFixed(0);
if (d<0|| d>6) {
    alert("This day doesn't belong in days of week");
}
 if (dd>31|| dd<0) {
    alert("That date doesn't belong to the days of Month");
}

if(d==0 && gender== 'male'){
    document.getElementById("akaname").innerHTML = "Kwasi";
    document.getElementById("yourday").innerHTML = days[0];

}else if(d==1 && gender== 'male'){
    document.getElementById("akaname").innerHTML = "Kwadwo";
    document.getElementById("yourday").innerHTML = days[1];
}
else if(d==2 && gender=='male'){
    document.getElementById("akaname").innerHTML = "Kwabena";
    document.getElementById("yourday").innerHTML = days[2];
}
else if(d==3 && gender== 'male'){
    document.getElementById("akaname").innerHTML = "Kwaku";
    document.getElementById("yourday").innerHTML = days[3];
}
else if(d== 4 && gender=='male'){
    document.getElementById("akaname").innerHTML = "Yaw";
    document.getElementById("yourday").innerHTML = days[4];
}
else if(d==5 && gender=='male'){
    document.getElementById("akaname").innerHTML = "Kofi";
    document.getElementById("yourday").innerHTML = days[5];
}
else if(d==6 && gender=='male'){
    document.getElementById("akaname").innerHTML = "Kwame";
    document.getElementById("yourday").innerHTML = days[6];
}

else if(d==0 && gender=='female'){
    document.getElementById("akaname").innerHTML = "Akosua" ;
    document.getElementById("yourday").innerHTML = days[0];
}
else if(d==1 && gender=='female'){
    document.getElementById("akaname").innerHTML = "Adwoa";
    document.getElementById("yourday").innerHTML = days[1];
}
else if(d==2  && gender=='female'){
    document.getElementById("akaname").innerHTML = "Abenaa";
    document.getElementById("yourday").innerHTML = days[2];
}
else if(d==3  && gender=='female'){
    document.getElementById("akaname").innerHTML = "Akua";
    document.getElementById("yourday").innerHTML = days[3];
}
else if(d==4  && gender=='female'){
   document.getElementById("akaname").innerHTML = "Yaa";
    document.getElementById("yourday").innerHTML = days[4];
    
}

else if(d==5  && gender=='female'){
    document.getElementById("akaname").innerHTML = "Afua";
    document.getElementById("yourday").innerHTML = days[5];
}
else if(d==6  && gender=='female'){
    document.getElementById("akaname").innerHTML = "Ama";
    document.getElementById("yourday").innerHTML = days[6];
   
}
}       




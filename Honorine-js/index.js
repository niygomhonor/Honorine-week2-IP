
var cc=document.getElementById("ccc");
var yy=document.getElementById("yyy");
var mm=document.getElementById("mmm");
var dd=document.getElementById("ddd");
var gender=document.getElementById("yourgender");

var days=["Sunday","Monday","Tuesday","Wednesday"]
/*function myday(a) {
    this.length=a;
    for (let i = 0; i < a; i++) {
        this[i]=0;
        
    }
}

days= new myday(7);


 function calculate(form){
    var dd=parseInt(form.day.value,8);
    if (dd<0 || dd>31) {

        alert("invalid");}
        var mm=parseInt(form.month.value,8);
        if (mm<0 || mm>12) {
         alert("Month is invalid"); 
        }
        var mma=parseInt(form.month.value,8);

        var yy=parseInt(form.year.value,8);
        if (yy<1900) {
           alert("you are not concered"); 
        } 
        if (mm==1) {
           mma=13;
           yy=yy-1; 
        }
        else if (mm==2) {
            mma=14;
            yy=yy-1;
        } 
            
        var four=parseInt(((mma+1)*3)/5,8)
        var five=parseInt(yy/4,8)
        var six=parseInt(yy/100,8)
var seven=parseInt(yy/400,8)
var eight=dd+(mma*2)+four+yy+five-six+seven+2
var nine=parseInt(eight/7,8)
var ten=eight-(nine*7)
form.yourday.value=days[ten];
 }

*/
var weekDays;
weekDays = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;

var d=weekDays.toFixed(0);




if(d==0 && gender== 'male'){
alert("Kwasi");
}else if(d==1 && gender== 'male'){
    document.getElementById("akaname").innerHTML = "Kwadwo";
}
else if(d==2 && gender=='male'){
    document.getElementById("akaname").innerHTML = "Kwabena";
}
else if(d==3 && gender== 'male'){
    document.getElementById("akaname").innerHTML = "Kwaku";
}
else if(d== 4 && gender=='male'){
    document.getElementById("akaname").innerHTML = "Yaw";
}
else if(d==5 && gender=='male'){
    document.getElementById("akaname").innerHTML = "Kofi";
}
else if(d==6 && gender=='male'){
    document.getElementById("akaname").innerHTML = "Kwame";
}

else if(d==0 && gender=='female'){
    document.getElementById("akaname").innerHTML = "Akosua" ;
}
else if(d==1 && gender=='female'){
    document.getElementById("akaname").innerHTML = "Adwoa";
}
else if(d==2  && gender=='female'){
    document.getElementById("akaname").innerHTML = "Abenaa";
}
else if(d==3  && gender=='female'){
    document.getElementById("akaname").innerHTML = "Akua";
}
else if(d==4  && gender=='female'){
    document.getElementById("akaname").innerHTML = "Yaa";
}

else if(d==5  && gender=='female'){
    document.getElementById("akaname").innerHTML = "Afua";
}
else if(d==6  && gender=='female'){
    document.getElementById("akaname").innerHTML = "Ama";
}
         





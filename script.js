var hr=0;
var min=0;
var sec=0;
var count=0;
var timmer=false;

function start(){
timmer=true;
stopwatch();
}
function stop(){
timmer=false;
}
function reset(){
    timmer=false;

    hr=0;
    min=0;
    sec=0;
    count=0;

    document.getElementById("hr").innerHTML =00;
    document.getElementById("sec").innerHTML =00;
    document.getElementById("min").innerHTML =00;
    document.getElementById("count").innerHTML =00;
}

function stopwatch(){
if(timmer == true){
count++;
if(count==100){
    sec++;
    count=0;
}
if(sec==60){
    min++;
    sec=0;
}
if(min==60){
    hr++;
    min=0;
    sec=0;
}
var hrstring=hr;
var secstring=sec;
var minstring=min;
var countstring=count;
if(hr<10)
hrstring+="0";
if(sec<10)
secstring+="0";
if(min<10)
minstring+="0";
if(count<10)
countstring+="0";
document.getElementById("count").innerHTML=countstring;
document.getElementById("sec").innerHTML=secstring;
document.getElementById("min").innerHTML=minstring;
document.getElementById("hr").innerHTML=hrstring;

    setTimeout("stopwatch()", 10);
}
}
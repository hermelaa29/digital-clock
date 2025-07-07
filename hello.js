const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const ampm = document.getElementById("ampm");


function getTime(){
    
let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let ampm = "am";
   
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

if(h>12){
    h= h-12;
    ampm = pm;

}

hour.innerText  = h;
minute.innerText = m;
second.innerText = s;
ampm.innerText = ampm;


setTimeout(()=>{
getTime()
},1000)

}

getTime();

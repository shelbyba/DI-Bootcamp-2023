let newYear='1 Jan 2024'

let dayEL=document.querySelector('#days');
let hoursEL=document.getElementById('hours');
let minsEL=document.getElementById('mins');
let secEL=document.getElementById('sec');
console.log(dayEL)


function countdown(){
    let newYearDate = new Date(newYear);
    let currentDate=new Date();
    let totalsec=(newYearDate-currentDate)/1000
    let days= Math.floor(totalsec/3600/24);
    
    let hours=Math.floor(totalsec/3600)%24;
    
    let min= Math.floor(totalsec/60)%60;
    
    let sec=Math.floor(totalsec) %60;
     console.log(days,hours,min,sec)
    console.log(newYearDate-currentDate);

    dayEL.innerHTML=days
    hoursEL.innerHTML=hours
    minsEL.innerHTML=min
    secEL.innerHTML=sec

}

countdown();

setInterval(countdown, 1000)
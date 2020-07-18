// const date = document.querySelector("#date");

// const month = document.querySelector("#mm");

// const year = document.querySelector("#yy");

// const btn = document.querySelector("#submit");

// const form = document.getElementById("form");

// const gender = document.getElementById("gender");

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if(date.value > 31){
//         alert("enter a valid date");
//     }else if(month.value > 12){
//         alert("enter valid month")
//     } else if(year.value > 2020 || year.value < 1900){
//         alert("enter a valid year")
//     }else{
//         console.log(date.value, month.value, year.value)
//     }
// })

// console.log(date.value, month.value, year.value,gender.value)

// function akan(){
//     var comb = [];

// } 

/*
Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

 where;

 CC - is the century digits. For example 1989 has CC = 19

 YY - is the Year digits (1989 has YY = 89)

 MM -  is the Month

 DD - is the Day of the month 

 mod - is the modulus function ( % )*/

var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
var male = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
var female = ['Akoswa', 'Adwoa','Abenna', 'Akua', 'Yaa', 'Afua', 'Ama']

const data = document.forms[0];


function cutter(data){
    var cc = parseInt(data.year.value.slice(0,2));
    var yy = parseInt(data.year.value.slice(1,4));
    var mm  = parseInt(data.month.value);
    var dd = parseInt(data.date.value);

    console.log(cc,yy,mm,dd)

    const formula = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7

    return Math.round(formula);
}




data.addEventListener('submit', (e) => {
        e.preventDefault();
        if(data.date.value <= 0 || data.date.value > 31){
            alert("enter a valid date");
        }else if(data.month.value <=0 || data.month.value > 12){
            alert("enter valid month")
        } else if(data.year.value > 2020 || data.year.value < 1900){
            alert("enter a valid year")
        }
        cutter(data)
    })






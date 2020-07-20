
/*
Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

 where;

 CC - is the century digits. For example 1989 has CC = 19

 YY - is the Year digits (1989 has YY = 89)

 MM -  is the Month

 DD - is the Day of the month 

 mod - is the modulus function ( % )*/

 //access the inputs
const data = document.forms[0];


//main function to manipulate the inputs
function cutter(data){
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    var male = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
    var female = ['Akoswa', 'Adwoa','Abenna', 'Akua', 'Yaa', 'Afua', 'Ama']
    var results = document.getElementById('results')

    var cc = parseInt(data.year.value.slice(0,2));
    var yy = parseInt(data.year.value.slice(1,4));
    var mm  = parseInt(data.month.value);
    var dd = parseInt(data.date.value);
    var ss = (data.gender.value);


//console.log to ensure you have the correct inputs
    console.log(cc,yy,mm,dd,ss);

//although there are other means to  get the day, i used the provided formula
    const formula = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7

//round the final result
    var finali = Math.round(formula);
    console.log(finali)

//access the gender and output the Akan
    if(ss === 'male'){
        results.innerHTML= days[finali] + "-" + male[finali]
    }else if(ss === 'female'){
        results.innerHTML = days[finali] + "-" + female[finali]
    }
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






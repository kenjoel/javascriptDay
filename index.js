
/*
Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

 where;

 CC - is the century digits. For example 1989 has CC = 19

 YY - is the Year digits (1989 has YY = 89)

 MM -  is the Month

 DD - is the Day of the month 

 mod - is the modulus function ( % )*/

 //access the form inputs
const data = document.forms[0];


//main function to manipulate the inputs
function cutter(data){
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    var male = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
    var female = ['Akoswa', 'Adwoa','Abenna', 'Akua', 'Yaa', 'Afua', 'Ama']
    var results = document.getElementById('results')

    var yy = document.getElementById('yy').value
    var mm  = document.getElementById('mm').value
    var dd = document.getElementById('date').value
    var ss = data.gender.value;


//console.log to ensure you have the correct inputs
    console.log(yy,mm,dd,ss);

//although there are other means to  get the day, i used the provided formula
    const formula = new Date(yy + "/" + mm + "/" +dd);
//round the final result
    var finali = formula.getDay();
    console.log(finali)

//access the gender and output the Akan
    if(ss === 'male'){
        results.innerHTML= days[finali] + "-" + male[finali]
    }else if(ss === 'female'){
        results.innerHTML = days[finali] + "-" + female[finali]
    }
}


//prevent a default submission then verify the details when user submits
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






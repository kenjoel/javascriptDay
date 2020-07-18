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

const data = document.forms[0];


form.addEventListener('submit', (e) => {
        e.preventDefault();
        if(data.date.value > 31){
            alert("enter a valid date");
        }else if(data.month.value > 12){
            alert("enter valid month")
        } else if(data.year.value >= 2020 || data.year.value < 1900){
            alert("enter a valid year")
        }else{
            console.log(data.date.value, data.month.value, data.year.value, data.gender.value)
        }
    })
    

console.log(data.date.value)
console.log(data.month.value)







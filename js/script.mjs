const inputFormule = document.querySelector(".input__formule");

const btnBiggest = document.querySelector(".btn__biggest");
const btnSmaller = document.querySelector(".btn__smaller");
const btnAnd = document.querySelector(".btn__and");
const btnOr = document.querySelector(".btn__or");
const btnA = document.querySelector(".btn__a");
const btnB = document.querySelector(".btn__b");
const clear = document.querySelector(".clear");
const calcBtn = document.querySelector(".container__btn-calculate");

const containerTable = document.querySelector(".container__table");
const tableValueFirst = document.querySelector(".table__value-first");
const tableValueSecond = document.querySelector(".table__value-second");
const tableFormule = document.querySelector(".table__formule");
const tableRows = document.querySelectorAll(".table__row");

btnBiggest.addEventListener("click", function (e) {
    inputFormule.value += " " + this.textContent + " ";
});

btnSmaller.addEventListener("click", function (e) {
    inputFormule.value += " " + this.textContent + " ";
});

btnAnd.addEventListener("click", function (e) {
    inputFormule.value += " " + this.textContent + " ";
});

btnOr.addEventListener("click", function (e) {
    inputFormule.value += " " + this.textContent + " ";
});

btnA.addEventListener("click", function (e) {
    inputFormule.value += this.textContent;
});

btnB.addEventListener("click", function (e) {
    inputFormule.value += this.textContent;
});

clear.addEventListener("click", function (e) {
    inputFormule.value = "";
})

calcBtn.addEventListener("click", function (e) {
    containerTable.style.display = "block";
    tableFormule.textContent = inputFormule.value.trim();

    const arr = inputFormule.value.trim().split(" ");
    const results = [];

    let firstVal = "";
    let secondVal = "";

    let a;
    let b;
    let calculate;

    arr.forEach((el) => {
        if( (el === "A" || el ==="B") && !a){
            firstVal = el;
            a = 1;
        } else if ( (el === "A" || el === "B") && !b){
            secondVal = el;
            b = 1;
        }
    });

    arr.forEach((el) => {
        if(el === "or"){
            calculate = a || b;
            results.push({a, b, result:calculate});
            a = 1;
            b = 0;
            calculate = a || b;
            results.push({a, b, result:calculate});
            a = 0;
            b = 1;
            calculate = a || b;
            results.push({a, b, result:calculate});
            a = 0;
            b = 0;
            calculate = a || b; 
            results.push({a, b, result:calculate});
        }

        if(el === "and"){
            calculate = a && b;
            results.push({a, b, result:calculate});
            a = 1;
            b = 0;
            calculate = a && b;
            results.push({a, b, result:calculate});
            a = 0;
            b = 1;
            calculate = a && b;
            results.push({a, b, result:calculate});
            a = 0;
            b = 0;
            calculate = a && b; 
            results.push({a, b, result:calculate});
        }

        if(el === ">"){
            calculate = Number(a > b);
            results.push({a, b, result:calculate});
            a = 1;
            b = 0;
            calculate = Number(a > b);
            results.push({a, b, result:calculate});
            a = 0;
            b = 1;
            calculate = Number(a > b);
            results.push({a, b, result:calculate});
            a = 0;
            b = 0;
            calculate = Number(a > b); 
            results.push({a, b, result:calculate});
        }

        if(el === "<"){
            calculate = Number(a < b);
            results.push({a, b, result:calculate});
            a = 1;
            b = 0;
            calculate = Number(a < b);
            results.push({a, b, result:calculate});
            a = 0;
            b = 1;
            calculate = Number(a < b);
            results.push({a, b, result:calculate});
            a = 0;
            b = 0;
            calculate = Number(a < b); 
            results.push({a, b, result:calculate});
        }
    })

    tableValueFirst.textContent = firstVal;
    tableValueSecond.textContent = secondVal;

    tableRows.forEach((el, i) => {
        console.log(results);
        el.children[0].textContent = results[i].a;
        el.children[1].textContent = results[i].b;
        el.children[2].textContent = results[i].result;
    }) 
});


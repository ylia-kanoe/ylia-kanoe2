let numbers = [9,8,7,6,5,4,3,2,1,0];
let calculator = document.querySelector(".calculator__numb");

/* Отрисовка массива цифр */
for (let i = 0; i < numbers.length; i++) {
    let item = numbers[i];
    let calcContainer = document.createElement("div");
    calcContainer.className = "calculator__item";
    calcContainer.innerHTML = item; 
    calculator.appendChild(calcContainer);
}
/* Какой инпут используется */
let inputRez =  document.querySelectorAll('.calculator__input');
let checkInput = (param) => {
    for (let item of param) {
        item.addEventListener('click', () => {
            document.querySelector(".calculator__input.active").classList.remove('active'); 
            item.classList.add('active'); 
        });
    }
}

checkInput(inputRez);

/* При клике запись числа в инпут */
let rez = document.querySelectorAll('.calculator__item');
let inputOne = document.querySelector('.calculator__input-one');
let inputTwo = document.querySelector('.calculator__input-two');

let clickCalculator = (param) => {
    for (let i = 0; i < param.length; i++) {
        param[i].addEventListener('click', () => {
            if (inputOne.classList.contains('active')){
                inputOne.value += +param[i].textContent;
            } else {
                inputTwo.value += +param[i].textContent;
            }
        });         
    }  
}

clickCalculator(rez);

/* Из селектора значения */

document.querySelector('.func').addEventListener('change', function() {
    
    console.log(this.options[select.selectedIndex].value);
})










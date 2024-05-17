let weight = document.querySelector('.weight')
let height = document.querySelector('.height')
let btn = document.querySelector('button')
let answer = document.querySelector('span')


btn.addEventListener('click', calculate)

function calculate() {
    let bmi = (weight.value/(height.value ** 2))
    answer.innerText = bmi
    
}

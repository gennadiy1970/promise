const btnSend = document.querySelector('.test__sbmt ')
const btnReset = document.querySelector('.test__reset ')
const rightText = document.querySelector('.test__right ')
const inputs = document.querySelectorAll('.test__select input ')
const answers = document.querySelectorAll('.test__answer li')

btnSend.addEventListener('click', checkAnswers)
btnReset.addEventListener('click', resetAnswers)

function resetAnswers () {
    Array.from(inputs, el => el.value = 0)
    rightText.textContent = "ожидается"    
}
function checkAnswers () {
    
    rightText.textContent = Array.from(inputs).filter(el => {
        return el.dataset.obj === answers[+el.value - 1].dataset.obj
    }).length === inputs.length;
}
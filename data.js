const formEl = document.querySelector('.rating_form');
const buttonS = document.querySelectorAll('.rating_sign_input');
//rating
buttonS.forEach((radio) => {
    radio.addEventListener('change', function() {
        const checkedNumber = document.querySelector('.rating_sign_input:checked').value || undefined;
        buttonS.forEach((item) => {
            const currentLabel = item.previousElementSibling;
            (item.value <= checkedNumber) ? currentLabel.classList.add('check'): currentLabel.classList.remove('check');
        });
    });
});


const form = document.querySelector('.form__authorization');
const listForm = form.querySelectorAll('.form__auth');
const userPassFirst = document.querySelector("#password1");
const userPassSecond = document.querySelector("#password2");
const mail = form.querySelector('.form__auth');
let flagPas = false;
let flagEmpty = false;


//проверка совпадения паролей
const checkEl = (e) => {
    userPassFirst.style = (userPassFirst.value === userPassSecond.value) ? "border: 3px solid green" : "border: 3px solid red";
    userPassSecond.style = (userPassFirst.value === userPassSecond.value) ? "border: 3px solid green" : "border: 3px solid red";
    flagPas = (userPassFirst.value === userPassSecond.value) ? true : false;
}
userPassSecond.addEventListener('input', checkEl);



//проверка перед отправкой
form.addEventListener('submit', function(e) {
    listForm.forEach(element => {
        if (!(element.value)) {
            element.style = "border: 3px solid red";
            flagEmpty = false
        }
    });
    if (!(flagPas) || (!(flagEmpty))) {
        e.preventDefault();
        alert(`Введите корректный логин и пароль`);
    }
});


// mail.addEventListener('click', function(e) {
//     e.target.style = "border: 1px solid #d9d9d9";
//     flagEmptyPole = true;
// });
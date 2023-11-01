var reg_name1 = /^[a-zа-яё]+$/i;
var reg_name2 = /^[a-z0-9]{5,100}/i;


function validForm(){
    if (reg_name1.test(document.getElementById("name").value) == false) {
        alert("Ошибка: Неверно введены ФИО")
    }
    if (reg_name2.test(document.getElementById("password").value) == false) {
        alert("Ошибка: Неверно введён пароль")
    }
}


document.querySelector(".button").addEventListener("click", validForm);
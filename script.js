
var Div = document.querySelector('#root');


var static = `<h1 class="title">Информация о пользователе</h1> 
<ul class="info__list">
    <li class="info__item">
        <div class="name">Имя:</div>
        <div class="name__value">Анастасия</div>
    </li>
    <li class="info__item">
        <div class="patronymic">Отчество:</div>
        <div class="patronymic__value">Аркадьевна</div>
    </li>
    <li class="info__item">
        <div class="surname">Фамилия:</div>
        <div class="surname__value">Ковригина</div>
    </li>
    <li class="info__item">
        <div class="tel">Телефон:</div>
        <div class="tel__value">+7(977)713-43-55</div>
    </li>
    <li class="info__item">
        <div class="mail">Почта:</div>
        <div class="mail__value">anastasiia.kovrighina@mail.ru</div>
    </li>
</ul>
<button class="edit">Редактировать</button>`

var form =  `<h1 class="title">Информация о пользователе</h1>
<ul class="info__list">
    <li class="info__item">
        <label class="name">Имя:</label>
        <input class="name__value" placeholder=" "></input>
    </li>
    <li class="info__item">
        <label class="patronymic">Отчество: </label>
        <input class="patronymic__value" placeholder=" "></input>
    </li>
    <li class="info__item">
        <label class="surname">Фамилия:</label>
        <input class="surname__value" placeholder=" "></input>
    </li>
    <li class="info__item">
        <label class="tel">Телефон:</label>
        <input class="tel__value" type="tel" name="name" placeholder=" " pattern="[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}" minlength="18" maxlength="18"></input>
    </li>
    <li class="info__item">
        <label class="mail">Почта:</label>
        <input class="mail__value" placeholder=" "></input>
    </li>
</ul>
<button class="cancel">Отмена</button>`

Div.innerHTML = static;
var Edit, Cancel;
Edit = Div.querySelector('.edit');


Edit.addEventListener('click', function(e){
    Div.innerHTML = form;
    Cancel = Div.querySelector('.cancel');

    Cancel.addEventListener('click', function(e){
        Div.innerHTML = static;
    })
})


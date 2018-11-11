 console.log('You are  at  '+window.location);

const Colored = document.querySelector('.page');
let quest = prompt('Какой будет фон у страницы?');
Colored.style['background-color'] = quest;

const text = document.querySelector('.shortBio');
let ColorText = prompt('Какой будет цвет текста на странице');
text.style['color'] = ColorText;

const name = document.querySelector('.name'); 
let nm = prompt('Как зовут человека, который вас вдохновляет?'); 
name.innerHTML = nm; 


const url = document.querySelector('img');
let picture = prompt('Введите адрес картинки');
url.setAttribute('src',picture);

const TextBlock = document.querySelector('.shortBio');
let block = prompt('Введите текст страницы');
TextBlock.innerHTML = block ; 

const zone = document.querySelector('.shortBio');
console.log(zone.className);
zone.className += ' animated';



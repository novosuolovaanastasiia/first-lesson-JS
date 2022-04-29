let yourname = prompt('Вкажи своє ім"я');
alert(`Привіт, ${yourname}!`);

let age = prompt('Вкажи свій рік народження');
const year = '2022';
let yourage = year - age;
alert(`Тобі ${yourage} років!`);

let square = prompt('Вкажи довжину сторони квадрату');
let side = square * 4;
alert(`Периметр твого квардрату ${side} см.`);

let radius = prompt('Вкажи радіус кола');
let circle = 3.14 * Math.pow(radius, 2);
alert(`Площа твого кола ${circle} см`);

let distance = prompt('Вкажи відстань іж двома містами (км)');
let time = prompt('Вкажи час за який ти хочеш туди дістатися (год)');
let speed = distance / time;
alert(`Швидкість з якою ти зможеш туди дістатися дорівнює ${speed} км/год.`);

let dollar = prompt('Вкажи кількість долларів для конвертації в гривні');
const curse = 29.5;
let hryvnia = dollar * curse;
alert(`За таку кількість долларів ви отримаєте ${hryvnia} гривні`)


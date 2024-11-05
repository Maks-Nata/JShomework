// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array=[23,34,56,85,100,'vasy',34,790,45,69]
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);
console.log(array[0]);
// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book={
    title: 'run',
    pageCount:45,
    genre:'sport',
}
let book1={
    title: 'swim',
    pageCount:450,
    genre:'sport',
}
let book2={
    title: 'football',
    pageCount:450,
    genre:'sport',
}
console.log(book2)
// #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book3={
    title: 'swim',
    pageCount:450,
    genre:'sport',
    authors:[{name:'Renbol',age:54,},
        {name:'Twen',age:45,}]
}
let book4={
    title: 'football',
    pageCount:450,
    genre:'sport',
    authors:['Shevchenko',54]
}
let book5={
    title: 'run',
    pageCount:450,
    genre:'sport',
    authors:[{name:'Tunbol',age:34,},
        {name:'Twen',age:45,}]
}
// #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'vasya', username:'Vas',password:'1234jV'},
    {name: 'petya', username:'Petas',password:'1234juV'},
    {name: 'kolya', username:'Kolas',password:'u1234jV'},
    {name: 'olya', username:'Olya',password:'1k234jV'},
    {name: 'max', username:'Mas',password:'u12k34jV'},
    {name: 'anya',username:'Anas',password:'A1234jV'},
    {name: 'oleg', username:'Ol',password:'1O234jV'},
    {name: 'andrey', username:'Andr',password:'1AN234jV'},
    {name: 'masha', username:'Masha',password:'m1234jV'},
    {name: 'olya', username:'OLas',password:'ty1234jV'},
    {name: 'max',username:'Maks',password:'M1234jV'}
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let temperature=[
    {dayOftheWeek:'Monday',morning:10,afternoon:15,evening:-1},
    {dayOftheWeek:'Tuesday',morning:1,afternoon:10,evening:-2},
    {dayOftheWeek:'Wednesday',morning:7,afternoon:15,evening:5},
    {dayOftheWeek:'Thursday',morning:10,afternoon:15,evening:5},
    {dayOftheWeek:'Friday',morning:11,afternoon:15,evening:8},
    {dayOftheWeek:'Saturday',morning:10,afternoon:16,evening:9},
    {dayOftheWeek:'Sunday',morning:11,afternoon:15,evening:8}
]
console.log(temperature[4].morning);
console.dir(temperature[0]);
// #bAUsaq6LI
// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x;

if (x ==! 0){
    console.log('вірно');
}
else {
    console.log('невірно')
}
// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time=25
let timeClock = time / 15;
if( timeClock  < 1) {

    console.log('перша частина години');}
else if(timeClock<2){console.log('друга частина години');}


else if( timeClock <3){
    console.log('третя частина години');}

else if (timeClock<4){
    console.log('четвертa частинa години');}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let month=5;
let day = month/10;
let dayClear=true;
if(day<1) {if (dayClear){ console.log('перша Декада');}
else if(day<2 && dayClear) {concole.log('друга Декада');}
else if (day<3){console.log('третья Декада');}
}
// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let weekday  ;
weekday= + prompt();
switch (weekday){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Thuesday');
        break;
    case 3:
        console.log('Weensday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7 :
        console.log('Sunday');
        break;
    default:
        console.log('?????')
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a=-1;
let b=-5;
if(a>b){
    console.log(a)
}
else if(b>a){
    console.log(b)}

else {
    console.log('рівні числа')
}
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let c=100
console.log(typeof c)

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if(coursesAndDurationArray[0]. monthDuration>5){
    console.log("Супер")
}
if(coursesAndDurationArray[1]. monthDuration>5){
    console.log("Супер")
}
if(coursesAndDurationArray[2]. monthDuration>5){
    console.log("Супер")
}
if(coursesAndDurationArray[3]. monthDuration>5){
    console.log("Супер")
}
if(coursesAndDurationArray[4]. monthDuration>5){
    console.log("Супер")
}
if(coursesAndDurationArray[5]. monthDuration>5){
    console.log("Супер")
}
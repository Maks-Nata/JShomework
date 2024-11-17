// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let text1 = 'hello world'
let text2 = 'lorem ipsum'
let text3 = 'javascript is cool'
console.log(text1.length);
console.log(text2.length);
console.log(text3.length)
// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(text1.toUpperCase());
console.log(text2.toUpperCase());
console.log(text3.toUpperCase())
// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let text1a = 'HELLO WORLD';
let text2a = 'LOREM IPSUM';
let text3a = 'JAVASCRIPT IS COOL';
console.log(text1a.toLowerCase());
console.log(text2a.toLowerCase());
console.log(text3a.toLowerCase());
// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(str)
let strFilter = str.trim();
console.log(strFilter);
// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let strin = 'Ревуть воли як ясла повні';

function stringToarray(strin) {
    if (strin) {
        const split = strin.split(' ');
        return split
    }
    return ['']
}

console.log(stringToarray(strin))
// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let ArrayNumbs = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
let ArrayNumbstoString = ArrayNumbs.map(String);
console.log(ArrayNumbstoString)
// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
function sortNums(nums, direction) {
    if (direction === 'ascending') return nums.sort((a, b) => a - b);
    if (direction === 'descending') return nums.sort((a, b) => b - a);
}

console.log(sortNums([21, 81, 33], 'ascending'))

// #yo06d74c1C
// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sort = coursesAndDurationArray
    .sort((a, b) => a.monthDuration - b.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index) => {
        value.id = index + 1;
        return value;
    })
console.log(sort);
// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
const suits = ['spade', 'diamond', 'heart', 'clubs'];
const cardsValue = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king']
const cards = []
for (const suit of suits) {
    for (const value of cardsValue) {
        const card={cardSuit: suit, value: value}
        if (suit === 'heart'|| suit === 'diamond'){
            card.color='red'
        }
        else {
            card.color='black'
        }
        cards.push(card);
    }
}
console.log(cards);
// - знайти піковий туз
console.log(cards.find( card => card.value === 'ace' && card.cardSuit === 'spade' ));
// - всі шістки
console.log(cards.filter(card=> card.value === '6'));
//  - всі червоні карти
console.log(cards.filter(card=> card.color === 'red'));
// - всі буби
console.log(cards.filter(card=> card.cardSuit === 'diamond'));
// - всі трефи від 9 та більше
 console.log(cards.filter(card => card.cardSuit === 'clubs' && card.value !== '6' && card.value !== '7' && card.value !== '8' && card.value !== '9'));
//  console.log(cards.filter(card => card.cardSuit === 'clubs' && ( card.value !== '6' || card.value !== '7' || card.value !== '8' || card.value !== '9')))
// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let reduse = cards.reduce((accum,card)=>{
switch (card.cardSuit) {
    case 'diamond' :accum.diamonds.push(card);
        break;
    case 'spade' :accum.spades.push(card);
        break;
    case 'heart' :accum.hearts.push(card);
        break;
    case 'clubs' :accum.clubs.push(card);
        break
}
    return accum;
},
{
     spades:[],
         diamonds:[],
     hearts:[],
     clubs:[]
});
console.log(reduse);
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.filter(cours=>{return cours.modules.includes('sass')}));
console.log(coursesArray.filter(cours=>{return cours.modules.includes('sass')}));
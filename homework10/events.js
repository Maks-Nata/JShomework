// Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', function () {
    const text = document.getElementById('text');
    text.style.display = 'none';
});
// #j693ca8
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const users = document.getElementById('users');



users.addEventListener('submit', function (evn) {
evn.preventDefault()
    const nameUs = users.nameUser.value
    const age = + users.ageUser.value;
    const infoUser = document.getElementById('info')
let user={nameUs,age};
console.log(user);
        if (age >= 18) {
            infoUser.innerText =`Вітаємо ${nameUs}.Реєстрацію  пройдено`;
            console.log(`Вітаємо ${nameUs}.Реєстрацію  пройдено`)
        }
       else if (age<18 && age>0){
            infoUser.innerText ='Нажаль ваш вік менше чем 18.Реєстрацію не пройдено';
            console.log('Нажаль ваш вік менше чем 18.Реєстрацію не пройдено')
        }
        else  if (age<=0){
            infoUser.innerText='Введіть cвій вік'
            console.log('Введіть cвій вік')
        }

    })

// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
    const someForm = document.forms.someform;
    const target = document.getElementById('target')
    someForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const nameValue = someForm.name.value;
        const surnameValue = someForm.surname.value;
        const ageValue = +someForm.age.value;
        let obj = {nameValue, surnameValue, ageValue};
        target.innerText = nameValue + " " + surnameValue + " " + ageValue;
        console.log(obj)
    })
// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let numbers=+localStorage.getItem('number');
    numbers+=1;
    localStorage.setItem('number',numbers);
    const numb=document.getElementById('numb');
numb.innerText=numbers;
// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
const convector=document.getElementById('convector');
const result=document.getElementById('result');
convector.addEventListener('input',function () {
    result.innerText= +this.value*2.2
})
// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
function addToLocalStorage(arrayName,objToAdd) {
    // В Local Storage додаємо arrayName(arrayName-ключ по якому в локал сторідж зберігаеться інформація)
     const key = localStorage.getItem(arrayName);
     // Pобимо перевірку чи існує в локал сторідж arrayName
     if(!key){
         throw new Error('stop')
     }
     // З джейсон arrayName перетворюємо на об'єкт(массив)
     const array=JSON.parse(key)
     //Робимо перевірку чи є обєктом({}) то пушимо objToAdd в наш массив array

     if (typeof objToAdd === 'object'){
         array.push(objToAdd);}
         localStorage.setItem(arrayName,JSON.stringify(array))

 }
 // Робимо перевірку нашої функції
 addToLocalStorage('pageView',{})

//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
//
//
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
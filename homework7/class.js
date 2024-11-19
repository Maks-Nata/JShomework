// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}

const user = new User(1, 'Max', 'Petrov', 'bvhr@gmail.com', '+3809765490');
let users = [
    new User(1, 'Max', 'Petrov', 'bvhr@gmail.com', '+3809765490'),
    new User(2, 'Olga', 'Ivanenko', 'qwerbh@gmail.com', '+3809678423'),
    new User(3, 'Nata', 'Kovalenko', "cbkl@gmail.com", "+38095378954"),
    new User(4, 'Marina', 'Petrova', 'bavhr@gmail.com', '+3809765490'),
    new User(5, 'Olga', 'Ivankova', 'qawerbh@gmail.com', '+3809678423'),
    new User(6, 'Nina', 'Kotarenko', "cobkl@gmail.com", "+38095378954"),
    new User(7, 'Nata', 'Kovlenko', "cobakl@gmail.com", "+38095378954"),
    new User(8, 'Olga', 'Ivanenko', 'qwerbh@gmail.com', '+3809678423'),
    new User(9, 'Natalia', 'Kovalenko', "nacbkl@gmail.com", "+38095378954"),
    new User(10, 'Nelly', 'Kovlenko', "cbokylu@gmail.com", "+38095378954"),
];
console.log(users);
// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (fil
// ter)
let filteruser = (us) => us.id % 2 === 0
console.log(users.filter(filteruser));
// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortUser = users.sort((a, b) => b.id - a.id);
console.log(sortUser);
// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [
    new Client(1, 'Olga', 'Antonenko', 'das@gmail.com', '+38097345891', [{title: 'phone', price: 1456}, {
        title: 'TV',
        price: 134560
    },]),
    new Client(2, 'Oleg', 'Antonenko', 'das@gmail.com', '+38097345891', [{title: 'phone', price: 1456},]),
    new Client(3, 'Oleg', 'Kononenko', 'das@gmail.com', '+38097345891', [{
        title: 'phone',
        price: 1456
    }, {title: 'laptop', price: 14700}, {title: 'TV', price: 34590}, {title: 'modem', price: 1500}, {
        title: 'computer',
        price: 23450
    }]),
    new Client(4, 'Max', 'Petrov', 'bvhr@gmail.com', '+3809765490', [{title: 'phone', price: 14996}, {
        title: 'laptop',
        price: 15500
    }, {title: 'TV', price: 34590},]),
    new Client(5, 'Olga', 'Ivankova', 'qawerbh@gmail.com', '+3809678423', [{title: 'TV', price: 34590}, {
        title: 'modem',
        price: 1500
    }, {
        title: 'computer',
        price: 23450
    }],), new Client(6, 'Oleg', 'Antonenko', 'das@gmail.com', '+38097345891', [{title: 'phone', price: 1456},]),
    new Client(7, 'Nata', 'Kovlenko', "cobakl@gmail.com", "+38095378954", [{
        title: 'laptop',
        price: 14700
    }, {title: 'TV', price: 34590},]),
    new Client(8, 'Olga', 'Ivanenko', 'qwerbh@gmail.com', '+3809678423', [{title: 'smart clock', price: 2345}]),
    new Client(9, 'Koly', 'Frolov', 'godQ@gmail.com', '+45678903', [{title: 'laptop', price: 23490}]),
    new Client(10, 'Koly', 'Frolov', 'godQ@gmail.com', '+45678903', [{title: 'laptop', price: 23490}]),
]
console.log(clients);
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const sortClient = clients.sort((a, b) => a.order.length - b.order.length)
console.log(sortClient)
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, producer, year, maxSpeed, engineVolume) {
    this.model=model;
    this.producer=producer;
    this.year=year;
    this.maxSpeed= maxSpeed;
    this.engineVolume= engineVolume;
    this.drive= function (){console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)};
    this.info= function (){
        for (const key in this) {
console.log(key,this[key]);
        }}
    this.increaseMaxSpeed=function (newSpeed){if(newSpeed>0) {this.maxSpeed=this.maxSpeed+newSpeed}};
    this.changeYear=function (newValue){if (newValue>1815) this.year= newValue};
    this.addDriver = function (driverObject){
      if (driverObject)  this.driver=driverObject;

    }

}
const car= new Car('BMW','GermanBMW',1995,200,5)
console.log(car)
car.drive()
car.info()
car.changeYear(2000)
car.addDriver()
car.increaseMaxSpeed(45)
console.log(car)

// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Carclass {


    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive (){console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)};
    info  (){
    for (const key in this) {
        console.log(key,this[key]);
    }}
    increaseMaxSpeed (newSpeed){if(newSpeed>0) {this.maxSpeed=this.maxSpeed+newSpeed}};
    changeYear (newValue){if (newValue>1815) this.year= newValue};
    addDriver  (driverObject){
    if (driverObject)  this.driver=driverObject;}

}
const carClass=new Carclass('BMW','GermanBMW',1995,200,5)
console.log(carClass)
carClass.drive()
carClass.info()
carClass.changeYear(2000)
carClass.addDriver()
carClass.increaseMaxSpeed(45)
console.log(carClass)
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {

    constructor(name, age, fontSize) {
        this.name = name;
        this.age = age;
        this.fontSize = fontSize;
    }
}
class Prince {

    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
const cinderellas=[
    new Cinderella('Anna',35,38),
    new Cinderella('Anastasia',23,36),
    new Cinderella('Olga',22,37),
    new Cinderella('Viktoria',45,39),
    new Cinderella('Natalia',21,37),
    new Cinderella('Angelina',35,38),
    new Cinderella('Alona',23,36),
    new Cinderella('Oksana',42,40),
    new Cinderella('Vera',45,39),
    new Cinderella('Natalia',20,35)
];
const prince= new Prince('Viktor',23,35);
let cinderellaWife=cinderellas.find(cinderella=>cinderella.fontSize===prince.shoe);
 prince.wife = cinderellaWife;
console.log(cinderellaWife);


// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
Array.prototype.myforeach = function (callback) {
    const yourArray=this;
    for (const item of yourArray) {
callback(item);
    }
    
};
[144, 26,  56].myforeach(x=>console.log(x));
Array.prototype.myfilter=function (preduc) {
    const arr=[];
    for (const item of this) {
        if(preduc(item)){
            arr.push(item);
        }
        
    }
    return arr;
}
const result= cinderellas.myfilter((cinderella)=> cinderella.age > 35);
console.log(result)
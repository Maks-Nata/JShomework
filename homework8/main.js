// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
function clone(obj) {
    if (obj){
         let functions=[]
        for (const key in obj) {
         if(typeof obj[key]==='function') {
           const functionClone=  obj[key].bind({});
             functions.push({functionClone,key});
         }
        }
        let parse = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
           parse[func.key]=func.functionClone
        }
        console.log(parse)
        return parse;
    }
    throw new Error('stop')
}
const cloneFn = clone({name:'data', age:23, foo() {console.log('hello')}});
cloneFn.foo()
// #iz6emEsP2BA
// - є масив
 let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
const courceAddid= coursesAndDurationArray.map((course,index)=> ({...course,id: index+1 }))
console.log(courceAddid)
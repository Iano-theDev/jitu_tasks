//
let ids: number[] = [1, 1, 3,]
let arr: any[] = [1, "s", true]

//tuple
//follows the particular order
let person: [number, string, boolean] = [1, "Hello", true];

//Tupule array
let employee: [number | string, string | boolean][]
employee = [
    [1, 'yano'],
    [2, 'john'],
    [3, true],
    ["yanos", false]
]

// Union
let id: string | number
id = '23'

//enum
enum Direction1 {
    up,
    Down,
    Left,
    Right,
}

class Enum {
    constructor(obj: object) {
        Object.assign(this, obj);
    }
}

// const DaysOfWeek = new Enum({
//     SUNDAY: 0,
//     MODAY: 1,
//     TUESDAY: 2,
//     WEDNESDAY: 3,
//     THURSDAY: 4,
//     FRIDAY: 5,
//     SATURDAY: 6,
// });

// console.log(DaysOfWeek.SUNDAY)
































// let message: string = 'hello world';

// let heading = document.createElement('h1');

// heading.textContent = message;

// document.body.appendChild(heading);

// let box;

// console.log(typeof(box));

// box = "hello";
// console.log(typeof(box));

// box = 4;
// console.log(typeof(box));

// interface Product{
//     id: number,
//     name: string,
//     price: number
// };

// function getProduct(id : number) : Product{
//     return {
//         id: id,
//         name: `Awesome Gadget ${id}`,
//         price: 99.5
//     }
// }

// const showProduct = (name: string, price: number) => {
//     console.log(`The product ${name} costs ${price}$.`);
// };

// const product = getProduct(1);
// console.log(`The product ${product.name} costs $${product.price}`);


// type manipulation 
// type Department={
//     hod: string
//     worker:string[]
//     name:string
//     records: object[]
// }

// let IT:Department={
//     hod:'Mr Elvis',
//     worker:['John', 'doe'],
//     name: "THE It Department",
//     records: [{}]
// }

// type KeyOptions = keyof Department;

// let xp: KeyOptions= "records"


// for (let keys in IT){
//     console.log(keys);
//     //let keyOptions: 'hod
// }

// //TS types
// const mainBody: any = document.querySelector('.main')
// const heading = document.querySelector('h1')
// const myDiv = document.createElement('div');
// myDiv.innerHTML = `<p>Yooooooooo there, im a div thats being appended to the main<p>`

// const appendMain = mainBody.appendChild(myDiv)


// //
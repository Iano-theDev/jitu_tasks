

// let person = {
//     name: "John",
//     secondName: "Doe",
//     thirdName: "Smith",
//     parent: {
//         mother: "Jane",
//         father: "Joe"
//     }
// }

// let {thirdName} = person;
// let {parent} = person;
// let {mother} = parent;

// console.log(mother);
// console.log(parent);

// ES6 spared-------------------------------------------------------------
function add(...number) {
    console.log(number);
    return number.reduce((a,b)=>{
        return a + b;
    }, 100)
}

console.log(add(1,2,3,4,5,6,7,8,9,10));

// ES6 spared 2------------------------------------------------------------
// let moreNames = ["John", "Doe", "Smith", "Jane", "Joe"];
// let names = ["Ian", "Kamande", "Mwangi", ...moreNames];

// console.log(names);

// ES6 rest---------------------------------------------------------------


// ES6 for in loop--------------------------------------------------------
let names = ["Ian", "Kamande", "Mwangi", "John", "Doe", "Smith", "Jane", "Joe"];
for (let i in names) {
    console.log(names[i]);
}
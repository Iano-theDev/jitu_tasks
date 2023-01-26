// object literals

// //example object
// let user1 = {
//     name: "Ian",
//     age: 20
// }

// //Function Factories: manufacturing objects
// function Person1(name, age) {
//     return{
//         name,
//         age
//     }
// }

// const Ian = Person1("Ian", 34);
// console.log(Ian);


// constructor Function: Dont need to return, uses
// this keyword, instantiate using new keyword
// function Person(name, age) {
//     this.name = name,
//     this.age = age
// }

// const Iano = new Person("Iano", 64);
// console.log(Object.keys(Iano));

// console.log(Object.getOwnPropertyDescriptor(Iano, 'age'));

//Property descriptors
// defining our own property descriptor
// Object.defineProperty() {
//     configurable: true;
//     writable: false;
//     value: true;
// }


// Assesors (Get and Set)

// function Dummy(salary){
//     let tax = 16
//     this.salary = salary

//     Object.defineProperty(this, 'tax', {
//         get:function(){
//             return tax
//         },
//         set:function(value){
//             if(value>16){
//                 tax=value
//             }
//         }
//     })
    

//     Object.defineProperty(this, 'gross', {
//         get:function(){
//             if(salary<24000){
//                 return salary
//             }
//             return (salary*tax/100)
//         }
//     })
// }

// const emp = new Dummy(2000);
// emp.tax=23;
// console.log(emp.gross)


//INHERITANCE
//Prototypical Inheritance 

// function vehicle(){
//     this.hoot = function(){
//         console.log('Hooting');
//     }
// }

// vehicle.prototype.speed = function(){
//     console.log('speeding')
// }

// vehicle.prototype.drift = function(){
//     console.log('Drifting')
// }

// classes

// class Vehicle{
//     constructor(name){
//         this.name=name
//     }
//     drive(){
//         console.log('walking')
//     }
//     hoot(){
//         console.log('hooting')
//     }
//     speed(){
//         console.log('Speeding')
//     }
// }

// const v = new Vehicle('mazda cf')
// console.log(v)

// class Car extends Vehicle{
//     constructor(name){
//         super(name)
//     }
// }

// class Lorry extends Vehicle{
//     constructor(name){
//         super(name)
//     }
// }

// const L = new Lorry("Mercedes Lorry")
// console.log(L)
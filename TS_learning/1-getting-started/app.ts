let message: string = 'hello world';

let heading = document.createElement('h1');

heading.textContent = message;

document.body.appendChild(heading);

let box;

console.log(typeof(box));

box = "hello";
console.log(typeof(box));

box = 4;
console.log(typeof(box));

interface Product{
    id: number,
    name: string,
    price: number
};

function getProduct(id : number) : Product{
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: 99.5
    }
}

const showProduct = (name: string, price: number) => {
    console.log(`The product ${name} costs ${price}$.`);
};

const product = getProduct(1);
console.log(`The product ${product.name} costs $${product.price}`);

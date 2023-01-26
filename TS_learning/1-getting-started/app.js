var message = 'hello world';
var heading = document.createElement('h1');
heading.textContent = message;
document.body.appendChild(heading);
var box;
console.log(typeof (box));
box = "hello";
console.log(typeof (box));
box = 4;
console.log(typeof (box));
;
function getProduct(id) {
    return {
        id: id,
        name: "Awesome Gadget ".concat(id),
        price: 99.5
    };
}
var showProduct = function (name, price) {
    console.log("The product ".concat(name, " costs ").concat(price, "$."));
};
var product = getProduct(1);
console.log("The product ".concat(product.name, " costs $").concat(product.price));

function getProducts(id){
    return {
      id: id,
      name: `Awesome Gadget ${id}`,
      price: 99.5
    }
}

const ShowProduct = (name, price) => {
    console.log(`The product ${name} costs ${price}$.`);
};

// passing the argments in the wrong order to showproduct function
const products = getProduct(1);
ShowProduct(product.price, product.name);

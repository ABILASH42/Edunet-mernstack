

function addproduct(products,product){
    products.push(product);
    return products;
}

function listproducts(products){
    products.forEach(product => {
        console.log(product);
    });
}

module.exports = {addproduct,listproducts};
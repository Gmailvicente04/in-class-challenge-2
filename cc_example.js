//Task 1

let products = [
    {name: "Laptop", price: 1000, category: "Electronics"},
    {name: "Phone", price: 500, category: "Electronics"},
    {name: "Tablet", price: 300, category: "Electronics"},
    {name: "Shoes", price: 100, category: "Fashion"},
    {name: "Shirt", price: 50, category: "Fashion"},
    {name: "Pants", price: 80, category: "Fashion"},

];

 function getProductsByCategory(products, category) {
    return products.filter(product => product.category === category)
 }

 console.log(getProductsByCategory(products, "Electronics"));

//Task 2

function applyDiscount(products, discountRate) {
    return products.map(product => {
        return {
            ...product,
            price: product.price - (product.price * discountRate)
        }
    })
}

console.log(applyDiscount(products, 0.1));



//Task 3

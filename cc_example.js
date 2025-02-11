//Task 1
function getProductsByCategory(products, category) {

}

console.log(getProductsByCategory(product, "Electronics"));


let product = [
    {name: "Laptop", price: 1000, category: "Electronics"},
    {name: "Phone", price: 500, category: "Electronics"},
    {name: "Tablet", price: 300, category: "Electronics"},
    {name: "Shoes", price: 100, category: "Fashion"},
    {name: "Shirt", price: 50, category: "Fashion"},
    {name: "Pants", price: 80, category: "Fashion"},

]

 function getProductsByCategory(products, category) {
    product.filter(product => product.category === category)
 }
 

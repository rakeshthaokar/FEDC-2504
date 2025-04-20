const products = [
    { name: "Laptop", price: 1200, category: "Electronics" },
    { name: "Phone", price: 800, category: "Electronics" },
    { name: "Shirt", price: 40, category: "Clothing" },
    { name: "Book", price: 20, category: "Stationery" },
    { name: "Shoes", price: 100, category: "Clothing" }
];

console.log("------------1) map()------------")
let ProductsName = products.map((ele) => {
    return ele.name.toUpperCase()
})
console.log(ProductsName)

console.log("------------2) filter()------------")
let Filtered = products.filter((ele) => {
    return ele.category === "Clothing"
})
console.log(Filtered)

console.log("------------3) sort()------------")
let Sorting = products.sort((ele1, ele2) => {
    if(ele1.price > ele2.price){
        return 1
    }
    else if(ele1.price < ele2.price){
        return -1
    }
    return 0
}).map((ele) => ele.name).join(", ")
console.log(Sorting)

console.log("------------4) forEach()------------")
let Sentence = products.forEach(ele => {
    console.log(`The product ${ele.name} costs $${ele.price} and belongs to ${ele.category} category`)
})

console.log("------------5) reduce()------------")
let Total = products.reduce((acc, curr) => {
    return acc + curr.price
}, 0)
console.log(Total)

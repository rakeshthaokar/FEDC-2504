function sumNumbers(...numbers){
    let total = 0
    for(let num of numbers){
        total+=num
    }
    return total
}
let sum = sumNumbers(5,10,15)
console.log(sum)
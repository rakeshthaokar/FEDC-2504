const fruits = ["Apple", "Banana", "Cherry"];
fruits.pop();
//fruits[3] = "Orange";

// In line number 2 we remove the last items of the fruits then line no. 3 we add the new items in 3rd index
// the output will show [item1, item 2, <empty item>, item3]
// instead of using index number we use push()
fruits.push("Orange")
console.log(fruits)
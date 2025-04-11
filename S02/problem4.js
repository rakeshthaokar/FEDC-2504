//example 1
let students = [
    { name: "Alice", marks: 45, subject: "Math" },
    { name: "Bob", marks: 75, subject: "Science" },
    { name: "Charlie", marks: 50, subject: "English" },
    { name: "David", marks: 30, subject: "History" }
  ];
  
  for(let student of students){
    if(student.marks>=50){
        console.log(`${student.name} - ${student.subject}`)
    }
  }

// example 2
let words = ["apple", "banana", "grapefruit", "kiwi", "pineapple"];
let highlength = 0
let output = ""
for(let ele of words){
    if(highlength<ele.length){
        highlength = ele.length
        output = ele
    }
}
console.log(output)
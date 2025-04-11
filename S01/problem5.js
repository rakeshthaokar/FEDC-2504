let students = [
    { name: "Alice", age: 20, marks: { math: 85, science: 90, english: 88 } },
    { name: "Harry", age: 23, marks: { math: 80, science: 93, english: 82 } },
    { name: "John", age: 25, marks: { math: 88, science: 70, english: 95 } }  
]

students.push({ name: "Jack", age: 26, marks: { math: 90, science: 96, english: 88 } })

let highestAvg = 0
let higheststudent = ""

for(let student of students){
    let marks = student.marks
    //console.log(marks)
    let totalMarks = 0
    for(let mark in marks){
        totalMarks = (totalMarks + marks[mark])
    }
    let length = Object.keys(marks).length
    //console.log(length)
    //console.log(totalMarks)
    let avgMarks = (totalMarks/length).toFixed(2)
    console.log(`Average Marks of ${student.name}: ${avgMarks}`)
    
    if(avgMarks>highestAvg){
        highestAvg = avgMarks
        higheststudent = student.name
        
    }
}
console.log(`Highest Average Marks:- ${higheststudent} : ${highestAvg}`)


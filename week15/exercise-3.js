function getPassedStudents(students) {
   //Start Coding Here
   let pass = [];
   for (let i in students){{
    if (students[i].score > 50){
        pass.push(students[i].name)
    }
   }
}
return pass;
};

let result1 = getPassedStudents([
   { name: "A", score: 80 },
   { name: "B", score: 45 },
   { name: "C", score: 60 }
]);
console.log(result1); // ["A", "C"]
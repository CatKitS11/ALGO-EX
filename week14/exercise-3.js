function findMax(nums) {
    //Start Coding Here
    let numMax = Math.max(...nums)
    return numMax
 };
 
 let result1 = findMax([1, 9, 3, 5]);
 console.log(result1); // 9
 
 let result2 = findMax([-10, -5, -2]);
 console.log(result2); // -2
function countVowels(text) {
    //Start Coding Here
    let textLower = text.toLowerCase().split("");
    let count = 0;
    console.log(textLower);
    for (let i = 0; i < textLower.length; i++){
        if (textLower[i] === "a" || textLower[i] === "e" || textLower[i] === "i" || textLower[i] === "o" || textLower[i] === "u"){
            count++;
        }
    }
    return count;
 };

let result1 = countVowels("hello");
console.log(result1); // 2

let result2 = countVowels("TECHUP");
console.log(result2); // 2
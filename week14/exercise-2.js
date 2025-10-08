function reverseString(text) {
    //Start Coding Here
    let resultText = text.split("").reverse().join('');
    return resultText
 };
 
 let result1 = reverseString("hello");
 console.log(result1); // "olleh"
 
 let result2 = reverseString("TechUp");
 console.log(result2); // "pUhceT"
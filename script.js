// 1. multiply function (3 different numbers required)
function multiply(a, b, c) {
    if (a === b || b === c || a === c) {
        return "Numbers must NOT be the same";
    }
    return a * b * c;
}


// 2. convertToSeconds (function expression)
const convertToSeconds = function(minutes) {
    return minutes * 60;
};


// 3. Fahrenheit to Celsius
function fahrenheitToCelsius(temp) {
    return (temp - 32) * (5 / 9);
}


// 4. Reverse string function
function reverseString(str) {
    return str.split("").reverse().join("");
}


// 5. Count vowels function
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}


// 6. isPrime function
function isPrime(num) {

    if (num <= 1) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}
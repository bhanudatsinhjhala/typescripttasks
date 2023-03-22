"use strict";
// 1. Create a function that takes two parameters (a number and a string),
//  and returns an object with the number and string as properties.
function demo(num, str) {
    return { num, str };
}
console.log(demo(5, "hello"));
// 2. Write a function that takes an array of numbers and
//  returns the sum of all the numbers in the array.
function sumOfNumbers(a, b) {
    return a + b;
}
console.log(sumOfNumbers(4, 5));
// 3. Write a function that takes a string and returns true if the string is a palindrome 
// (reads the same backwards and forwards), false otherwise.
function palindromeChecker(value) {
    const reverString = value.split("").reverse().join("");
    if (reverString == value)
        return true;
    return false;
}
console.log(palindromeChecker("malayalam"));
// 4. Write a function that takes an array of strings and 
// returns a new array with all the strings in uppercase.
function convertUpperCase(arrString) {
    arrString = arrString.map((string) => string.toUpperCase());
    return arrString;
}
console.log(convertUpperCase(["john", "jacob", "jay"]));
// 5. Write a function that takes an object with properties for width and height, 
// and returns the area of a rectangle with those dimensions.
function areaOfRectangle(width, height) {
    return width * height;
}
console.log(areaOfRectangle(5, 10));
// 6. Write a function that takes an array of numbers and 
// returns a new array with only the even numbers from the original array.
function evenNumbers(arrNum) {
    arrNum = arrNum.filter(number => {
        if (number % 2 == 0)
            return number;
    });
    return arrNum;
}
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// 7. You are given a string and two markers (the initial one and final). 
// You have to find a substring enclosed between these two markers. 
// But there are a few important conditions.
// - The initial and final markers are always different.
// - The initial and final markers are always 1 char size.
// - The initial and final markers always exist in a string and go one after another.
// Input: Three arguments. All of them are strings. The second and third arguments are the initial and final markers.
// Output: A string.
// Examples:
// 1. betweenMarkers("What is >apple<", ">", "<");
// 2. betweenMarkers("What is [apple]", "[", "]");
function betweenMarkers(sentence, initial, final) {
    const result = sentence.split(initial)[1].split(final)[0];
    return result;
}
console.log(betweenMarkers("What is [orange is very good fruit]", "[", "]"));

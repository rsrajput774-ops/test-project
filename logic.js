function sum(a, b) {
    return a + b;
}

let total = sum(5, 6);

// Show in console
console.log("sum", total);

// Show in HTML
document.getElementById("result").innerText = "Sum is: " + total;

//max number function
let num = [1,2,3,4,5,6,7,8,9,10]

let max = num[0];

for (let i = 1; i < num.length; i++) {
  if (num[i] > max) {
    max = num[i];
  }
}

console.log(max)

document.getElementById("resultMaxNumber").innerText = "Max Number is: " + max;


// ood evean number function
let arrEveanNum = [1,2,3,4,5,6,7,8,9,10]
let evenArrayNum = []

for (let index = 0; index < arrEveanNum.length; index++) {

    if (arrEveanNum[index] % 2 === 0) {
        evenArrayNum.push(arrEveanNum[index])
    } else{
        console.log(arrEveanNum[index]);
    }
    
}

console.log(evenArrayNum);


//Reverse a string using loop
let mainStringReverse = "Ram singh"
let ReverseString = ""

for (let  index = mainStringReverse.length -1; index >=0; index--) {
    
    ReverseString +=mainStringReverse[index]
}

console.log(ReverseString);

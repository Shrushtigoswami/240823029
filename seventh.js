function reverseNumber(num) {
  return parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
}

console.log(reverseNumber(12345));    
console.log(reverseNumber(-12345));   
console.log(reverseNumber(12000)); 
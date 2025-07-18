function ispelindrome(num){
    let str = num.toString();
    let reversed = str.split('').reverse().join('');
    return str === reversed;
    }

console.log(ispelindrome(121))
// const fibonacci = require('./lib/fibonacci')
// console.log(fibonacci(1));


//判断是否为闰年
function isLeapYear(n){
    if((n%4===0 && n%100 !=0) || n%400===0)
        return true
    else
       return false
}
module.exports=isLeapYear

console.log("2000" + isLeapYear(2000));
console.log("1900" + isLeapYear(1900));
console.log("2008" + isLeapYear(2008));
console.log("2009" + isLeapYear(2009));



//fibonacci函数
const fibonacci=require('./lib/fibonacci')
for (var i=1;i<20;i++){
    console.log(fibonacci(i));
}

const Anagrams=require('./lib/Anagrams');
console.log(Anagrams("abc"));



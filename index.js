//Construct a for loop that combines two strings together, alternating the characters from each source.  Print the result.
const input=require('readline-sync')
let  str='';
let  str1= '';
str=input.question("Enter the string:")
str1=input.question("Enter the another string:")
// let arr=str.split('')
// let arr1=str1.split('')
let output='';
//console.log(typeof output)
// console.log(arr)
// console.log(arr1)
//Example: If string = “1234” and otherString = “5678”, then the output will be “15263748”.
for(let i=0;i<str.length||i<str1.length;i++){
  if(i<str.length){
    output=output+str[i]
    console.log("first if",output)
  }
  if(i<str1.length){
    output=output+str1[i]
    console.log("second if",output)
  }
//output=output+str[i]+str1[i];
}
console.log(output)
console.log(output.trim().length)
//For now, make sure the two strings contain the same number of characters!


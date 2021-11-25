arr=[9,10,5,8,12]
//arr.sort((num1,num2)=>num1-num2)
//console.log(arr);
//even

//var evens=arr.filter(num=>num%2==0)
//console.log(evens);

//odd
//var odds=arr.filter(num=>num%2!=0)
//console.log(odds);

//num>5
//var num_gt=arr.filter(num=>num>5)
//console.log(num_gt);
//reduce
//var sum=arr.reduce((n1,n2)=>n1+n2)
//console.log(sum);

//max and min of the arr

var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(max);

var min=arr.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(min);
//arr=[9,10,5,8,12]
//var evens=arr.filter(num=>num%2==0)
//console.log(evens);

//odd
//var odds=arr.filter(num=>num%2!=0)
//console.log(odds);

//num>5
//var num_gt=arr.filter(num=>num>5)
//console.log(num_gt);
var employee=[
    [1000,"ram","developer",25000,1990,2005],
    [1001,"ravi","developer",27000,2000,2003],
    [1002,"raju","ba",26000,1995,2005],
    [1003,"nikil","mrkt",24000,2000,2007]
]
var developers=employee.filter(emp=>emp[2]=="developer" & emp[3]>25000)
console.log(developers)
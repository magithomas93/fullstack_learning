//print cubes
var arr=[1,2,3,4,5,9,7,6]

//var square=arr.map(num=>num**2)
//console.log(square);

//var cubes = arr.map(num=>num**3)
//console.log(cubes);

//if num>5 num+1 num<5 num-1 num=5 num
//var num1=arr.map(num=>num>5?num+1:num<5?num-1:num)
//console.log(num1);

var employee=[
    [1000,"ram","developer",25000,1990,2005],
    [1001,"ravi","developer",27000,2000,2003],
    [1002,"raju","ba",26000,1995,2005],
    [1003,"nikil","mrkt",24000,2000,2007]
]

//var e_name=employee.map(emp=>emp[1])
//console.log(e_name);

//var developer=employee.filter(emp=>emp[2]=="developer")
// console.log(developer);

//var emp_dev_sal=employee.filter(emp=>emp[2=="developer"])

//var exp=employee.map(emp=>[emp[1],(emp[5]-emp[4])])
//console.log(exp);

var e_name=employee.map(emp=>[emp[1],(emp[5]-emp[4])])
console.log(e_name);
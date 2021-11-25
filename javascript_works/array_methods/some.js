var employee=[
    [1000,"ram","developer",25000,1990,2005],
    [1001,"ravi","developer",27000,2000,2003],
    [1002,"raju","ba",26000,1995,2005],
    [1003,"nikil","mrkt",24000,2000,2007]
]

var is_exist=employee.some(emp=>emp[2]=="ba")
console.log(is_exist);

var is_available=employee.some(emp=>emp[3]==50000)
console.log(is_available);
var employee={
    eid:1000,
    ename:"magi",
    company:"infosys",
    salary:10000
};
console.log(employee["ename"])
if("exp" in employee){
    employee.exp+=1
}
else{
    employee.exp=1
}
console.log(employee)
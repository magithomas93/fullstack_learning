var arr=[2,5,4]
var sum=0;
var op=[]
for(let amount of arr){
    sum=sum+amount
}
for(let amount of arr){
    res=sum-amount
    op.push(res);
}
console.log(op);

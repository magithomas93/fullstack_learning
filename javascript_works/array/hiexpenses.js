var expenses=[20000,56000,35000,12000]
hi_expense=0;
for(let amount of expenses){
    if(amount>hi_expense){
        hi_expense=amount
    }
}
console.log(hi_expense);
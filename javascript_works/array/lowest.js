var expenses=[20000,56000,35000,12000]
low_expense=expenses[0];
for(let amount of expenses){
    if(amount<low_expense){
        low_expense=amount
    }
}
console.log(low_expense);
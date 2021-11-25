var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
]

// q1:number of transactions regarding with ac/no 1001
//var aco_details=accounts.find(data=>data.acno==1001).transactions.length
//console.log(aco_details);

// q2: details of account  number 1002
//var account_details=accounts.find(data=>data.acno=1002)
//console.log(account_details)


// q3 :transactions above 500 of all users
//var trans=accounts.map(data=>data.transactions).flat().filter(trans=>trans.amount>500).forEach(t=>console.log(t))

// q4: count of transactions group by method
//var trans_count={}
//accounts.map(data=>data.transactions).flat().
//map(tra=>{
  //tra.method in trans_count?trans_count[tra.method]+=1:trans_count[tra.method]=1
//})
//console.log(trans_count);


// q5:no of transactions whose ac_type = savings
//var sav=accounts.filter(data=>data.ac_type=="savings").length
//console.log(sav);
    
// q6: highest balance
//var high_bal=accounts.flat().map(high_bal=>high_bal.balance).reduce((n1,n2)=>n1>n2?n1:n2)
//console.log(high_bal)


// q7:sort accounts based on balance order by desc 
//var bal =accounts.flat().map(bal=>bal.balance).sort((n1,n2)=>n2-n1).forEach(t=>console.log(t))


// q8:details of savings type account
//var sav=accounts.filter(data=>data.ac_type=="savings").forEach(t=>console.log(t))



// q9 debit transactions of 1002
//var debit=accounts.filter(m=>m.acno=="1002").find(t=>t.transactions)
//console.log(debit);
//spread operator
//var debit_transactions=accounts.find(data=>data.accn0==1002).transactions

//var payment_history=[...debit_transactions,...credit_transactions]

//q10 credit transactions of 1002 
//var credit=accounts.map(data=>data.transactions).flat().filter(data=>data.to=="1002")
//console.log(credit);



// q11 print debit transactions of 1002 amount > 500
//var debit_trans=accounts.find(m=>m.acno=="1002").transactions.filter(t=>t.amount>500)
//console.log(debit_trans);






// q12 total sum of debit transction of 1002 
var debit_trans=accounts.find(m=>m.acno=="1002").transactions.map(t=>t.amount).reduce((n1,n2)=>n1+n2)
console.log(debit_trans);

//var total_sum=accounts.find(m=>m.acno=="1002").transactions
//var amt=0;
//for(amount in total_sum){
  //amt=amt+amount
//}
//console.log(amt);


// q13 highest amount transaction 
//var hi_tran=accounts.map(data=>data.transactions).flat().map(hi_tran=>hi_tran.amount).reduce((n1,n2)=>n1>n2?n1:n2)
//console.log(hi_tran);

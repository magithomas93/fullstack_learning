var stock_details=[
    {item_name:"tomatto",mrp:60,purchase_rate:40,aval_qty:50},
    {item_name:"onion",mrp:50,purchase_rate:30,aval_qty:60},
    {item_name:"brinjal",mrp:40,purchase_rate:25,aval_qty:10},
    {item_name:"carrot",mrp:80,purchase_rate:65,aval_qty:0},
    {item_name:"potato",mrp:65,purchase_rate:45,aval_qty:0},
    {item_name:"chilly",mrp:40,purchase_rate:20,aval_qty:10},

]


// print total number of available items
//var stk_item =stock_details.map(st=>st.item_name).length
//console.log(stk_item);

// print out of stock item details
//var stk_item=stock_details
//console.log(stk_item);

// print costly item detail
//var stk_item=stock_details.map(st=>st.mrp).reduce((n1,n2)=>n1>n2?n1:n2)
//console.log(stk_item);


// print low cost item detail
//var stk_item=stock_details.map(st=>st.mrp).reduce((n1,n2)=>n1<n2?n1:n2)
//console.log(stk_item);

// sort products bsed on avl_qty
//var stk_item=stock_details.map(st=>st.aval_qty).sort((a1,a2)=>a1-a2)
//console.log(stk_item);


 // is ther any item below rs 25
 var is_exit=stock_details.filter(t=>t.mrp).some(m=>mrp<=25)
 console.log(is_exit);

// print details of potatto
//var details_potato=stock_details.filter(st=>st.item_name=="potato")
//console.log(details_potato);
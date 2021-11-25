var products=[
    [1000,"wheatpowder",45,15,0],
    [1001,"ricepowder",30,10,0],
    [1002,"goodday",40,50,0],
    [1003,"oreo",40,0,0],
    [1004,"fiftyfifty",20,20,5],
    [1005,"darkfantasy",50,0,0],

]

// print number of items in this shop
var no_item=products.find(pdt=>pdt.length)
console.log(no_item);
// print names of items available inthis shop
//var p_name=products.map(pdt=>pdt[1])
//console.log(p_name)


// print names of out of stock product
//var out_stk=products.filter(pdt=>pdt[4]==0)
//console.log(out_stk)

// print names of product in 30 -50 range
//var p_range=products.filter(pdt=>pdt[2]>30 &pdt[2]<50)
//console.log(p_range)

//print low cost product
//var low=products.reduce((pdt1,pdt2)=>pdt1[2]<pdt2[2]?pdt1:pdt2)
//console.log(low)

//print costly product
//var high=products.reduce((pdt1,pdt2)=>pdt1[2]>pdt2[2]?pdt1:pdt2)
//console.log(high)

//sort products based on aval_qty
//products.sort((pdt1,pdt2)=>pdt1[3]-pdt2[3])
//console.log(products)
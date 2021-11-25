var arr=[2,3,4,5]
var element=6
var low=0,upp=arr.length-1
while(low<upp){
    let cur_total=arr[low]+arr[upp]
    if(cur_total==element){
        console.log(`pair ${arr[low]} ${arr[upp]}`);
        low++
    }
    else if(cur_total>element){
        upp--;
    }
    else if(cur_total<element){
        low++;
    }
    
}

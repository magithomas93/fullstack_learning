var pattern="ABABBCDE"
var recu={}
//var out=[]
for(let char of pattern){
    if(char not in recu){
       console.log("first recursive character is",char)
        break
    }
    else{
       recu[char]=1
    }

}
//Array.from(pattern).map(char=>char in recu?out.push(char):recu[char]=1)
//console.log(out)
 let s = "{}()[";

 let isValid = function(s){
    let brckts = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let heap = [];
     for(let char of s){
         if(brckts[char]){
             heap.push(brckts[char])
         }else{
             if(heap.pop() !== char) return false
         }
     }
    return (!heap.length)
 }

 console.log(isValid(s))
function fibs(num) {
 let fibArray = [0,1]
   if (num <= 1) return fibArray.slice(0, num)
    for (let i = 2; i < num; i++) {
        const nextFib = fibArray[i - 1] + fibArray[i - 2]
        fibArray.push(nextFib) }
        return fibArray 
     } 

     function fibsRec(num) {
        if (num === 0) return [];
        if (num === 1) return [0];
        if (num === 2) return [0, 1];
        
        let seq = fibsRec(num-1);
        seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
        return seq;
     } console.log(fibsRec(8))
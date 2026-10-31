'use strict'
/*const sequence = (...args)=>{
    let result = args[args.length-1];
    for(let i = args.length-2;i>=0;--i){
        result = (result)=>{return args[i];};
    }
    return result;
}*/
const sequence = (outfn) => {
    return ((infn) =>{
        if(typeof(infn)==="number"){return outfn(infn)}
        else{return sequence((x)=>outfn(infn(x)))}
    })
    }
console.log(sequence(x => x + 7)
   (x => x * 2)(5));
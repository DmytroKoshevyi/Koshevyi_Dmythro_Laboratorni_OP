'use strict'

const for_loop = (...args)=>{
    let sum=0;
    for(let i=0;i<args.length;++i){
        sum+=args[i];
    }
    return sum;
}
console.log(for_loop(2,3,8));

const for_of_loop = (...args)=>{
    let sum=0;
    for(let i of args){
        sum+=i;
    }
    return sum;
}
console.log(for_of_loop(13,0,5.6));

const while_loop = (...args)=>{
    let sum=0,i=0;
    while(i<args.length){
        sum+=args[i];
        i++;
    }
    return sum;
}
console.log(while_loop(8,3.5));

const do_while_loop = (...args)=>{
    let sum=0,i=0;
    if(args.length==0){return "do while не можливо коректно виконати без аргументів";}
    do{
        sum+=args[i];
        i++;
    }while(i<args.length)
    return sum;
}
console.log(do_while_loop(2,3,-1));
console.log(do_while_loop());

const reduce_loop = (...args)=>{
    return args.reduce((sum,value)=>sum+=value);
}
console.log(reduce_loop(2,3,12,2,4));
function sleep(ms){
    console.log("step 2");
    return new Promise(resolve => setTimeout(resolve,ms));
};


async function makeGreeting(msg){
    console.log("step 1");
    await sleep(1000);
    return new Promise((resolve,reject)=>{
        console.log("returing promise");
        console.log("returing value");
        resolve(msg)
    })
    
}


makeGreeting("fuck you").then(res=>console.log(res))
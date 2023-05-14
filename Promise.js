function addTwo(num){
    const res = new Promise((resolve,reject)=>{
        if(num < 0){
            reject("Number is less than Zero..")
        }
        else{
            resolve(`${num} time fuck you`)
        }
    })
    return res;
}


addTwo(5).then(res => console.log(res)).catch(e => console.log(e));
addTwo(-5).then(res => console.log(res)).catch(e => console.log(e));
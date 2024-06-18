function byArray(arr){
    if(arr.length <=0){
        return arr;
    }
    return byArray(arr.splice(1)).concat(arr[0]);
}

const arr = ['m','a','n','g','o'];
const result = byArray(arr);

console.log(result);
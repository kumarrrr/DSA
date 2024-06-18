function recursion(name){
    if(name.length <=1){
        return name;
    }
   return recursion(name.slice(1)) + name.charAt(0);
}

const p1 = 'hello';
const x = recursion(p1);
console.log(x);




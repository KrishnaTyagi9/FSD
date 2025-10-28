var a=20;
let b="abc";
const pi=3.14;

console.log("Global:",a);
console.log("Global:",b);
console.log("Global:",pi);

function f(){
    console.log("Local:",a);
    console.log("Local:",b);
    console.log("Local:",pi);
}
f();
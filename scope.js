// function fun(){
//     console.log("hello");
// }

// function high(m){
//     console.log("hiii")
//     m();
// }


// k=high(fun)


// let num=[1,2,3,4,5]


// let k=n.map(function(num){
//     return num*num;
// });
// console.log(k)


// k=num.filter(function(n){
//     return n%2==0
// })

// console.log(k)


// k=num.reduce(function(total,n){
//     return total+n
// });
// console.log(k)

// let num=[1,2,3,4,5]

// try{
//     if (num[10]==undefined){
//         throw new error
//     }
//     console.log(num[10])
// }
// catch (error){
//     console.log("not found")
// }



var a=100;
let b=200;
const c=300;
{
    var a=10;
    let b=20;
    const c=30
    console.log(a)
    console.log(b)
    console.log(c)
}
console.log(a)
console.log(b)
console.log(c)
// const arr=[6,7,9]
// console.log(arr)

//TYPEOF OPERATOR
// var a=10;
// var b='ghjk'
// c=a*b
// console.log(c)
// console.log(typeof(c))
// console.log(typeof(a))
// console.log(typeof(b))

//OPERATOR IN JAVASCRIPT
//   arithmatic operetor +,-,*,/
//   compartor ==,===,!=,>,<,>=,<=
//   logical &&|| !
//   ternary :?
// function re(a,b,c,...d){
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
// }
// re(1,2,3,4,5,6,7,8,9,0)

//FUNCTION CURRING
//simple:
// function sum(a,b,c){
//     console.log( a*b*c)

// }
// sum(1,2,3)

//by function curring:
// function sum1(a){
//     return function (b){
//         return function(c){
//         return a+b+c
//         }
//     }
// }
// console.log(sum1(1)(2)(3))

//FIND PALINDROM
//  function findpl(str){
//      var len=str.length
//      for(let i=0;i<len/2;i++)
//      {
//          if(str[i]==str[len-1-i]){
//              console.log(' yes ')
//          }
//          else{
//              console.log('no')
//          }
         
//      }
//  }

// findpl('madam')

//CALL APPLY AND BIND
// call apply and bind are use to borrowing the function 
// the working is same just the difference is call take parameter
// sepersted by coma and apply take it as in array formate.
// and bind is return the function

// var obj={
//     name:'Meghana',
//    contry:'india',
    
// }
// function data(f1){
//     console.log('hi my name is '+this.name +'my contry is '+this.contry+'i am leaning '+f1)  
//   }
// data.call(obj,'FULL STACK COURSE')
// data.apply(obj,['PYTHON'])
// var b=data.bind(obj,'C++ ')
// b()

//SLICE
// var arr=[2,3,4]
// var data=arr.slice(2)
// console.log(data)
// console.log('original:'+arr)

// //SPLICE
// var arr1=[2,3,4]
// console.log(arr1.splice(0,1,10))
// console.log('original:'+arr1)


//Map
// const arr=[2,3,4,5]
// const data=arr.map((e)=>e*2)
// console.log(data)
// console.log(arr)


//filter

// const arr=[2,3,4,5]
// const data=arr.filter((e)=>e>4)
// console.log(data)
// console.log(arr)

// const arr1=[2,3,4,5]
// const data1=arr.find((e)=>e>1)
// console.log(data)
// console.log(arr)






function data() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await data();
    console.log(result);
  }
  
  asyncCall();
  


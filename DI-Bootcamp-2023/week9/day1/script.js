// write a function testNum that takes a number
// as an input and
// returns a Promise that tests if the value
// is less than 10
// value < 10 - resolve with value
// 'number is less than 10, success!!!'
// reject with value
// 'number is greater or equal to 10, error!!!'
// call the function and get results

//   const testNum= (number)=>{

//  return new Promise((resolve, reject)=>{
//   if(number<10){
//     resolve('number is less than 10')
//   }else{
//     reject('number is greater or equal to 10')
//   }
//  })
// }
//  testNum(11)
//  .then(result=>{
//     console.log(result)
//  }
// .catch(e => {
// console.log(e)
// })


///----with ziv
// const testNum = (num) => {
//     return new Promise((res,rej)=>{
//       if(num < 10){
//         res(num +' is less than 10, success!!!')
//       }
//       else{
//         rej(num + ' is greater or equal to 10, error!!!')
//       }
//     })
//   }
//   testNum(15)
//   .then(res => {
//     console.log(res);
//   })
//   .catch(e => {
//     console.log(e);
//   })



// const getX=()=>{
//     return new Promise((resolve,reject)=>
//         setTimeout(()=>{
//             resolve (2)
//         }, 2000)
    
//     )
// }

// const getY=()=>{
//     return 3
// }
// const getXY=()=>{
//     let X= getX()

//     X.then((X)=>{
        
//         console.log(X+Y)
        
//     })
//     let Y= getY()
    
// }

// getXY();


// let xhr= new XMLHttpRequest();
// let URL='https://zivuch.github.io/yogaapi.json';
// xhr.open("GET",URL,true)
// xhr.responseType='json'
// xhr.send()
// xhr.onload=function(){
//     if(xhr.status!=200){
//        console.log(`${xhr.status}`)
//     _
    
//       } 
    
//         else{
//             let data = xhr.response;
//             let firstLine = data[0]; 
        
//             let id = firstLine.id;
//             let sanskritName = firstLine.sanskrit_name;
//             let englishName = firstLine.english_name;
//             let img=firstLine.img_url
        
//             console.log(`ID: ${id}`);
//             console.log(`Sanskrit Name: ${sanskritName}`);
//             console.log(`English Name: ${englishName}`);
//             console.log(`img-url: ${img}`)
        
// }
// }



fetch('https://zivuch.github.io/yogaapi.json')
.then((res=>{
    
}))

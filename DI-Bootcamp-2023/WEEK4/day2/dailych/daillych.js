


// function makeAFrame(){
//     console.log(`* * * * * * * * * `)
//     let words= prompt('write me some numbers here');
//    let splitit=words.split(" ");
//   for(i=0; i<splitit.length; i++){

//      console.log(` *  ${splitit[i]}  * `) 
//   }
//   console.log(`* * * * * * * * *`);
// }
// makeAFrame();




function makeAFrame() {
    console.log(`* * * * * * * * * `);
    let words = prompt('write me some words here');
    let splitit = words.split(" ");
    for (let i = 0; i < splitit.length; i++) {
      console.log(`*  ${splitit[i]}${' '.repeat(14 - splitit[i].length)}*`);
    }
    console.log(`* * * * * * * * * `);
  }
  
  makeAFrame();
  

  




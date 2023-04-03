
let arr= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
for( let i=0 ; i<arr.length;i++){
    if(i%2==0){
        console.log(`${i} is even`);
    }else if(i%2!=0){
        console.log(`${i} is odd`)
    }
};

let n = 0;
while (n < 3) {
  n++;
  console.log(n)
}




  // if the item is not a string, pass
  // if the item is a string, check if its first letter is in uppercase.
  //  If not, change it to uppercase and then display the name.
  let names = ["john", "sarah", 23, "Rudolf", 34];
  for(i in names){
    if (typeof names[i]!=='string'){
       continue;
    } 
    console.log(names[i]);
    if(names[i][0]!==names[i][0].toUpperCase()){
      names[i]=names[i][0].toUpperCase() + names[i].slice(1)
    }console.log(names[i])
  }

// for(i in names){
//   if (typeof names[i]!=='string'){
//      continue;
//   }
//   console.log(names[i]);
//   if(names[i][0]!==names[i][0].toUpperCase()){
//     names[i]=names[i][0].toUpperCase() + names[i].slice(1)
//   }
//   console.log(names[i]);
// }



// let names = ["john", "sarah", 23, "Rudolf", 34];
let newNames = [];

for (let name of names) {
  if (typeof name !== "string") {
    continue;
  }

  if (name.charAt(0) !== name.charAt(0).toUpperCase()) {
    name = name.charAt(0).toUpperCase() + name.slice(1);
  }

  newNames.push(name);
}

console.log(newNames);







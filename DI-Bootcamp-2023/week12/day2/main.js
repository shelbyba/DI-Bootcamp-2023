//ex1

const fs= require('fs/promises');
async function handleFiles(){

await fs.readFile("./hello.txt", {encoding:'utf8'} )
.then(res=>console.log(res))
.catch(console.error)

//ex2
await fs.writeFile("goodbye.txt","goodbye everyone" ) 
await fs.appendFile("goodbye.txt","see you soon" )
await fs.unlink("goodby.txt")
}
handleFiles()


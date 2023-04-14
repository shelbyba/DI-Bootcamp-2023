let shoppingList=[]

let createForm=document.createElement('form');
let createInput=document.createElement('input');
createInput.type = 'text';
createInput.name = 'item';
let createButton=document.createElement('button')
createButton.textContent = 'Add Item';
createButton.value='AddItem'



createForm.appendChild(createInput)
createForm.appendChild(createButton)

let getDIV=document.getElementById('root')
getDIV.appendChild(createForm)


createButton.addEventListener('click', addItem)
function addItem(event){
event.preventDefault()
 let items= createInput.value
 shoppingList.push(items)
 console.log(shoppingList)
}


let createClearButton=document.createElement('button')
createClearButton.textContent='clear all'
createForm.appendChild(createClearButton)
createClearButton.addEventListener('click', ClearAll);
function ClearAll(){
 
    shoppingList=[];
    console.log(shoppingList)

}
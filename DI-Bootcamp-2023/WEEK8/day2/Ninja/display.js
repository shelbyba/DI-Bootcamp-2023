getform=document.getElementById('form').addEventListener('submit', function(e){

    e.preventDefault();
    getName=document.getElementById('name').value,
    getLastnamme=document.getElementById('last-name').value
    let message = `Name: ${getName}<br>Last Name: ${getLastnamme}`;
   document.body.innerHTML=message

    
})



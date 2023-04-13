

/*Using Javascript:
Add a “light blue” background color and some padding to the <div>.
Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
Change the font size of the whole body.

Bonus: If the background color of the div is “light blue”, 
alert “Hello x and y” (x and y are the users in the div).*/


 let getDiv=document.querySelector('div');
 console.log(getDiv);
 getDiv.style.backgroundColor='lightblue';
 getDiv.style.padding='10px';

 let getJohn= document.querySelector('ul>li:nth-child(1)');
 console.log(getJohn)
 getJohn.style.display='none'

 let getPete= document.querySelector('ul>li:nth-child(2)');
 getPete.style.border='black solid 5px'


 if( getDiv.style.backgroundColor=='lightblue'){
    let getAttname=document.querySelectorAll('li')
    console.log(getAttname)
    for(i=0; i<getAttname.length;i++){
        let name=getAttname[i].textContent
        alert(`hello ${name}`)
    }
 };

 

 

 
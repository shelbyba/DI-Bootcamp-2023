/*Using a DOM property, retrieve the h1 and console.log it.

Using DOM methods, remove the last paragraph in the <article> tag.

Add a event listener which will change the background color
 of the h2 to red, when it’s clicked on.

Add an event listener which will hide the h3 when it’s 
clicked on (use the display:none property).

Add a <button> to the HTML file, that when clicked on,
 should make the text of all the paragraphs, bold.

BONUS : When you hover on the h1, set the font size to a
 random pixel size between 0 to 100.(Check out this documentation)

BONUS : When you hover on the 2nd paragraph, it should fade out
 (Check out “fade css animation” on Google) */

 let getH1=document.querySelector('h1');
 let textofH1=getH1.textContent
 console.log(getH1 , textofH1)

 getH1.addEventListener('mouseover', H1Respond);
 function H1Respond(){
     getH1.style.fontSize=Math.random()*100 +'px';
    
 }


 let lastParagraph=document.querySelector('article')
 lastParagraph.lastElementChild.remove()
 console.log(lastParagraph)


 let getH2=document.querySelector('h2')
 getH2.addEventListener('click', h2Respond);
 function h2Respond(){
    getH2.style.backgroundColor='red'
 };


 let getH3=document.querySelector('h3');
 getH3.addEventListener('click', h3Respond);
 function h3Respond(){
    getH3.style.display='none'
 }


 let createButton= document.createElement('button')
 createButton.classList.add('bold')
 createButton.innerText='bold'
 createButton.addEventListener('click', ButtonRespond);
 let getParagraph=document.querySelectorAll('p')
 function ButtonRespond(){
  for(i=0; i<getParagraph.length;i++){
getParagraph[i].style.fontWeight='bold'
  }
 }
 let getArticle=document.querySelector('article')
 getArticle.appendChild(createButton);



 let getParagraph2=getArticle.children[4]
 
 getParagraph2.addEventListener('mouseover', P2Respond);
 function P2Respond(){
   getParagraph2.style.opacity='0'
   getParagraph2.style.transition='opacity 1s'
 }




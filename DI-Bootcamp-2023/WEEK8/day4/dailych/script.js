
let getInput=document.getElementById('search');
let getForm=document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault()
   let serchWord=getInput.value
   getGif(serchWord)
});

 function getGif(word){
  let URL=
  `https://api.giphy.com/v1/gifs/search?q=${word}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1`
    let xhr=new XMLHttpRequest();
    xhr.open("GET",URL);
    xhr.send();
   xhr.addEventListener('load',logRequest);
    
}
function  logRequest(e){
    let response=JSON.parse(e.target.response)
    let firtResult=response.data[0]
    let imageUrl=firtResult.images.fixed_width.url;
    let imgGif=document.createElement('img')
    imgGif.src=imageUrl

    let btn=document.createElement('button')
    btn.textContent='Delete'
    btn.addEventListener('click',function(){
        imgGif.remove()
        btn.remove()
    });

    // console.log(imageUrl)
    // console.log(firtResult)
    // console.log(response)

    let gifContainer = document.getElementById('gifContainer');
    gifContainer.appendChild(imgGif);
    gifContainer.appendChild(btn);
  }

  let deleteAllButton = document.getElementById('deleteAllButton');
deleteAllButton.addEventListener('click', function() {
  let gifContainer = document.getElementById('gifContainer');
  gifContainer.innerHTML = ''; 
});













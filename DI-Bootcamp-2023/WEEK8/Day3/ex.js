
// Recreate the last example by using another URL :

// https://api.chucknorris.io/jokes/random?category={category}

// It retrieves a random chuck norris joke from a given category.

// Look at the API Chuck Norris Documentation : https://api.chucknorris.io/

let xhr=new XMLHttpRequest();
let category='dev'
xhr.open('GET', 'https://api.chucknorris.io/jokes/random?category={category}', true)
xhr.send();
xhr.responseType='json'
xhr.onload=function(){
  if(xhr.status!=200){
    console.log(`error ${xhr.status}: ${xhr.statusText}`)
  }
  else{
    console.log(`Done ${xhr.response.value}`)
  }
}
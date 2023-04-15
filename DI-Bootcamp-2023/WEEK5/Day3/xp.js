    // /*
    // Create a new HTML file

    // Create a banner saying "The sales end in 10min ! "

    //  . Style the banner and make it visible to the user after 5 sec. */

    //  let getP=document.querySelector('p')
    //  let contecntP=getP.textContent
    //  function ShowAlert(){
    
    //     alert(contecntP)
    //  }

    //  setTimeout(ShowAlert,5000);


    /*
    Use the same code as before but create a countdown in the banner.

    ... "The sales end in 10sec ! "

    ... "The sales end in 9sec ! "

    etc ... until 0 */


    setTimeout(function() {
        document.getElementById('banner').style.display = 'block';
    }, 5000);
        



    let timer = setInterval(myTimer, 1000);

    function myTimer() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    // date.toLocaleTimeString() returns a string with 
    //a language sensitive representation of the time portion of this date
    document.getElementById("demo").innerHTML = time;
    }

    function myStopFunction() {
    clearInterval(timer);
    }
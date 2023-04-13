//Copy the code above and write some Javascript code to color all diagonal table cells in red.


/*i want to create a loop where inside it i want to make a condition that says
if this is the first tr color first td, if its second tr color second td and so on.. */

let table = document.querySelector('table');
let getTr = table.querySelectorAll('tr');

for (let i = 0; i < getTr.length; i++) {
  let getTd= getTr[i].querySelectorAll('td');

  console.log(getTd)
  
  for (let j = 0; j < getTd.length; j++) {
    if (i === j) { // check if it's a diagonal cell
      getTd[j].style.color = 'red'
      getTd[j].style.backgroundColor='blue';
    }
  }
};


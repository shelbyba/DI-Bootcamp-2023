

// Create a function called createCalendar(year, month)
// The function should create a calendar for the given year/month.
// The calendar should be a table, where a week is <tr>, and a day is <td>.
//  The table top should be <th> with weekday names: the first day should be Monday, and so on until Sunday.
// For instance, createCalendar(2012, 9) should generate the following calendar:

// Hint: There shouldn’t be any code in the HTML file.
//  The table should be created from the JS file using the DOM.


let creatTable= document.createElement("table")
console.log(creatTable)

creatTable.innerHTML=`
<table>
  <tr>
    <th>Mo</th>
    <th>TU</th>
    <th>WE</th>
    <th>TH</th>
    <th>FR</th>
    <th>SA</th>
    <th>SU</th>
  </tr>
  <tr>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>1</td>
    <td>2</td>
    
  </tr>
  <tr>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>7</td>
    <td>8</td>
    <td>9</td>
    
  </tr>
  <tr>
  <td>10</td>
  <td>11</td>
  <td>12</td>
  <td>13</td>
  <td>14</td>
  <td>15</td>
  <td>16</td>
  
</tr>
<tr>
<td>17</td>
<td>18</td>
<td>19</td>
<td>20</td>
<td>21</td>
<td>22</td>
<td>23</td>

</tr>
<tr>
<td>24</td>
<td>25</td>
<td>26</td>
<td>27</td>
<td>28</td>
<td>29</td>
<td>30</td>

</tr>
</table>
`

document.body.appendChild(creatTable);


function createCalendar(year, month) {
    
    const table = document.createElement('table');
  
   
    const headerRow = document.createElement('tr');
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let i = 0; i < daysOfWeek.length; i++) {
      const th = document.createElement('th');
      th.textContent = daysOfWeek[i];
      headerRow.appendChild(th);
    }
    table.appendChild(headerRow);
  
  
    const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  
    const firstDayOfMonth = new Date(year, month, 1).getDay();
  
   
    let date = 1;
    for (let i = 0; i < 6; i++) {
      const weekRow = document.createElement('tr');
  
    
      for (let j = 0; j < 7; j++) {
        const td = document.createElement('td');
        if (i === 0 && j < firstDayOfMonth) {
          td.textContent = '';
        } else if (date > daysInMonth) {
         
          td.textContent = '';
        } else {
      
          td.textContent = date;
          date++;
        }
        weekRow.appendChild(td);
      }
  
   
      table.appendChild(weekRow);
    }
  
  
    document.body.appendChild(table);
  }
  
 
  createCalendar(2023,10);
  

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });
// // expected output: Array [3, 42, "foo"]


// let Promises= [promise1,promise2,promise3]
// Promise.all(promises)
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))



/*

2nd Challenge
Instructions
You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.

In the HTML file, create a form with 4 inputs:
the latitude and longitude of the first city
the latitude and longitude of the second city

Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
Hint : Use Promise.all() */



  // Define the function to fetch the sunrise time for a given location
  const fetchSunriseTime = async (latitude, longitude) => {
    const apiUrl = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.results.sunrise;
  };

  // Handle form submission
  const form = document.getElementById('cityForm');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Retrieve the input values
    const city1Lat = document.getElementById('city1Lat').value;
    const city1Long = document.getElementById('city1Long').value;
    const city2Lat = document.getElementById('city2Lat').value;
    const city2Long = document.getElementById('city2Long').value;

    // Fetch sunrise times for both cities concurrently using Promise.all()
    const sunriseTimes = await Promise.all([
      fetchSunriseTime(city1Lat, city1Long),
      fetchSunriseTime(city2Lat, city2Long)
    ]);

    // Log the sunrise times
    console.log('City 1 Sunrise:', sunriseTimes[0]);
    console.log('City 2 Sunrise:', sunriseTimes[1]);
  });


import React from 'react';
import UserFavoriteAnimals from './fav';
import Exercise3 from './Exercise3';
function App() {
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
  };

  return (
    <div className="App">
      <h3>{user.firstName} {user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
      <Exercise3/>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react';

var data = [{
  id: 1,
  name: "Селедка с пюре и салатом из морской капусты",
  img: "1.jpeg",
  ingredients: ["картофель", "молоко", "селедка", "морская капуста"]
},
{
  id: 2,
  name: "Овощной салат и бутерброды с рыбой",
  img: "2.jpeg",
  ingredients: ["перец", "помидор", "огурец", "творожный сыр", "пекинская капуста", "французская горчица", "красная рыба", "хлеб"]
}];


function App() {

  const [meal, setMeal] = useState(null);

  function generateRandomMeal() {
    var meal = data[Math.floor(Math.random() * data.length)];
    setMeal(meal);
    console.log(meal);
  }

  return (
    <div className="container">
      <div className="header">
        FOOTRANDOM
      </div>
      {
        meal ? <ShowMealCard meal={meal} 
                             generateRandomMeal={generateRandomMeal} /> 
             : <MainButton generateRandomMeal={generateRandomMeal} />
      }

    </div>
  );
}

export default App;

function MainButton(props) {
  console.log(props)
  return (
    <button onClick={props.generateRandomMeal}>
      Generate random meal
    </button>
  )
}

function ShowMealCard({ meal , generateRandomMeal}) {
  console.log(meal);
  const imgLink = './img/'.concat(meal.img);
  console.log(imgLink);
  return (
    <div className="mealCard">
      <div className='mealCartContainer'>
      <div className='left'>
        <div className='imgStyle'>
          <img src={require(`${imgLink}`)} width= "100%"/>
        </div>
      </div>
      <div className='right'>
        <div className='mealName'>{meal.name}</div>
        <ul>
          <div className='mealIngredients'>
              {
                meal.ingredients.map((ingredient) =>
                <li>{ingredient}</li>
                )
              }
          </div>
        </ul>
        <MainButton generateRandomMeal={generateRandomMeal}/>        
      </div>
      </div>
      
    </div>
  )
}

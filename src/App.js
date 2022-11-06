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
},
{
  id: 3,
  name: "Печень с рисом",
  img: "3.jpeg",
  ingredients: ["печень куриная", "кетчуп", "сметана", "лук", "морковь", "рис", "салат из морской капусты"]
},
{
  id: 4,
  name: "Колбаски с рисом и овощным салатом",
  img: "4.jpeg",
  ingredients: ["колбаски", "рис", "капуста", "помидор", "огурец", "перец", "французская горчица", "творожный сыр"]
},
{
  id: 5,
  name: "Бутерброды с красной рыбой и авокадо",
  img: "5.jpeg",
  ingredients: ["слосоленая рыба", "хлеб", "авокадо", "французская горчица"]
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
        FOODRANDOM
      </div>
      {
        meal ? <ShowMealCard meal={meal} 
                             generateRandomMeal={generateRandomMeal} /> 
             : <StartScreen generateRandomMeal={generateRandomMeal} />
      }

    </div>
  );
}

export default App;

function StartScreen({generateRandomMeal}) {
  return (
    <div class="buttonContainer">
      <div className="buttonBorder">
        <MainButton inversed={true} generateRandomMeal={generateRandomMeal}/>
      </div>
    </div>
  )
}

function MainButton({inversed, generateRandomMeal}) {
  return (
    <button className={"generateButton " + (inversed ? "buttonInversed" : null)} onClick={generateRandomMeal}>
      Generate random <br/>meal
    </button>
  )
}

function ShowMealCard({ meal , generateRandomMeal}) {
  console.log(meal);
  const imgLink = './img/'.concat(meal.img);
  console.log(imgLink);
  return (
    <div className="mealCard">
      <div className='left'>
          <img className='imgStyle' src={require(`${imgLink}`)} width= "100%"/>
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
        <div className="bottom">
          <MainButton generateRandomMeal={generateRandomMeal}/>
        </div>
      </div>      
    </div>
  )
}

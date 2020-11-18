import React from "react";
import PropTypes from "prop-types";

function Food({name,picture, rating}){
  return(
  <div>
   <h2>I like {name}</h2>
   <h4>{rating}/5.0</h4>
   <img src={picture} alt={name}/>
  
  </div>
  );
}

Food.propTypes={
 name:PropTypes.string.isRequired,
 picture:PropTypes.string.isRequired,
 rating:PropTypes.number.isRequired
};

const foodILIKE =[
  {
  id: 1,
  name: "디저트",
  image:
  "http://www.seriouseats.com/images/2015/09/20150919-food-styling-9.jpg",
  rating: 5.5
},
{
  id: 2,
  name: "감자칩",
  image:"https://wallup.net/wp-content/uploads/2017/03/29/490310-Fries-tomatoes-food.jpg",
  rating: 4.7
},
{ 
  id: 3,
  name:"햄버거",
  image:"https://wallsdesk.com/wp-content/uploads/2017/01/Fast-Food-for-desktop-background.jpg",
  rating:3.3
}


];



function App() {
  return (
  <div>
    {foodILIKE.map(dish => (
      <Food key={dish.id}
       name={dish.name}
       picture={dish.image} 
       rating={dish.rating} 
       />
    )) }
    </div>
  );
  }
export default App;

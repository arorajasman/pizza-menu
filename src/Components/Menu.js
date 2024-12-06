import Pizza from "./Pizza";
import "./../App.css";
import { pizzaData } from "../data/data.js";
import { Fragment } from "react";

/**
 * Menu Component for the Project
 */
const Menu = () => {
  // property below is to get the list having details of pizza
  const pizzaList = pizzaData;

  return (
    // using the className prop to style the main component below using the
    // menu css class
    <main className="menu">
      <h2>Our Menu</h2>

      {/** The code below is to render the pizzaList only of the
        pizzaList is not empty */}
      {
        /** using the className prop to add a css class to style the ul 
        component below */
        pizzaList.length > 0 ? (
          <Fragment>
            <p>
              Authentic Italian cuisine. {pizzaData.length} creative dishes to
              choose from. All from our stone oven, all organic, all delicious.
            </p>
            <ul className="pizzas">
              {/** using the Pizza Component to show the Pizza Details 
      
              using the jsx and map() method to map over the list of pizzas
              and returning the Pizza Component and passing the
              pizza details as props to the Pizza Component to show the UI with 
              the pizza details

              passing the id from the pizza as value to the key to uniquely identify
              the pizza component
            */}
              {pizzaList.map((pizza) => (
                <Pizza
                  key={pizza.id}
                  name={pizza.name}
                  ingredients={pizza.ingredients}
                  imageUrl={pizza.photoName}
                  price={pizza.price}
                  soldOut={pizza.soldOut}
                />
              ))}
            </ul>
          </Fragment>
        ) : (
          <p>We're still working on our menu. Please comeback later :)</p>
        )
      }
    </main>
  );
};

export default Menu;

import "./../App.css";

/**
 * Pizza Component to show the details of the Pizza
 *
 * Component takes the name,ingredients, imageUrl, imageName of the pizza
 * as input to show the details of the pizza to the user
 */
const Pizza = ({ name, ingredients, imageUrl, price, soldOut }) => {
  return (
    // using the className prop to pass the css class to style the
    // div component below
    //
    // The code below is to add conditional css to style the div tag
    // below based on the sold out condition
    <div className={`pizza ${soldOut ? "sold-out" : ""}`}>
      {/** Using the img tag and passing the imageUrl as input to src
        to show the image of the pizza */}
      <img src={imageUrl} alt={name} />
      <div>
        {/** The code below is to get the name of the pizza from the name prop */}
        <h3>{name}</h3>
        {/** The code below is to get the ingredients of the pizza from the 
        ingredients prop and show it in the UI */}
        <p>{ingredients}</p>
        {/** The code below is to get the price of the pizza from the price prop
          and show it in the UI */}
        <span>{soldOut ? "SOLD OUT" : parseFloat(price)}</span>
      </div>
    </div>
  );
};

export default Pizza;

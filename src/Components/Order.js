/**
 * Component to show the order button
 *
 * component takes closeHour as input to display the time till the resturant
 * is open
 */
const Order = ({ closeHour, openHour }) => {
  // using the className property and passing the css class as input
  // to style the div component
  return (
    <div className="order">
      <p>
        We are open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      {/** button component below is to create a button to let the user
        order the pizza

        using the className prop to add the css class to style the 
        button component below
        */}
      <button className="btn">Order</button>
    </div>
  );
};

export default Order;

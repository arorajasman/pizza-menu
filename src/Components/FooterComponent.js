import "./../App.css";
import Order from "./Order";

/**
 * Footer Component for the Project
 */
const FooterComponent = () => {
  // using the getHours() method from the Date instance to get the current hour
  const hour = new Date().getHours();

  // property to define the hours when the resturant opens and closes
  const openHour = 12; // equivalent to 12 pm
  const closeHour = 22; // equivalent to 10 pm

  // property to check if the resturant is open
  const isRestaurantOpen = hour >= openHour && hour <= closeHour;

  // the code below is to check that if the value of isRestaurantOpen
  // is false then return the jsx from the code snippet below
  if (!isRestaurantOpen) {
    return (
      <footer className="footer">
        <div className="order">
          <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00.
          </p>
        </div>
      </footer>
    );
  }

  return (
    //  The code below is to display the current time in the Footer Component
    // using jsx
    //
    // using the className prop to style the footer component below based
    // on the styles defined in the css file
    <footer className="footer">
      {/** using the && operator to show the current time and we are open
        message only if the isResturantOpen is true 
         */}
      {isRestaurantOpen && <Order closeHour={closeHour} openHour={openHour} />}
    </footer>
  );
};

export default FooterComponent;

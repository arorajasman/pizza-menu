import "./../App.css";

/**
 * Header Component for the project
 */
const HeaderComponent = () => {
  return (
    // using the className prop and passing the css class to style the header
    // component below
    <header className="header">
      {/* The code below is to use the style prop to style the h1 component */}
      <h1
      /* style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }} */
      >
        Fast React Pizza Company
      </h1>
    </header>
  );
};

export default HeaderComponent;

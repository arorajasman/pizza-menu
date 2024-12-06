import "./App.css";
import FooterComponent from "./Components/FooterComponent";
import HeaderComponent from "./Components/HeaderComponent";
import Menu from "./Components/Menu";

// Root Component for the project
function App() {
  return (
    // using the className property to add css class to style to the
    // div component below
    <div className="container">
      <HeaderComponent />
      <Menu />
      <FooterComponent />
    </div>
  );
}

export default App;

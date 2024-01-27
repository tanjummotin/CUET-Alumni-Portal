import "./App.css";
import { EventCardUi } from "./Components/EventCardUi";
import Home from "./Components/Home";
import Events from "./Components/Events";
import NavBar2 from "./Components/NavBar2";
import NavBar1 from "./Components/NavBar1";
import { Grid } from "@mui/material";
import CareereCardUi from "./Components/CareerCardUi";

import CardsData from "./Components/AlumniCardData";
import EventCardsData from "./Components/EventCardData";
import Login from "./Components/Login";
import Register from "./Components/register"
import Add_Event_Form from "./Components/Add_Event_Form"
function App() {
  // let component;
  // switch (window.location.pathname) {
  //   case "/":
  //     component = <App />;
  //     break;
  //   case "/#HOME":
  //     component = <Home />;
  //     break;
  //   case "/##AlumniDirectory":
  //     component = <AlumniDirectory />;
  //     break;
  //   // case "/#ABOUT":
  //   //   component = <About />;
  //   //   break;
  //   case "/#EVENTS":
  //     component = <EventCardUi />;
  //     break;
  //   case "/#CAREERS":
  //     component = <CareereCardUi />;
  //     break;
  // }
  return (
    <>                                                        
      {/* <Home /> */}
      {/* <Events /> */}
      <NavBar1></NavBar1>
      <NavBar2></NavBar2>
      {/* <EventCardUi /> */}
      {/* <CareereCardUi /> */}
      <CardsData />
      {/* {EventCardsData} */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* < Add_Event_Form /> */}
    </>
  );
}

export default App;

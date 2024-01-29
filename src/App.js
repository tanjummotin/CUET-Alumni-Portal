import "./App.css";
import  EventCardUi from "./Components/EventCardUi";
import Home from "./Components/Home";
import Events from "./Components/Events";
import NavBar2 from "./Components/NavBar2";
import NavBar1 from "./Components/NavBar1";
import { Grid } from "@mui/material";
import CareereCardUi from "./Components/CareerCardUi";

import CardsData from "./Components/AlumniCardData";
import EventCardsData from "./Components/EventCardData";
import Login from "./Components/Login";
import Register from "./Components/register";
import Add_Event_Form from "./Components/Add_Event_Form";
import Profile from "./Components/ProfilePage";
import Registration from "./Components/registration";
import AlumniList from "./Components/alumni_list";
import EventList from "./Components/event_list";
function App() {
  return (
    <>
      {/* <Events /> */}
      <NavBar1></NavBar1>
      <NavBar2></NavBar2>
      {/* <Home /> */}
      {/* <EventCardUi /> */}
      {/* <CareereCardUi /> */}
      <CardsData />
      {/* <Registration></Registration> */}
      {/* <Profile></Profile> */}
      {/* {EventCardsData} */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Add_Event_Form /> */}
      {/* <AlumniList /> */}
      {/* <EventList /> */}
    </>
  );
}

export default App;

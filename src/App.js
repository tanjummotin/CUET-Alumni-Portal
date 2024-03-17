import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import NavBar2 from "./Components/NavBar2";
import NavBar1 from "./Components/NavBar1";

import Login from "./Components/Login";
import Register from "./Components/register";
import Profile from "./Components/ProfilePage";

import About from "./Components/about";
import CardsData from "./Components/AlumniCardData";
import EventCardUi from "./Components/EventCardUi";
import Add_Event_Form from "./Components/Add_Event_Form";

import Registration from "./Components/registration";
import AlumniList from "./Components/alumni_list";
import EventList from "./Components/event_list";
import logout from "./Components/logout";
import SearchResults from "./Components/SearchResults";
import Footer from "./Components/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar1 />
        <NavBar2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profileView" element={<Profile />} />
          <Route path="/alumniDirectory" element={<CardsData />} />
          <Route path="/eventList" element={<EventCardUi />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/searchResult" element={<SearchResults />} />
          <Route path="/eventForm" element={<Add_Event_Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

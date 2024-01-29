import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import NavBar2 from "./Components/NavBar2";
import NavBar1 from "./Components/NavBar1";

import Login from "./Components/Login";
import Register from "./Components/register";
import Profile from "./Components/ProfilePage";
import Registration from "./Components/registration";
import AlumniList from "./Components/alumni_list";
import EventList from "./Components/event_list";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchResults from "./Components/SearchResults"
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar1 />
        <NavBar2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/alumniDirectory" element={<CardsData />} />
          <Route path="/eventList" element={<EventCardUi />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

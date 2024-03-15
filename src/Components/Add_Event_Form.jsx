import { useState } from "react";
import axios from "axios";
import "../register.css";
import { Link } from "react-router-dom";
export default function Add_Event_Form() {
  const [title, settitle] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const [type, settype] = useState("");
  const [online_or_in_person, setonline_or_in_person] = useState("");
  const [location, setlocation] = useState("");
  const [event_description, setevent_description] = useState("");

  const handleSubmit = () => {
    if (title.length == 0) {
      alert("Title required!!");
      return;
    }
    if (date.length == 0) {
      alert("Event Date required!!");
      return;
    }
    if (time.length == 0) {
      alert("Event Time required!!");
      return;
    }
    if (type.length == 0) {
      alert("Event Type required!!");
      return;
    }
    if (online_or_in_person.length == 0) {
      alert("Online or Inperson required!!");
      return;
    }

    const url = "http://localhost/test/add_event_form.php";
    let fData = new FormData();
    fData.append("title", title);
    fData.append("date", date);
    fData.append("time", time);
    fData.append("type", type);
    fData.append("online_or_in_person", online_or_in_person);
    fData.append("location", location);
    fData.append("event_description", event_description);

    axios
      .post(url, fData)
      .then((response) => alert(response.data))
      .catch((error) => alert(error));
    // }
  };

  return (
    <div className="vh-100 gradient-custom gradient-custom mt-5">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card shadow" style={{ backgroundColor: "#e6e6ff" }}>
                <div className="card-body p-5">
                  <h3 className="text-center mb-5">Add Event Form</h3>
                  <form>
                    <div className="form-outline mb-4">
                      <label className="form-label" for="title">
                        Event Title*
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="title"
                        id="title"
                        value={title}
                        onChange={(e) => settitle(e.target.value)}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" for="date">
                        Event Date*
                      </label>
                      <input
                        type="date"
                        className="form-control form-control-lg"
                        name="date"
                        id="date"
                        value={date}
                        onChange={(e) => setdate(e.target.value)}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" for="time">
                        Event Time*
                      </label>
                      <input
                        type="time"
                        className="form-control form-control-lg"
                        name="time"
                        id="time"
                        value={time}
                        onChange={(e) => settime(e.target.value)}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" for="type">
                        Event Type*
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="type"
                        id="type"
                        value={type}
                        onChange={(e) => settype(e.target.value)}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" for="online_or_in_person">
                        Online or in person?*
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="online_or_in_person"
                        id="online_or_in_person"
                        value={online_or_in_person}
                        onChange={(e) => setonline_or_in_person(e.target.value)}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" for="location">
                        Location
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="location"
                        id="location"
                        value={location}
                        onChange={(e) => setlocation(e.target.value)}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" for="event_description">
                        Event Description
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="event_description"
                        id="event_description"
                        value={event_description}
                        onChange={(e) => setevent_description(e.target.value)}
                      />
                    </div>

                    <div className="d-flex justify-content-center">
                      <Link to="/eventList">
                        <input
                          type="button"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                          name="submit"
                          id="submit"
                          value="Submit"
                          onClick={handleSubmit}
                        />
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

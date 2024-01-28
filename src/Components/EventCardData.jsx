// import React, { Component } from "react";
// import "./Cardstyle.css";
// import eventAttributes from "./Events.json";
// import { EventCardUi } from "./EventCardUi";

// class EventCardsData extends Component {
//   render() {
//     return (
//       <div className="eventContainer row container-fluid">
//         <div className="col-3 eventType">
//           <div className="form-check">
//             <input
//               className="form-check-input"
//               type="checkbox"
//               value=""
//               id="online"
//             />
//             <label className="form-check-label" htmlFor="online">
//               Online
//             </label>
//           </div>
//           <div className="form-check">
//             <input
//               className="form-check-input"
//               type="checkbox"
//               value=""
//               id="inperson"
//             />
//             <label className="form-check-label" htmlFor="inperson">
//               Inperson
//             </label>
//           </div>
//           <br />
//           <hr />
//           <div className="form-check">
//             <input
//               className="form-check-input"
//               type="checkbox"
//               value=""
//               id="social"
//             />
//             <label className="form-check-label" htmlFor="social">
//               Social
//             </label>
//           </div>
//           <div className="form-check">
//             <input
//               className="form-check-input"
//               type="checkbox"
//               value=""
//               id="learn"
//             />
//             <label className="form-check-label" htmlFor="learn">
//               Learn
//             </label>
//           </div>
//           <div className="form-check">
//             <input
//               className="form-check-input"
//               type="checkbox"
//               value=""
//               id="service"
//             />
//             <label className="form-check-label" htmlFor="service">
//               Service
//             </label>
//           </div>
//         </div>
//         <div className="col-9">
//           {eventAttributes.map((record, index) => (
//             <div key={index} className="row mb-3">
//               <EventCardUi
//                 title={record.title}
//                 time={record.time}
//                 month={record.month}
//                 date={record.date}
//                 place={record.place}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default EventCardsData;

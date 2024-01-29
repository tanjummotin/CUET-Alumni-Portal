import { Box, Grid } from "@mui/material";
import NavBar1 from "./NavBar2";
import NavBar2 from "./NavBar2";

import EventRecords from "./Events.json";
import EventCardUi from "./EventCardUi";

export default function Events() {
  return (
    <>
      <NavBar1 />
      <NavBar2 />
      <Box sx={{ flexGrow: 1 }}>
        <Grid item lg={12} xs={12} md={12}></Grid>
        <div className="row-cols-1">
          {/* {EventRecords.map((record) => ( */}
          <div key={record.id}>
            <EventCardUi
              date={record.date}
              month={record.month}
              title={record.title}
              time={record.time}
              place={record.place}
            />
          </div>
          ))}
        </div>
      </Box>
    </>
  );
}

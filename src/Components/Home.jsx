import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import NavBar1 from "./NavBar2";

import "../home.css";
import NavBar2 from "./NavBar2";
import EventCardUi from "./EventCardUi";
import Events from "./Events";
function Home() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <Grid container>
    //     <Grid item lg={12} xs={12} md={12}>
    //       <NavBar2 />
    //     </Grid>
    //     <Grid item lg={12} xs={12} md={12}>
    //       <NavBar1 />
    //     </Grid>
    //     <Grid item lg={12} xs={12} md={12}>
    //       <div id="carouselExampleIndicators" class="carousel slide">
    //         <div class="carousel-indicators">
    //           <button
    //             type="button"
    //             data-bs-target="#carouselExampleIndicators"
    //             data-bs-slide-to="0"
    //             class="active"
    //             aria-current="true"
    //             aria-label="Slide 1"
    //           ></button>
    //           <button
    //             type="button"
    //             data-bs-target="#carouselExampleIndicators"
    //             data-bs-slide-to="1"
    //             aria-label="Slide 2"
    //           ></button>
    //           <button
    //             type="button"
    //             data-bs-target="#carouselExampleIndicators"
    //             data-bs-slide-to="2"
    //             aria-label="Slide 3"
    //           ></button>
    //         </div>
    //         <div class="carousel-inner">
    //           <div class="carousel-item active">
    //             {/* <img src="..." class="d-block w-100" /> */}
    //           </div>
    //           <div class="carousel-item">
    //             {/* <img src=".." class="d-block w-100" /> */}
    //           </div>
    //           <div class="carousel-item">
    //             {/* <img src="..." class="d-block w-100" /> */}
    //           </div>
    //         </div>
    //         <button
    //           class="carousel-control-prev"
    //           type="button"
    //           data-bs-target="#carouselExampleIndicators"
    //           data-bs-slide="prev"
    //         >
    //           <span
    //             class="carousel-control-prev-icon"
    //             aria-hidden="true"
    //           ></span>
    //           <span class="visually-hidden">Previous</span>
    //         </button>
    //         <button
    //           class="carousel-control-next"
    //           type="button"
    //           data-bs-target="#carouselExampleIndicators"
    //           data-bs-slide="next"
    //         >
    //           <span
    //             class="carousel-control-next-icon"
    //             aria-hidden="true"
    //           ></span>
    //           <span class="visually-hidden">Next</span>
    //         </button>
    //       </div>
    //     </Grid>
    //     <Grid item lg={12} xs={12} md={12}>
    //       <div className="About">About us </div>
    //     </Grid>
    //     <Grid lg={12} xs={12} md={12}>
    //       <div className="Mission">Mission</div>
    //     </Grid>
    //     <Grid lg={12} xs={12} md={12}>
    //       <div className="Event">Events</div>
    //     </Grid>
    //     <Grid lg={12} xs={12} md={12}>
    //       <div className="Footer">Footer</div>
    //     </Grid>
    //   </Grid>
    // </Box>
    <Events></Events>
  );
}
export default Home;

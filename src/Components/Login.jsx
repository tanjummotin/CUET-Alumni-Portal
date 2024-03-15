// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import cover from '../assets/Untitled design (1).png';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();

//     fetch('http://localhost/test/login_new.php', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           // Login successful, you can redirect the user or perform other actions
//           console.log('Login successful');
//           // Redirect example:
//           // history.push('/');
//         } else {
//           // Login failed, show an error message to the user
//           console.error('Login failed:', data.message);
//         }
//       })
//       .catch((error) => {
//         console.error('Error during login:', error);
//       });
//   };

//   return (
//     <div className="container-fluid p-3 row justify-content-center">
//       <div className="col-md-6">
//         <div className="card border-0 login-card">
//           <div className="card-body  p-5">
//             <h5 className="card-title text-center mb-4">
//               Join the CUET Alumni Association to reconnect with your friends,
//               classmates, seniors & juniors.
//             </h5>
//             <form className="row justify-content-center" onSubmit={handleLogin}>
//               <div className="col-12 col-md-6 mb-3">
//                 <label htmlFor="email" className="form-label">
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   aria-describedby="emailHelp"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <small id="emailHelp" className="form-text text-muted">
//                   We'll never share your email with anyone else.
//                 </small>
//               </div>
//               <div className="col-12 col-md-6 mb-3">
//                 <label htmlFor="password" className="form-label">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               <div className="col-12 mb-3">
//                 <button type="submit" className="btn btn-primary w-100">
//                   <Link to="/">Login </Link>
//                 </button>
//               </div>
//               <div className="col-12 text-center">
//                 <button type="createAcc" className="btn btn-secondary">
//                   <a
//                     href="#"
//                     style={{ color: 'white', textDecoration: 'none' }}
//                   >
//                     Create an account
//                   </a>
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       <div className="col-6">
//         <img src={cover} alt="Cover" className="img-fluid" />
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost/test/login_new.php", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        console.log("Here");
        console.log(response.data.status);
        if (response.data.status == "success") {
          console.log("here2");
          sessionStorage.setItem("loggedIn", true);
          sessionStorage.setItem(
            "userData",
            JSON.stringify(response.data.data)
          );
        
          window.location.href = "/";
        } else {
          console.log("inelse")
          setError(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%",
      }}
    >
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <Typography
            style={{ marginBottom: "20px" }}
            variant="h2"
            component="h2"
          >
            Sign in
          </Typography>
          {error && (
            <Alert style={{ marginBottom: "20px" }} severity="error">
              {error}
            </Alert>
          )}
          <TextField
            type="email"
            value={email}
            onChange={handleEmailChange}
            variant="filled"
            id="email"
            label="Email address"
            fullWidth
            style={{ marginBottom: "20px" }}
          />
          <TextField
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            variant="filled"
            id="password"
            label="Password"
            fullWidth
            style={{ marginBottom: "20px" }}
            InputProps={{
              endAdornment: (
                <IconButton onClick={handleShowPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />
          <Button variant="contained" type="submit">
            Login
          </Button>
          <p>
            Don't have an account? <Link href="/register">Sign up</Link>
          </p>
        </form>
      </Container>
    </Box>
  );
}

export default Login;



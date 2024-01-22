import { useState } from 'react';
import axios from 'axios';
import '../register.css';
export default function Register() {
    const [name,setName] = useState('');
  const [mobile,setMobile] = useState('');
  const [email,setEmail] = useState('');
 
  const handleSubmit = () => {
    if(name.length === 0){
      alert("Name has left Blank!");
    }
    else if(mobile.length === 0){
      alert("Mobile has left Blank!");
    }
    else if(email.length === 0){
      alert("Email has left Blank!");
    }
    else{
      const url = 'http://localhost/test/formsubmit.php';
      let fData = new FormData();
      fData.append('name', name);
      fData.append('mobile', mobile);
      fData.append('email', email);
      axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));
    }
  }
    return (
        <div className="vh-100 gradient-custom">
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card">
                  <div className="card-body p-5">
                    <h3 className="text-center mb-5">React JS Submit Form with php mysql</h3>
                    <form>
                      <div className="form-outline mb-4">
                        <label className="form-label" for="name">Your Name</label>
                        <input type="text" className="form-control form-control-lg" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" for="mobile">Your Mobile</label>
                        <input type="text" className="form-control form-control-lg" name="mobile" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                      </div>
                      <div className="form-outline mb-4">
                      <label className="form-label" for="email">Your Email</label>
                        <input type="email" className="form-control form-control-lg" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </div>
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                        <label className="form-check-label" for="form2Example3g">
                          I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center">
                      <input type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" name="submit" id="submit" value="Register" onClick={handleSubmit} />
                      </div>
     
                      <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!" className="fw-bold text-body"><u>Login here</u></a></p>
     
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
  
import { useState } from 'react';
import axios from 'axios';
import '../register.css';
export default function Register() {
  const [name,setname] = useState('');
  const [date_of_birth,setdate_of_birth] = useState('');
  const [blood_group,setblood_group] = useState('');
  const [email,setemail] = useState('');
  const [department,setdepartment] = useState('');
  const [batch,setbatch] = useState('');
  const [present_position,setpresent_position] = useState('');
  const [organization,setorganization] = useState('');
  const [phone_no,setphone_no] = useState('');
  const [present_address,setpresent_address] = useState('');
  
  const handleSubmit = () => {
    // if(name.length === 0){
    //   alert("Name has left Blank!");
    // }
    // else if(mobile.length === 0){
    //   alert("Mobile has left Blank!");
    // }
    // else if(email.length === 0){
    //   alert("Email has left Blank!");
    // }
    // else{
      const url = 'http://localhost/test/formsubmit.php';
      let fData = new FormData();
      fData.append('name', name);
      fData.append('date_of_birth', date_of_birth);
      fData.append('blood_group', blood_group);
      fData.append('department', department);
      fData.append('batch', batch);
      fData.append('present_position', present_position);
      fData.append('organization', organization);
      fData.append('phone_no', phone_no);
      fData.append('email', email);
      fData.append('present_address', present_address);

      axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));
    // }
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
                        <input type="text" className="form-control form-control-lg" name="name" id="name" value={name} onChange={(e) => setname(e.target.value)} />
                      </div>
                      <div className="form-outline mb-4">
                      <label className="form-label" for="email">Your Email</label>
                        <input type="email" className="form-control form-control-lg" name="email" id="email" value={email} onChange={(e) => setemail(e.target.value)} />
                      </div>
                      <div className="form-outline mb-4">
                      <label className="form-label" for="date_of_birth">Your date_of_birth</label>
                        <input type="date" className="form-control form-control-lg" name="date_of_birth" id="date_of_birth" value={date_of_birth} onChange={(e) => setdate_of_birth(e.target.value)} />
                      </div>
                      <div className="form-outline mb-4">
                      <label className="form-label" for="blood_group">Your blood_group</label>
                        <input type="text" className="form-control form-control-lg" name="blood_group" id="blood_group" value={blood_group} onChange={(e) => setblood_group(e.target.value)} />
                      </div>
                      <div className="form-outline mb-4">
                      <label className="form-label" for="department">Your department</label>
                        <input type="text" className="form-control form-control-lg" name="department" id="department" value={department} onChange={(e) => setdepartment(e.target.value)} />
                      </div>
                      <div className="form-outline mb-4">
                      <label className="form-label" for="batch">Your batch</label>
                        <input type="text" className="form-control form-control-lg" name="batch" id="batch" value={batch} onChange={(e) => setbatch(e.target.value)} />
                      </div>
                      <div className="form-outline mb-4">
                      <label className="form-label" for="present_position">Your present_position</label>
                        <input type="text" className="form-control form-control-lg" name="present_position" id="present_position" value={present_position} onChange={(e) => setpresent_position(e.target.value)} />
                      </div>
                      <div className="form-outline mb-4">
                      <label className="form-label" for="organization">Your organization</label>
                        <input type="text" className="form-control form-control-lg" name="organization" id="organization" value={organization} onChange={(e) => setorganization(e.target.value)} />
                      </div>
                      <div className="form-outline mb-4">
                      <label className="form-label" for="phone_no">Your phone_no</label>
                        <input type="text" className="form-control form-control-lg" name="phone_no" id="phone_no" value={phone_no} onChange={(e) => setphone_no(e.target.value)} />
                      </div>
                      <div className="form-outline mb-4">
                      <label className="form-label" for="present_position">Your present_address</label>
                        <input type="text" className="form-control form-control-lg" name="present_address" id="present_address" value={present_address} onChange={(e) => setpresent_address(e.target.value)} />
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
  
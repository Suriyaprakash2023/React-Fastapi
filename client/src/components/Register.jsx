import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
const Register = () => {
    const [userName, setuserName] = useState("");
    const [mobile_number, setmobile_number] = useState(""); // Renamed to match backend
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [dateOfBirth, setdateOfBirth] = useState("");
    const [profilePic, setprofilePic] = useState(null);

    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleRegister = async (e) => {
      e.preventDefault();
  
      // Prepare JSON data
      const userData = {
        userName: userName,
        mobile_number: mobile_number, // Match backend field name
        email: email,
        password: password,
        profilePic: profilePic,
        dateOfBirth: dateOfBirth,
      };
      console.log("User data:", userData);
      try {
        const response = await axios.post(
          "http://127.0.0.1:8003/register",
          userData,
          {
            headers: {
              "Content-Type": 'multipart/form-data', // Send as JSON
            },
          }
        );
  
        if (response.status === 200) {
          console.log("Registration Successful!", response.data);
          setSuccessMessage("Registration Successful!");

          setPassword("");
          setemail("");
          setmobile_number("");
          setuserName("");
          setprofilePic(null);
          setdateOfBirth("");
        }else{
          setErrorMessage("Registration failed!");
          console.error("Registration failed:", response.data);
        }
      } catch (error) {
        console.error("Error during registration:", error.response?.data || error);
        setErrorMessage("Registration failed!");
      }
    };
     // useEffect will clear the success message after 5 seconds.
  useEffect(() => {
      if (successMessage || errorMessage) {
        const timer = setTimeout(() => {
          setSuccessMessage(null);
          setErrorMessage(null);
        }, 5000);
        // Cleanup the timer if the component unmounts or successMessage changes
        return () => clearTimeout(timer);
      }
    }, [successMessage,errorMessage]);

    return (
      <>
        <main className="main-content">
          <div className="container">
            <div className="row profile-picture-area">
              <div className="col-xl-9 col-lg-8">
                <div className="head-area ">
                  <img
                    src="/src/assets/logo.svg"
                     style={{ height: '152px',width:'200px' }}
                    alt="Logo"
                  />
                </div>
                <form
                  onSubmit={handleRegister}
                  className="text-center d-grid gap-4"
                >
                           
                                          



                  <div className="single-box p-3 p-sm-5">
                  
                  {successMessage && (
                    <Alert
                      severity="success"
                      className="text-white mb-3"
                      style={{ backgroundColor: "#28b528" }}
                    >
                      {successMessage}
                    </Alert>
                  )}

                    <h3>Register</h3>
                    


                    <div className="row mt-4">
                      <div className="col-sm-6">
                        <div className="single-input text-start">
                          <label htmlFor="name">Name</label>
                          <div className="input-area second">
                            <input
                              type="text"
                              value={userName}
                              onChange={(e) => setuserName(e.target.value)}
                              placeholder="Enter Your userName"
                              autoComplete="off"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="single-input text-start">
                          <label htmlFor="mobile_number">Mobile Number</label>
                          <div className="input-area second">
                            <input
                              type="text" // Changed to text to handle + prefix
                              value={mobile_number}
                              onChange={(e) => setmobile_number(e.target.value)}
                              placeholder="e.g., +12345678901"
                              autoComplete="off"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="single-input text-start">
                          <label htmlFor="email">email</label>
                          <div className="input-area second">
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setemail(e.target.value)}
                              placeholder="Enter your email"
                              autoComplete="off"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="single-input text-start">
                          <label htmlFor="email">Date Of Birth</label>
                          <div className="input-area second">
                            <input
                              type="date"
                              value={dateOfBirth}
                              onChange={(e) => setdateOfBirth(e.target.value)}
                              placeholder="Enter your email"
                              autoComplete="off"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="single-input text-start">
                          <label htmlFor="email">Profile Picture</label>
                          <div className="input-area second">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e)=>setprofilePic(e.target.files[0])}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="single-input text-start">
                          <label htmlFor="password">Password</label>
                          <div className="input-area second">
                            <input
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="Enter your Password"
                              autoComplete="off"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 mt-4">
                        <div className="btn-area">
                          <button className="cmn-btn" type="submit">
                            Register
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <span>Already have an account? Go to </span> &nbsp;
                        <Link to="/" className="text-primary">
                          Login
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  };
  
  export default Register;
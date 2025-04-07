import React, { useState,useEffect } from 'react';
import { Link,useNavigate  } from 'react-router-dom';
import axios from 'axios';  // Make sure axios is imported
import { BASE_URL } from '../context/data';
import { useUser } from '../context/UserProvider'; // Import the useUser hook
const Login = () => {

  const { login } = useUser();

  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();  

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${BASE_URL}/login`, userData, {
        headers: {
          'Content-Type': 'application/json',  // Correct content type
        },
      });

      if (response.status === 200) {
        console.log('Login successful!', response.data);
        setSuccessMessage('Login successful!');
        login(response.data.access_token); 
        // Show success message and then redirect after 5 seconds
        setTimeout(() => {
          navigate('/index');  // Redirect to home page (or any other page)
        }, 5000); // 5 seconds delay

      } else {
        setErrorMessage('Login failed!');
        console.error('Login failed:', response.data);
      }
      // If login is successful, you can set a success message or handle redirection
     
      // Optionally, you can redirect the user to another page (e.g., dashboard) after successful login
      // history.push("/dashboard"); // Uncomment if using react-router-dom

    } catch (error) {
      // If login fails, you can set an error message
      setErrorMessage('Invalid email or password');
      console.error('Login error:', error);
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
            <div className="col-xl-6 col-lg-6">
              <div className="head-area ">
                <img src="/src/assets/logo.svg" style={{ height: '152px',width:'200px' }} alt="Logo" />
              </div>
              <form onSubmit={handleLogin} className="text-center d-grid gap-4">
                {successMessage && (
                  <div className="alert alert-success text-white mb-3" style={{ backgroundColor: '#28b528' }}>
                    {successMessage}
                  </div>
                )}

                {errorMessage && (
                  <div className="alert alert-danger text-white mb-3" style={{ backgroundColor: '#ff4d4d' }}>
                    {errorMessage}
                  </div>
                )}

                <div className="single-box p-3 p-sm-5">
                  <h3>Login</h3>

                  <div className="row mt-4">
                    <div className="col-sm-12">
                      <div className="single-input text-start">
                        <label htmlFor="email">Email</label>
                        <div className="input-area second">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            autoComplete="off"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <div className="single-input text-start">
                        <label htmlFor="password">Password</label>
                        <div className="input-area second">
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            autoComplete="off"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-12 mt-4">
                      <div className="btn-area">
                        <button className="cmn-btn" type="submit">
                          Login
                        </button>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <span>Don't have an account? Go to </span> &nbsp;
                      <Link to="/register" className="text-primary">
                        Register
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

export default Login;

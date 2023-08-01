import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useState } from 'react';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const handleSubmit = (event) => {
      event.preventDefault();

      const validationErrors = {};
      if (!email) {
          validationErrors.email = 'Email address is required';
      } else if (!emailRegex.test(email)) {
          validationErrors.email = 'Invalid email address';
      }
      if (!password) {
          validationErrors.password = 'Password is required';
      } else if (!passwordRegex.test(password)) {
          validationErrors.password = 'Password must contain at least one letter, one number, and one special character, and be at least 8 characters long';
      }

      if (Object.keys(validationErrors).length === 0) {
          console.log('Form submitted:', email, password);
      } else {
          const errorMessage = Object.values(validationErrors).join('\n');
          alert(errorMessage);
      }
  };
  return (
    <Wrapper className="section">
      <div className="wrapper">
                <div className="title">
                    Login Form
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        <label>Email Address</label>
                    </div>
                    <div className="field">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        <label>Password</label>
                    </div>
                    <div className="field">
                        <input type="submit" value="Login"/>
                    </div>
                    <div className="signup-link">
                        Not a member? 
                        <Link to="/register">Signup now</Link>
                    </div>
                </form>
            </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
padding: 12rem 0;
img {
 width: 18rem;
  height: 15rem;
}
.wrapper{
    box-shadow: 10px 10px black;
    margin-top: 21px;
    margin-left: 401px;
    width: 500px;
    background: #d1eadf;
    border-radius: 15px;
    box-shadow: 0px 15px 20px rgba(0,0,0,0.1);
  }
  .wrapper .title{
    font-size: 35px;
    font-weight: 600;
    text-align: center;
    line-height: 100px;
    color: #fff;
    user-select: none;
    border-radius: 15px 15px 0 0;
    background: linear-gradient(-135deg, #02201c, #0ae09d);
  }
  .wrapper form{
    padding: 10px 30px 50px 30px;
  }
  .wrapper form .field{
    height: 50px;
    width: 100%;
    margin-top: 20px;
    position: relative;
  }
  .wrapper form .field input{
    height: 100%;
    width: 100%;
    outline: none;
    font-size: 17px;
    padding-left: 20px;
    border: 1px solid lightgrey;
    border-radius: 25px;
    transition: all 0.3s ease;
  }
  .wrapper form .field input:focus,
  form .field input:valid{
    border-color: #4158d0;
  }
  .wrapper form .field label{
    position: absolute;
    top: 50%;
    left: 20px;
    color: #999999;
    font-weight: 400;
    font-size: 17px;
    pointer-events: none;
    transform: translateY(-50%);
    transition: all 0.3s ease;
  }
  form .field input:focus ~ label,
  form .field input:valid ~ label{
    top: 0%;
    font-size: 16px;
    color: #4158d0;
    background: #fff; 
    transform: translateY(-50%);
  }
  form .field input[type="submit"]{
    color: #fff;
    border: none;
    padding-left: 0;
    margin-top: -10px;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    background: linear-gradient(-135deg, #02201c, #0ae09d);
    transition: all 0.3s ease;
  }
  form .field input[type="submit"]:active{
    transform: scale(0.95);
  }
  form .signup-link{
    color: #262626;
    margin-top: 20px;
    text-align: center;
  }
  form .pass-link a,
  form .signup-link a{
    color: #4158d0;
    text-decoration: none;
  }
  form .pass-link a:hover,
  form .signup-link a:hover{
    text-decoration: underline;
  }
  background-image:
  url(
"images/wepik-export-20230729073329A68i.png");
background-repeat:no-repeat;
background-size: "cover";

}
`;

export default Login

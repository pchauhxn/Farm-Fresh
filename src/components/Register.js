import React from 'react'
import styled from "styled-components";

import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


const Register = () => {

    const history= useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    async function submit(){
      console.log("inside submit");

      try{

          await axios.post("http://localhost:8000/register",{
              email,password
          })
          .then(res=>{
            console.log(res);
              if(res.data=="exist"){
                  alert("User already exists")
              }
              else if(res.data=="notexist"){
                  history("/Main",{state:{id:email}})
              }
          })
          .catch(e=>{
              alert("wrong details")
              console.log(e);
          })

      }
      catch(e){
          console.log(e);

      }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!firstName || !lastName || !email || !password || !confirmPassword || !phoneNumber) {
            alert('Please fill in all the required fields.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Invalid email address.');
            return;
        }
        if (!isValidPhoneNumber(phoneNumber)) {
          alert('Invalid phone number. Please enter a 10-digit number.');
          return;
      }
        console.log('Form submitted:', firstName, lastName, email, password, phoneNumber);
        submit();
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const isValidPhoneNumber = (phoneNumber) => {
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(phoneNumber);
  };

    return (
      <Wrapper className="section">
          <div className="shad">
              <div className="wrapper">
                  <div className="title">
                      Register Now!
                  </div>
                  <form onSubmit={handleSubmit}>
                      <div className="field">
                          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
                          <label>First Name</label>
                      </div>
                      <div className="field">
                          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
                          <label>Last Name</label>
                      </div>
                      <div className="field">
                          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                          <label>Email Address</label>
                      </div>
                      <div className="field">
                          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                          <label>Create Password</label>
                      </div>
                      <div className="field">
                          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                          <label>Confirm Password</label>
                      </div>
                      <div className="field">
                          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>
                          <label>Phone Number</label>
                      </div>

                      <div className="field">
                          <input type="submit" value="Register"/>
                      </div>
                  </form>
              </div>
          </div>
      </Wrapper>
  );
};
const Wrapper= styled.section`
padding: 12rem 0;
img {
 width: 18rem;
  height: 15rem;
}
.wrapper{
    box-shadow: 10px 10px black;
    margin-top: -91px;
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
    background: linear-gradient(-135deg, #02201c, #125212);
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
    background: linear-gradient(-135deg, #02201c, #125212);
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


`;

export default Register

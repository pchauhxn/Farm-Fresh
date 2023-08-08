import React from 'react';
import styled from "styled-components";

export const Contactus = () => {
    return (

        <Wrapper>
        <div>
            <section className="contact-form">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="contact-form-container">
                                <h3 className="card-title text-center con">Contact Us</h3>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            rows="4"
                                            placeholder="Enter your message"
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </Wrapper>
    );
};


const Wrapper = styled.section`
padding: 10rem 0;
img {
 width: 18rem;
  height: 15rem;
}
.contact-form-container {
    margin-top: 40px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
  }

  .contact-form .card {
    border: none;
  }

  .contact-form .card-title {
    font-weight: 600;
    font-size: 24px;
    color: #333;
    margin-bottom: 30px;
  }

  .contact-form .form-group label {
    font-weight: 500;
    color: #555;
  }

  .contact-form .form-control {
    border-radius: 8px;
    border-color: #ced4da;
  }

  .contact-form textarea.form-control {
    resize: none;
  }

  .contact-form .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    padding: 10px 25px;
    font-size: 16px;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    border-radius: 30px;
    text-transform: uppercase;
    width: 100%;
  }

  .contact-form .btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }

  .contact-form .btn-primary:focus,
  .contact-form .btn-primary.focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
  }

  .contact-form p {
    font-size: 14px;
    color: #555;
  }

  .contact-form p a {
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .contact-form p a:hover {
    color: #0056b3;
  }
  background-image:
  url(
"images/wepik-export-20230729073329A68i.png");
background-repeat:no-repeat;
background-size: "cover";
`;

export default Contactus
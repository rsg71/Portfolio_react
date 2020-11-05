import React from "react";
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import "./style.css"

function Contact() {
    return (
        <div>
            <Navbar />
            <div className="container">

            <h1>Contact</h1>
            <row className="contactForm">
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Name: </label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email address:</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>


                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Inquiry/Questions/Comments:</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                    </div>
                </form>

                <button id="contact-submit-button" class="btn btn-dark" type="submit" value="Submit"><a id="contact-submit-link">Submit</a></button>
            </row>
            </div>

                <Footer />
        </div>
    )
}

export default Contact;
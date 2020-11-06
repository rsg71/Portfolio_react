import React from "react";
import Footer from "../../components/footer"
import "./style.css"

const secStyle = {
    width: "50%"
}


function Homepage() {
    return (
        <div>
            <div className="container" >
                <section className="row">

                    <img src="imgs/headshot-white-background.png" id="headshot" alt="headshot of Robert" className="img-fluid rounded mx-auto d-block"/>
                </section>

                <section className="row">
                    <section id="bio" className="mx-auto">
                        <br />
                        <br />
                        <br />
                        <h3 class="bio">
                            Bio: <br />
                        </h3>
                        <p>My name is Robert Greenawalt and I'm a Philadelphia based full-stack web developer. I am looking to work in
                        web development because I love designing new things and working in teams. I would like to shift my career
                        because I think that web development would suit me very well and I love to learn
                        new ideas. Core competencies include Git, HTML, CSS, Javascript, jQuery, Ajax, RESTful APIs, Node.js, MongoDB,
                     and React. Check out some of my work in my <a href="portfolio.html">portfolio</a> and <a
                                href="https://github.com/rsg71" target="_blank">GitHub</a>, add me on <a
                                    href="https://www.linkedin.com/in/robert-greenawalt-43457a14a/" target="_blank">LinkedIn</a>, or send me an email through my <a href="contact.html">contact</a> page.</p>

                        <p><i class="fas fa-envelope"></i><span class="font-weight-bold"> Email: </span>robert.greenawalt29@gmail.com</p>
                        <p><i class="fas fa-phone"></i><span class="font-weight-bold"> Phone: </span>215-913-7231</p>

                        <div class="row" id="resume-portfolio-buttons">
                            <a href="portfolio.html" class="btn btn-lg btn-outline-dark mx-auto" id="portfolio-btn-link">Portfolio</a>
                            <a href="resume.html" class="btn btn-lg btn-outline-dark mx-auto" id="resume-btn-link">Resume</a>

                        </div>



                        <br />


                    </section>
                </section>
            </div>

        </div>
    )
}

export default Homepage;
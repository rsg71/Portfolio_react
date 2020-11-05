import React from "react";
import "./style.css"

function Footer() {
    return (
        <div>
            {/* <footer className="footer mt-auto py-3">
                <div className="container">
                    <span className="text-muted">Place sticky footer content here.</span>
                </div>
            </footer> */}



            <footer className="footer footer-resume mx-auto">
                <div className="footer-links">
                    <a href="https://github.com/rsg71" className="text-decoration-none" target="_blank"><i className="fab fa-github"></i></a>
                    {' '}
                    <a href="https://www.linkedin.com/in/robert-greenawalt-43457a14a/" className="text-decoration-none" target="_blank"><i
                        className="fab fa-linkedin-in"></i></a>
                    {' '}
                    <a href="https://www.instagram.com/robert.greenawalt29/" className="text-decoration-none" target="_blank">
          <i className="fab fa-instagram"></i></a>
                </div>
            </footer>
        </div>

    )
}

export default Footer;

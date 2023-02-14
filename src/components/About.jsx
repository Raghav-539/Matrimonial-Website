import React from 'react'
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <div>
        <section id="about">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/images/logo.png" alt="about" className="w-75 mt-5"/>
                    </div>
                    <div className="col-md-6">
                        <h3 className="fs-5 mb-0"> About Us </h3>
                        <h1 className="display-6 mb-2"> Who <b> we </b> are? </h1>
                        <hr className="w-50" />
                        <p className="lead mb-4 j">
                        Wedding Bells is one of India’s leading matrimonial websites that has helped millions of members find their perfect life partner. <br/> <br/>

                        We believe choosing a life partner is a big and important decision, and hence work towards giving a simple and secure matchmaking experience for you and your family. Each profile registered with us goes through a manual screening process before going live on site. We provide superior privacy controls for Free and also verify contact information of members. <br/> <br/>

                        You can register for Free and search according to your specific criteria on age, height, community, profession, income, location and much more- on your computer, tablet or mobile. Regular custom mails and notifications make the process easier and take you closer to <strong> <em> Life Partner! </em> </strong> 
                        </p>
                        <NavLink to="/register" className="btn btn-dark rounded-pill px-4 py-2"> Get Started </NavLink>
                        <NavLink to="/contact" className="btn btn-outline-dark rounded-pill px-4 py-2 ms-2"> Contact Us </NavLink>

                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About
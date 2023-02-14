import React from 'react'
import { NavLink } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Matches from './Matches'

function Home() {
  return (
    <div>
        <section id="home">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5">
                        <h1 className="display-4 fw-bolder mb-4 text-center">
                            Wedding Bells Matrimonial Site    
                        </h1>
                        <p className="lead text-center fs-4 mb-5"> Your search for the perfect match ends here! </p>
                        <div className="buttons d-flex justify-content-center">
                            <NavLink to="/register" className="btn btn-dark me-4 px-4 py-2 rounded-pill"> Create Profile! <i class="fa-solid fa-user-plus ms-2"></i> </NavLink>
                            <NavLink to="/matches" className="btn btn-outline-dark me-4 px-4 py-2 rounded-pill"> Our Matches <i class="fa-solid fa-ring ms-2"></i> </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <About/>
        <Matches/>
        <Contact/>
    </div>
  )
}

export default Home
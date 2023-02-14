import React from 'react'

function Footer() {
  return (
    <div>
        <footer id="footer" className="text-dark">
            <div className="container">
                <div className="py-5">
                    <div className="row">
                        <div className="col-3">
                            <h4> Wedding Bells <br /> Matrimonial Site </h4>
                        </div>

                        <div className="col-3">
                            <h5> Need Help? </h5>
                            <ul className="nav flex-column"> 

                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-dark"> Member Login </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-dark"> Sign Up </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-dark"> Partner Search </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-dark"> How to Use our site </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-dark"> Premium Membership </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-dark"> Customer Support </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h5> Company </h5>
                            <ul className="nav flex-column"> 

                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-dark"> Home </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-dark"> Features </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-dark"> Pricing </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-dark"> FAQs </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-dark"> About us</a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-dark"> Contact us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h5> Privacy & You </h5>
                            <ul className="nav flex-column"> 

                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-dark"> Terms of Use </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-dark"> Privacy Policy </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-dark"> Be Safe Online </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-dark"> Report Misuse </a>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex justify-content-between pt-4 mt-4 border-top">
                            <p>  <i class="fa-sharp fa-solid fa-copyright"></i> Wedding Bells Matrimonial Site 2023, All rights reserved @ Raghav Gupta </p>
                            <ul className="list-unstyled d-flex">
                                <li className="ms-3">
                                    <a href="#" className="link-dark"> <i class="fa-brands fa-facebook fa-2x"></i> </a>
                                </li>
                                <li className="ms-3">
                                    <a href="#" className="link-dark"> <i class="fa-brands fa-instagram fa-2x"></i> </a>
                                </li>
                                <li className="ms-3">
                                    <a href="#" className="link-dark"> <i class="fa-brands fa-twitter fa-2x"></i> </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    </div>
  )
}

export default Footer
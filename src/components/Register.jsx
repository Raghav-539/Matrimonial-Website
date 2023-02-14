import React from 'react'
import { NavLink } from 'react-router-dom';


function Register() {
  return (
    <div>
        <div className="container shadow my-5">
            <div className="row justify-content-end">
                <div className="col-md-5 d-flex flex-column align-items-center justify-content-center register-form order-2">
                    <h1 className="display-4 fw-bolder"> Register YourSelf </h1>
                    <p className="fw-bold text-center"> Enter Your Details To Register </p>
                    <h5 className="mb-4"> OR </h5>
                    <NavLink to="/login" className="btn btn-outline-dark rounded-pill pb-2 w-50" > <i className="fa-solid fa-right-to-bracket"> </i> Login </NavLink>
                </div>
                <div className="col-md-6 p-5 ">
                  
                    <form class="row g-3" action="#"  method="">
                            <div class="col-md-12">
                                <label for="uname" class="form-label"> Name </label>
                                <input type="text" class="form-control" id="uname" name="uname"  autoComplete="off" />
                            </div>

                            
                            <div class="col-md-6">
                                <label for="email" class="form-label"> Email </label>
                                <input type="email" class="form-control" id="email" name="email" autoComplete="off"/>
                            </div>

                            <div class="col-md-6">
                                <label for="password" class="form-label"> Password </label>
                                <input type="password" class="form-control" id="password" name="password" autoComplete="off"/>
                            </div>

                            <div class="col-md-4">
                                <label for="age" class="form-label"> Age </label>
                                <input type="number" class="form-control" id="age" name="age"  autoComplete="off" />
                            </div>

                            <div class="col-md-4">
                                <label for="gender" class="form-label"> Gender </label>
                                <input type="text" class="form-control" id="gender" name="gender"  autoComplete="off" />
                            </div>

                            <div class="col-md-4">
                                <label for="religion" class="form-label"> Religion </label>
                                <input type="text" class="form-control" id="religion" name="religion" autoComplete="off"/>
                            </div>

                            <div class="col-md-4">
                                <label for="location" class="form-label"> Location </label>
                                <input type="text" class="form-control" id="location" name="location"  autoComplete="off"/>
                            </div>

                            <div class="col-md-4">
                                <label for="city" class="form-label"> City </label>
                                <input type="text" class="form-control" id="city" name="city"  autoComplete="off"/>
                            </div>

                            <div class="col-md-4">
                                <label for="inputZip" class="form-label">Zip</label>
                                <input type="number" class="form-control" id="inputZip" name="zip"  autoComplete="off"/>
                            </div>

                            
                            <div class="col-md-4">
                                <label for="profile" class="form-label"> Create profile for </label>
                                <select id="profile" class="form-select" name="profile"   autoComplete="off">
                                    <option selected>Please Select...</option>
                                    <option> My Self </option>
                                    <option> My Son </option>
                                    <option> My Daughter </option>
                                    <option> My Brother </option>
                                    <option> My Sister </option>
                                    <option> My Friend </option>
                                    <option> My Relative </option>
                                </select>
                            </div>

                            <div class="col-md-4">
                                <label for="dob" class="form-label"> Date of Birth </label>
                                <input type="text" class="form-control" id="dob" name="dob" autoComplete="off"/>
                            </div>

                            <div class="col-md-4">
                                <label for="height" class="form-label"> Height </label>
                                <input type="text" class="form-control" id="height" name="height"  autoComplete="off"/>
                            </div>

                            <div class="col-md-4">
                                <label for="martialstatus" class="form-label"> Martial Status </label>
                                <input type="text" class="form-control" id="martialstatus" name="martialstatus"  autoComplete="off"/>
                            </div>

                            <div class="col-md-4">
                                <label for="mothertounge" class="form-label"> Mother Tounge </label>
                                <input type="text" class="form-control" id="mothertounge" name="mothertounge" autoComplete="off"/>
                            </div>

                            <div class="col-md-4">
                                <label for="education" class="form-label"> Education </label>
                                <input type="text" class="form-control" id="education" name="education"   autoComplete="off"/>
                            </div>

                            <div class="col-md-4">
                                <label for="profession" class="form-label"> Profession </label>
                                <input type="text" class="form-control" id="profession" name="profession" autoComplete="off"/>
                            </div>

                            <div class="col-md-4">
                                <label for="mobile" class="form-label"> Mobile Number </label>
                                <input type="number" class="form-control" id="mobile" name="mobile"  autoComplete="off" maxlength="10" />
                            </div>

                            <div class="col-12">

                            </div>
                            
                            <button type="submit" className="btn btn-outline-dark col-md-4 rounded-pill "> <i className="fa-solid fa-right-to-bracket"> </i> Create Profile  </button>

                        </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register
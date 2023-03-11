import React from 'react'
import "./product.css"

export default function Product() {
  return (

    <div>
      <>

        <div>
          <div id="wrapper">

            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                {/* TopBar */}

                {/* Topbar */}

                {/* Register Content */}
                <div className="container-login">
                  <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-12 col-md-12">
                      <div className="card shadow-sm my-5">
                        <div className="card-body p-0">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="container">
                                <div className="text-center"> <br />
                                  <h1 className="h2 text-gray-900 mb-4">
                                    Add New Product
                                  </h1>  <hr /> <br />
                                </div>

                                <form>
                                  <label htmlFor="exampleInputEmail1">
                                    Select Animal
                                  </label>{" "}
                                  <br />
                                  <select

                                    className="form-control mb-3"
                                    name="c_id"

                                  >
                                    <option disabled> --select one--</option>

                                  </select>

                                  <label htmlFor="exampleInputEmail1">
                                    Select Breed
                                  </label>{" "}
                                  <br />
                                  <select

                                    className="form-control mb-3"
                                    name="s_c_id">
                                    <option disabled> --select one--</option>
                                  </select>

                                  <div className="form-group">
                                    <label>Age :</label>
                                    <input

                                      type="age"
                                      name="age"
                                      className="form-control"
                                      id="exampleInputEmail"
                                      aria-describedby="emailHelp"
                                      placeholder="Enter Age"
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Enter Weight :</label>
                                    <input

                                      name="weight"
                                      type="number"
                                      className="form-control"
                                      id="exampleInputPassword"
                                      placeholder=" Enter Weight"
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label> Price :</label>
                                    <input

                                      type="text"
                                      name="price"
                                      className="form-control"
                                      id="exampleInputFirstName"
                                      placeholder="Enter Price"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label>Animal Description :</label>

                                    <textarea

                                      name="description"
                                      className="form-control"
                                      id="exampleInputLastName"
                                      placeholder="Enter Animal Description"
                                      cols="30"
                                      rows="5"
                                    ></textarea>
                                  </div>

                                  <div className="form-group">
                                    <label> Enter City: </label>
                                    <input

                                      name="city"
                                      type="text"
                                      className="form-control"
                                      id="exampleInputPasswordRepeat"
                                      placeholder="Enter City"
                                    />
                                  </div>


                                  <div className="form-group">
                                    <label>Enter State : </label>
                                    <input

                                      name="state"
                                      type="text"
                                      className="form-control"
                                      id="exampleInputPasswordRepeat"
                                      placeholder="Enter State"
                                    />
                                  </div>


                                  <label htmlFor="exampleInputEmail1">
                                    Color
                                  </label>
                                  <br />
                                  <select

                                    className="form-control mb-3"
                                    name="color_id">
                                    <option disabled> --select one--</option>
                                  </select>





                                  <br />
                                  <div className="form-group">
                                    <label>Milk Liter/Day  : </label>
                                    <input

                                      name="milk"
                                      type="number"
                                      className="form-control"
                                      id="exampleInputPasswordRepeat"
                                      placeholder="In Liter"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label className="labels">
                                      Lactation (Biyat) :{" "}
                                    </label>
                                    <input

                                      name="lactation"
                                      type="number"
                                      className="form-control"
                                      id="exampleInputPasswordRepeat"
                                      placeholder="Enter Laction (Biyat)"
                                    />
                                  </div>






                                  <div className="form-group" >
                                    <label>Calf :&nbsp; &nbsp;</label>
                                    NO  &nbsp;
                                    <label className="switch">
                                      <input type="checkbox" />
                                      <span className="slider round" />
                                    </label> &nbsp; YES
                                  </div>


                                  <div className="form-group">
                                    <label>Calf Age :</label>
                                    <input

                                      type="number"
                                      min={0}

                                      name="age"
                                      className="form-control"
                                      id="exampleInputEmail"
                                      aria-describedby="emailHelp"
                                      placeholder="Enter Age"
                                    />
                                  </div>



                                  <label htmlFor="gender"> Calf Gender:</label>
                                  <div className="form-check">

                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault1"
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                      Female
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault2"
                                      defaultChecked=""
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                      Male
                                    </label>
                                  </div>


                                  <br />
                                  <div className="form-group">
                                    <label className="starlabel label">
                                      {" "}
                                      Enter Front-Side Photo :{" "}
                                    </label>
                                    <input
                                      name="p_media"
                                      type="file"
                                      className="form-control "
                                      id="customFile"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label> Enter Back-Side Photo : </label>
                                    <input
                                      name="back-side"
                                      type="file"
                                      className="form-control"
                                      id="customFile"
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label> Enter Lumpi_Certificate : </label>
                                    <input
                                      name="lumpi_certificate"
                                      type="file"
                                      className="form-control"
                                      id="customFile"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label> Enter General_report :</label>
                                    <input
                                      name="general_report"
                                      type="file"
                                      className="form-control"
                                      id="customFile"
                                    />
                                  </div>


                                  <div className="form-group">
                                    <label> Seller Mobile Number :</label>
                                    <input

                                      name="seller_mobile"
                                      type="number"
                                      className="form-control"
                                      id="exampleInputPasswordRepeat"
                                      placeholder="Enter Mobile Number"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <button
                                      type="button"
                                      className="btn btn-lg btn-primary btn-block"
                                    >
                                      Submit
                                    </button>
                                  </div>
                                  <hr />

                                </form>


                                <div className="text-center"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



              </div>
            </div>
          </div>
        </div>

      </>
    </div>
  );
}





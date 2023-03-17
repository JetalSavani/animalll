import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { baseUrl } from './BaseUrl/BaseUrl';


export default function Allproduct() {
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }
  }
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const getProduct = async () => {
    let data = []
    await axios.get(baseUrl + "product/get-product", config).then((res) => {
      console.log('res', res)
      data = res?.data?.product.filter((v) => {
        if (v?.categoryId === "64108765023f69996a4a4086") {
          return v
        }
      })
      setData(data)
    }).catch((err) => {
      console.log('err', err)
    })
  }
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  React.useEffect(() => {
    getProduct()
  }, [])
  return (
    <>
      <div className="page-title-area bg4 jarallax" data-jarallax='{"speed": 0.2}'>
        <div className="container">
          <div className="page-title-content">
            <h1>Ox</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Ox
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="courses-area">

        <div className="container">

          <div className="section-title with-wrap-style"><br /><br />
            <span>Our Product </span>

          </div>
          <div className="row">
            {data?.map((val) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 card-product px-0">
                  <div className="single-courses">
                    <div className="courses-image">
                      <img src="assets/img/courses1.jpg" alt="" />
                    </div>
                    <div className="courses-content">

                      <div className="d-flex justify-content-between align-items-center" >
                        <h6>{val?.breedType}{" "}{val?.animalType}</h6>
                        <h6 >{val?.price}</h6>
                      </div>
                      <div className="d-flex justify-content-between align-items-center"  >
                        <h6>{val?.city}{","}{val?.state}</h6>
                        <h6  >{val?.color}</h6>
                      </div>
                      <div className="d-flex justify-content-between align-items-center"  >
                        <h6>{val?.age}</h6>
                        <h6  >{val?.milk}</h6>
                      </div>




                      <button className='btn btn-success' onClick={() => navigate(`/singleproduct/${val?.categoryId}`)} >View Product </button>

                    </div>
                  </div>
                </div>
              )
            })}
            {/* <div className="col-lg-4 col-md-12">
              <div className="single-courses">
                <div className="courses-image">
                  <img src="assets/img/courses1.jpg" alt="" />
                </div>
                <div className="courses-content">

                  <div className="column" style={{ display: "flex" }} >
                    <h6>Cow</h6>
                    <h6 style={{ marginLeft: "220px" }} >Price</h6>
                  </div>
                  <div className="column" style={{ display: "flex" }} >
                    <h6>location</h6>
                    <h6 style={{ marginLeft: "193px" }} >color</h6>
                  </div>
                  <div className="column" style={{ display: "flex" }} >
                    <h6>Age</h6>
                    <h6 style={{ marginLeft: "223px" }} >Milk</h6>
                  </div>




                  <button className='btn btn-success' style={{ marginLeft: "25%" }}  >View Product </button>

                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-4 col-md-12">
              <div className="single-courses">
                <div className="courses-image">
                  <img src="assets/img/courses1.jpg" alt="" />
                </div>
                <div className="courses-content">

                  <div className="column" style={{ display: "flex" }} >
                    <h6>Cow</h6>
                    <h6 style={{ marginLeft: "220px" }} >Price</h6>
                  </div>
                  <div className="column" style={{ display: "flex" }} >
                    <h6>location</h6>
                    <h6 style={{ marginLeft: "193px" }} >color</h6>
                  </div>
                  <div className="column" style={{ display: "flex" }} >
                    <h6>Age</h6>
                    <h6 style={{ marginLeft: "223px" }} >Milk</h6>
                  </div>
                  <button className='btn btn-success' style={{ marginLeft: "25%" }}  >View Product </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="single-courses">
                <div className="courses-image">
                  <img src="assets/img/courses1.jpg" alt="" />
                </div>
                <div className="courses-content">

                  <div className="column" style={{ display: "flex" }} >
                    <h6>Cow</h6>
                    <h6 style={{ marginLeft: "220px" }} >Price</h6>
                  </div>
                  <div className="column" style={{ display: "flex" }} >
                    <h6>location</h6>
                    <h6 style={{ marginLeft: "193px" }} >color</h6>
                  </div>
                  <div className="column" style={{ display: "flex" }} >
                    <h6>Age</h6>
                    <h6 style={{ marginLeft: "223px" }} >Milk</h6>
                  </div>


                  <button className='btn btn-success' style={{ marginLeft: "25%" }}    >View Product </button>

                </div>
              </div>
            </div> */}


          </div>
        </div>

      </section>
    </>
  )
}

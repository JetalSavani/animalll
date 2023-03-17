import React from 'react'
import { Link } from 'react-router-dom';
import { NewsJson } from './json/NewsJson';

export default function News() {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (

    <>

      <section className="blog-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>
              Recent News &amp; <br />
              Articles
            </h2>
            {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
          </div>
          <div className="row">
            {NewsJson.map((news) => {
              return (
                <div className="col-lg-4 col-md-6">
                  <div className="single-blog-post">
                    <div className="post-image">
                      <Link to="#">
                        <img src={news?.image} height={300} alt="" />
                      </Link>
                      <div className="author">
                        <Link to="#">{news?.author}</Link>
                      </div>
                    </div>
                    <div className="post-content">
                      <div className='d-flex justify-content-between '>
                        <span>{news?.date}</span>
                        <span>{news?.time}</span>
                      </div>
                      <h3>
                        <Link to="#">
                          {news?.name}
                        </Link>
                      </h3>
                      <p>
                        {news?.description.substring(0, 200) + "....."}
                      </p>
                      <Link to="https://worldanimalnews.com/" target='_blank' className="read-more">
                        Read More <i className="icofont-simple-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              )

            })}
            {/* <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link to="#">
                    <img src="assets/img/blog4.jpg" alt="" />
                  </Link>
                  <div className="author">
                    <Link to="#">By Admin</Link>
                  </div>
                </div>
                <div className="post-content">
                  <span>June 28, 2021</span>
                  <h3>
                    <Link to="#">
                      The world's ten most expensive stallions for 2021
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Link to="https://worldanimalnews.com/" target='_blank' className="read-more">
                    Read More <i className="icofont-simple-right" />
                  </Link>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </section>

    </>


  )
}

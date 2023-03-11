import React from 'react'
import { Link } from 'react-router-dom'
export default function Singleblog() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>

            <>
                <>
                    {/* Start Page Title Area */}
                    <div className="page-title-area bg6 jarallax" data-jarallax='{"speed": 0.2}'>
                        <div className="container">
                            <div className="page-title-content">
                                <h1>Blog</h1>
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>Blog</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* End Page Title Area */}
                    {/* Start Blog Details Area */}
                    <section className="blog-details-area ptb-80">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12" style={{ marginLeft: "220px" }}>
                                    <div className="blog-details">
                                        <div className="article-header">
                                            <ul className="entry-meta">
                                                <li>
                                                    <i className="icofont-user" /> <Link to="#">Animalll</Link>
                                                </li>
                                                <li>
                                                    <i className="icofont-calendar" /> April 08, 2021
                                                </li>

                                            </ul>
                                            <h3>The Most Popular New top Business Apps</h3>
                                        </div>
                                        <div className="article-img">
                                            <img src="assets/img/blog6.jpg" alt="" />
                                        </div>
                                        <div className="article-content">
                                            <p>
                                                It was popularised in the 1960s with the release of Letraset
                                                sheets containing Lorem Ipsum passages, and more recently with
                                                desktop publishing software like Aldus PageMaker including
                                                versions of Lorem Ipsum.
                                            </p>
                                            <p>
                                                Lorem Ipsum has been the industry’s standard dummy text ever
                                                since the 1500s, when an unknown printer took a galley of type
                                                and scrambled it to make a type specimen book.
                                            </p>
                                            <p>
                                                It has survived not only five centuries, but also the leap into
                                                electronic typesetting, remaining essentially unchanged.
                                            </p>
                                            <p>
                                                It was popularised in the 1960s with the release of Letraset
                                                sheets containing Lorem Ipsum passages, and more recently with
                                                desktop publishing software like Aldus PageMaker including
                                                versions of Lorem Ipsum.
                                            </p>
                                            <p>
                                                It is a long established fact that a reader will be distracted
                                                by the readable content of a page when looking at its layout.
                                            </p>
                                            <blockquote className="wp-block-quote">
                                                <p>
                                                    It is a long established fact that a reader will be distracted
                                                    by the readable content of a page when looking at its layout.
                                                </p>
                                                <cite>Tom Cruise</cite>
                                            </blockquote>
                                            <p>
                                                The point of using Lorem Ipsum is that it has a more-or-less
                                                normal distribution of letters, as opposed to using ‘Content
                                                here, content here’, making it look like readable English.
                                            </p>
                                            <p>
                                                Many desktop publishing packages and web page editors now use
                                                Lorem Ipsum as their default model text, and a search for ‘lorem
                                                ipsum’ will uncover many web sites still in their infancy.
                                            </p>
                                            <p>
                                                Various versions have evolved over the years, sometimes by
                                                accident, sometimes on purpose (injected humour and the like).
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                            <p>
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                cupidatat non proident, sunt in culpa qui officia deserunt
                                                mollit anim id est laborum.
                                            </p>
                                            <ul className="category">
                                                <li>
                                                    <span>Tags:</span>
                                                </li>
                                                <li>
                                                    <Link to="#">Business</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">IT</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Tips</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Design</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                    {/* End Blog Details Area */}
                </>

            </>


        </div>
    )
}


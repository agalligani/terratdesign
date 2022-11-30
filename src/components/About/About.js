import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import { Helmet } from "react-helmet";

const About = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Terrat Design | About</title>
                <meta name="description" content="Terrat Design - Providing Hotel, Restaurant & Residential designs for exclusive clients." />
                <meta name="keywords" content="Andrew Terrat, Interior Design, Modern design, Hotel Interiors,  Restaurant Interiors, Residential Interiors, Boston, Cape Cod, Provincetown, Marthas Vineyard, Nantucket" />
            </Helmet>        
            <div className="about-page">
            <header>
                <h1 className="page-title">
                    <span>about</span>
                </h1>
            </header>
            <article>
                <div className="about-page-article">
                    <p><div className="call-out">Terrat <span className="redred">Design</span></div> is a small but capable boutique design firm.</p>
                    <p>With over 20 years of interior design experience, our projects are as unique as our many clients. We ask, listen and deliver personalized interiors that suit a wide range of aesthetic and practical requirements. Never cookie-cutter, always personalized and appropriate.</p>    
                    <p>As just a two person firm, we only take on a handful of projects so we can focus intensely on our clients needs and goals. We work with a talented team of craftspeople, vendors & trades and manage all the phases of a project from initial inspiration to the final installation.</p>
                    <p>Our goal is to deliver spaces our clients will love looking at, and living in, for years to come.</p>
                </div>
                <ul className="about-page-images">
                    <li>
                    <div className="image-cropper">
                        <img src="images/about/aterrat.jpg"  className="gallery__img" alt="Andrew Terrat, Lead Designer" />
                    </div>
                    <h5>Andrew Terrat</h5>
                    <h5>
                        <span className="redred">Lead Designer</span>
                    </h5>
                    </li>
                    <li>
                        <div className="image-cropper">
                            <img src="images/about/jwilliamson.jpg"  alt="Jessie Williamson, Designer" />
                        </div>
                        <h5>Jessie Williamson</h5>
                        <h5>
                            <span className="redred">Designer</span>
                        </h5>
                    </li>
                </ul>
            </article>
            </div>
    
</React.Fragment>
    )
}

export default About;
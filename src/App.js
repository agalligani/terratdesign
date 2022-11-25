import React from "react";
import DesignNav from "./components/Navbar/DesignNav"
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import './styles/custom.scss';
import {
    HashRouter as Router,
    Routes,
    Route,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

const App = () => {

    return  (
        <Router>
            <Helmet>
                <title>Terrat Design | Boutique Interior Design</title>
                <meta name="description" content="Terrat Design - Providing Hotel, Restaurant & Residential designs for exclusive clients." />
                <meta name="keywords" content="Andrew Terrat, Interior Design, Modern design, Hotel Interiors,  Restaurant Interiors, Residential Interiors, Boston, Cape Cod, Provincetown, Marthas Vineyard, Nantucket" />
            </Helmet>
        <DesignNav />
        <Container>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/portfolio" element={<Home/>} />
                <Route path="/portfolio/:id" element={<Picker />} />
            </Routes>
        </Container>
        </Router>
    )
}

function Picker() {
    let { id } = useParams();
    let Id = id.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

    return (
            <Portfolio id={Id} />
    )
}

export default App;
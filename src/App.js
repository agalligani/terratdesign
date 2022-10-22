import React from "react";
import DesignNav from "./components/Navbar/DesignNav"
import Home from "./components/Home/Home";
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

const App = () => {

    return  (
        <Router>
        <DesignNav />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/portfolio" element={<Home/>} />
                <Route path="/portfolio/:id" element={<Picker />} />
            </Routes>
        </Router>
    )
}

function Picker() {
    let { id } = useParams();
    return (
        <Container>
            <Portfolio id={id} />
        </Container>
    )
}

export default App;
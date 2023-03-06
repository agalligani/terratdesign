import React from "react"
import { Outlet } from "react-router";
import DesignNav from "./Navbar/DesignNav";
import Footer from "./Footer/Footer" 

const Layout = () => {
  return (
    <>
        <DesignNav />
        <section className="main">
            <Outlet />
        </section>
        <Footer />
    </>
    )
}
export default Layout

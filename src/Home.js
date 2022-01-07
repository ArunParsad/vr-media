import React from "react";
import './style/Home.css';
import './style/HomeMobile.css'
import homeImg from './images/home.svg'
import { NavLink } from 'react-router-dom';
import Button from "./Components/Button";

const Home = () => {
  return (
    <>
    <section className="home-section container p-2">
      <section className="content">
    <h1 className="text-wrap main-heading"><span style={{color:"rgb(68 68 68)"}}>We ensure and transform</span> <br /><span style={{color:"#00BAFF"}}>Business Growing</span></h1>
      <section className="mobile-para">"Let's grow your business together."</section>
      <section className="dekstop-button">
      <NavLink to="/Services"><Button btnType="btn-hover color-9" className="get-started" text="Get Started" color="success" /></NavLink>
      <NavLink to="/About"><Button btnType="btn-hover color-1" text="Learn More" color="info" /></NavLink>
      </section>
      </section>
      <section className="img-section">
        <img src={homeImg} className="img-fluid" />
      </section>
      <section className="mobile-button">
      <NavLink to="/Services"><Button btnType="btn-hover color-9" className="get-started" text="Get Started" color="success" /></NavLink>
      <NavLink to="/About"><Button btnType="btn-hover color-1" text="Learn More" color="info" /></NavLink>
      </section>
      </section>
    </>
  );
};
export default Home;

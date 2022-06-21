import React from "react";
import "./style/Home.css";
import "./style/HomeMobile.css";
import homeImg from "./images/cartoon 17.png";
import { NavLink } from "react-router-dom";
import Button from "./Components/Button";

const Home = () => {
  return (
    <>
      <div className="container home-section">
          <div className="content">
            <h1 className="text-center text-wrap main-heading">
              We ensure and transform <span>Business Growing</span> 🚀
            </h1>
            <p className="text-center">"Let's grow your business together."</p>
            <div className="button d-flex justify-content-center">
              <NavLink to="/Services">
                <Button
                  btnType="btn-hover color-9"
                  className="get-started"
                  text="Get Started"
                  color="success"
                />
              </NavLink>
              <NavLink to="/Services">
                <Button
                  btnType="btn-hover color-1"
                  className="get-started"
                  text="Learn more"
                  color="success"
                />
              </NavLink>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <img src={homeImg} className="img-fluid" />
          </div>
      </div>
    </>
  );


};
export default Home;

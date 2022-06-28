import React from "react";
import "./AboutUs.css";
import aboutImg from "../images/cartoon 1.png";

const ProfileCard = () => {
  return (
    <>
      <section className="about container">
        <section className="content">
          <h2 className="font-weight-bold">ABOUT US</h2>
          <p>
            <h3>OUR STORY</h3>
            <p>
              Welcome to vr-media.vercel.app We specially known for our Services
              like search engine optimization, social media marketing, web
              development and Digital marketing. VR Digital Media wise creative
              company working on extensive projects in the field of Website
              Development and Digital marketing. VR Digital Media is a team of
              creative and experienced digital marketer, developer, designer who
              works by keeping a line in mind and the line is ‘Customer
              Satisfaction’. also offers digital marketing service to any size
              of company to make their brand in digital world.
            </p>
            <h3>VISION</h3>
            <p>
              Our main vision is To empower our customers to achieve their
              goals, by providing reliable and quality solutions with technology
              and innovation.
            </p>
            <h3>MISSION</h3>
            <p>
              Our main mission is To help entrepreneurs and creative thinkers
              convert their ideas into reality through the power of emotional
              intelligence by providing world class facilities to our team.
            </p>
          </p>
        </section>
        <section className="img">
          <img src={aboutImg} className="img-fluid" style={{width:'40rem'}} />
        </section>
      </section>
    </>
  );
};

export default ProfileCard;

import React from "react";
import "./AboutUs.css";
import aboutImg from '../images/about.svg'

const ProfileCard = () => {
  return (
    <>
      <section className="about container">
        <section className="content">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            voluptatum? Placeat exercitationem labore molestias at dicta maxime
            numquam, architecto facere id obcaecati enim minima voluptatum
            laborum distinctio? Cumque earum, odio incidunt aliquam atque
          </p>
          <button className="btn btn-primary">Learn more</button>
        </section>
        <section className="img">
            <img src={aboutImg} className="img-fluid" />
        </section>
      </section>
    </>
  );
};

export default ProfileCard;

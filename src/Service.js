import React from "react";
import ServiceCard from "./Components/ServiceCard";
import "./style/Service.css";
import socialImg from "./images/social media.svg";
import webDevImg from './images/webdev.svg'

export default function Service() {
  return (
    <>
    <div className="container mt-3">
      <h2 className="text-center">Here's what we offer</h2>
      <div className="service-items p-1 d-flex d-flex justify-content-around flex-wrap">
      <ServiceCard
        img={socialImg}
        heading="Social Media Management"
        details="We'll help in developing brand awareness and in strengthening engagement strategies to increase customer loyalty"
      />
      <ServiceCard
        img={webDevImg}
        heading="Social Media Management"
        details="We'll help in developing brand awareness and in strengthening engagement strategies to increase customer loyalty"
      />
      <ServiceCard
        img={socialImg}
        heading="Social Media Management"
        details="We'll help in developing brand awareness and in strengthening engagement strategies to increase customer loyalty"
      />
       <ServiceCard
        img={socialImg}
        heading="Social Media Management"
        details="We'll help in developing brand awareness and in strengthening engagement strategies to increase customer loyalty"
      />
      <ServiceCard
        img={socialImg}
        heading="Social Media Management"
        details="We'll help in developing brand awareness and in strengthening engagement strategies to increase customer loyalty"
      />
      <ServiceCard
        img={socialImg}
        heading="Social Media Management"
        details="We'll help in developing brand awareness and in strengthening engagement strategies to increase customer loyalty"
      />
      </div>
    </div>
      
    </>
  );
}

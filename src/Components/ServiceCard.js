import React from "react";
import "./ServiceCard.css";

export default function ServiceCard(props) {
  return (
    <>
      <div className="card shadow p-3 mb-5 bg-white rounded" style={{ width: "20rem" }}>
        <img className="card-img-top" src={props.img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title text-center">{props.heading}</h5>
          <p className="card-text text-center">
            {props.details}
          </p>
        </div>
      </div>
    </>
  );
}

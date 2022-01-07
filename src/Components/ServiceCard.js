import React from "react";
import "./ServiceCard.css";

export default function ServiceCard(props) {
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <img class="card-img-top" src={props.img} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title text-center">{props.heading}</h5>
          <p class="card-text text-center">
            {props.details}
          </p>
        </div>
      </div>
    </>
  );
}

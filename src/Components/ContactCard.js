import React from "react";
const ContactCard = (props) => {
  return (
    <>
    <div className="card" style={{ width: "18rem" }}>
  <div className="card-body">
    <h5 className="card-title text-center"><span>{props.icon}</span></h5>
    <h5 className="text-center">{props.text}</h5>
  </div>
</div>
    </>
  );
};

export default ContactCard;

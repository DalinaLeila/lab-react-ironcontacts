import React from "react";

const Contact = props => {
  return (
    <>
      <tr>
        <td>
          <img width="150px" src={props.img} alt="" />
        </td>
        <td>{props.name}</td>
        <td>{props.popularity}</td>
        <button className="delete" onClick={() => props.delete(props.index)}>
          Delete Contact
        </button>
      </tr>
    </>
  );
};

export default Contact;

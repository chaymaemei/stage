import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <style>
      {`
          .footer {
            color: black;
            padding: 10px;
            background: #f2f2f2; /* Set your desired lighter background color */
          }

          .footer a {
            text-decoration: none;
            color: black;
            padding: 10px;
          }

          .footer a:hover {
            color: black;
            border-bottom: 1px solid black;
          }
        `}
      </style>
      <div className="footer">
        <h5 className="text-center">All Rights Reserved &copy; Hibarij s.a.r.l</h5>
        <p className="text-center ml-2 mt-3">
          <Link to="/contact">Contact Us</Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
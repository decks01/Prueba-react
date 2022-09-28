import React from "react";
import ImgCircule from "./ImgCircule";
import { AiOutlineUserAdd } from "react-icons/ai";
// import { AiFillStar } from "react-icons/ai";
import Avatar from "./Avatar";

const Polls = ({ data }) => {
  return (
    <div className="about">
      <div className="card card-about ">
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">Polls</h6>
          <p> Who is better? </p>


          <div>RDJ</div>
          <div className="progress">
         
            <div
              className="progress-bar"
              role="progressbar"
              aria-label="Basic example"
              style={{width: '70%'}}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <Avatar />
          <div>Christian Omar</div>
          <div className="progress">
         
            <div
              className="progress-bar"
              role="progressbar"
              aria-label="Basic example"
              style={{width: '80%'}}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <Avatar />
       
        </div>
      </div>
    </div>
  );
};

export default Polls;

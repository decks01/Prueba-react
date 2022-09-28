import React from "react";
import ImgCircule from "./ImgCircule";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const Twitter = ({ data }) => {
  return (
    <div className="about">
      <div className="card card-about ">
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">Twitter Feeds</h6>
          {data.map((item) => {
            return (
              <>
                <div className="row Suggest">
                  <div className="row Suggest">
                    <ImgCircule width="40px" img={item.img} />
                    <div>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {item.nombre} Company
                      </h6>

                      <p className="info-text">{item.twitter}</p>
                    </div>
                  </div>

                  <div>
                    {item.favorite ? (
                      <AiFillStar color="#9f9f4a" size="1.4rem" />
                    ) : (
                      <AiOutlineStar size="1.4rem" />
                    )}
                  </div>
                </div>
                <div>{item.about}</div>
                <div className="row twwi">
                  <a>#{item.tag}</a>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Twitter;

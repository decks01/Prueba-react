import React, { useState } from "react";
import IndexFeed from "./Index";
import "../Styles/Style.scss";

import fondo1 from "../img/fondo.jpg";
import fondo2 from "../img/fondo2.jpg";
import fondo3 from "../img/fondo3.jpg";
import fondo4 from "../img/person3.jpg";

import person from "../img/person1.jpg";

import person2 from "../img/person5.jpg";
import person4 from "../img/person4.jpg";

// import AvatarGroup from "react-avatar-group";
import ImgCircule from "../components/ImgCircule";

import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import Avatar from "../components/Avatar";

const dataPublicacion = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Gonzalez",
    publicacion: "november 15, 2021",
    lived: "New York, USA",
    email: "Juan@gmail.com",
    website: "www.juan.com",
    img: person,
    amigos: 5,
    puesto: "UX/Designer",
    comment: [
      {
        nombre: "Juan",
        apellido: "Gonzalez",
        img: person,
        comment:
          "Tart I love sugar plum I Love oat cake, Sweet ♥ roll carramell",
        heart: true,
      },
      {
        nombre: "Juan",
        apellido: "Gonzalez",
        img: person2,
        comment:
          "Tart I love sugar plum I Love oat cake, Sweet ♥ roll carramell",
        heart: true,
      },
      {
        nombre: "Juan",
        apellido: "Gonzalez",
        img: person4,
        comment:
          "Tart I love sugar plum I Love oat cake, Sweet ♥ roll carramell",
        heart: true,
      },
      {
        nombre: "Juan",
        apellido: "Gonzalez",
        img: person4,
        comment:
          "Tart I love sugar plum I Love oat cake, Sweet ♥ roll carramell",
        heart: true,
      },
    ],
    like: 50,
    share: 45,
    commentN: 2,
    heart: true,
    photo: fondo1,
    likes: [
      { nombre: "omar" },
      { nombre: "sergio" },
      { nombre: "ismael" },
      { nombre: "Carlos" },
    ],
  },
  {
    id: 2,
    nombre: "Carlos",
    apellido: "Avalos",
    join: "november 15, 2015",
    lived: "New York, USA",
    email: "Juan@gmail.com",
    website: "www.juan.com",
    publicacion: "november 15, 2021",
    img: person2,
    amigos: 5,
    puesto: "UX/Designer",
    comment: [
      {
        nombre: "Juan",
        apellido: "Gonzalez",
        img: person2,
        comment:
          "Tart I love sugar plum I Love oat cake, Sweet ♥ roll carramell",
        heart: true,
      },
      {
        nombre: "Juan",
        apellido: "Gonzalez",
        img: person2,
        comment:
          "Tart I love sugar plum I Love oat cake, Sweet ♥ roll carramell",
        heart: true,
      },
      {
        nombre: "Juan",
        apellido: "Gonzalez",
        img: person2,
        comment:
          "Tart I love sugar plum I Love oat cake, Sweet ♥ roll carramell",
        heart: true,
      },
      {
        nombre: "Juan",
        apellido: "Gonzalez",
        img: person4,
        comment:
          "Tart I love sugar plum I Love oat cake, Sweet ♥ roll carramell",
        heart: true,
      },
    ],
    like: 50,
    share: 45,
    commentN: 1,
    heart: false,
    photo: fondo1,
    likes: [
      { nombre: "omar" },
      { nombre: "sergio" },
      { nombre: "ismael" },
      { nombre: "Carlos" },
    ],
  },
  {
    id: 3,
    nombre: "Christian",
    apellido: "Gonzalez",
    publicacion: "october 01, 2021",
    twitter: "@Christian234",
    tag: ["React", "code"],
    favorite: true,
    img: person4,
    comment: [
      {
        nombre: "Juan",
        apellido: "Gonzalez",
        img: person2,
        comment:
          "Tart I love sugar plum I Love oat cake, Sweet ♥ roll carramell",
        heart: true,
      },
      {
        nombre: "Juan",
        apellido: "Gonzalez",
        img: person2,
        comment:
          "Tart I love sugar plum I Love oat cake, Sweet ♥ roll carramell",
        heart: true,
      },
      {
        nombre: "Juan",
        apellido: "Gonzalez",
        img: person2,
        comment:
          "Tart I love sugar plum I Love oat cake, Sweet ♥ roll carramell",
        heart: true,
      },
      {
        nombre: "Juan",
        apellido: "Gonzalez",
        img: person4,
        comment:
          "Tart I love sugar plum I Love oat cake, Sweet ♥ roll carramell",
        heart: true,
      },
    ],
    like: 50,
    share: 45,
    commentN: 1,
    heart: false,
    photo: fondo3,
    likes: [
      { nombre: "omar" },
      { nombre: "sergio" },
      { nombre: "ismael" },
      { nombre: "Carlos" },
    ],
  },
  {
    id: 4,
    nombre: "Fernando",
    apellido: "Mendez",
    publicacion: "diciembre 20, 2021",
    twitter: "@Fernando234",
    tag: ["vue", "code", "coffe"],
    favorite: true,
    img: person,
    comment: [
      {
        nombre: "Juan",
        apellido: "Gonzalez",
        img: person,
        comment:
          "Tart I love sugar plum I Love oat cake, Sweet ♥ roll carramell",
        heart: true,
      },
      {
        nombre: "Juan",
        apellido: "Gonzalez",
        img: person4,
        comment:
          "Tart I love sugar plum I Love oat cake, Sweet ♥ roll carramell",
        heart: true,
      },
      {
        nombre: "Juan",
        apellido: "Gonzalez",
        img: person2,
        comment:
          "Tart I love sugar plum I Love oat cake, Sweet ♥ roll carramell",
        heart: true,
      },
      {
        nombre: "Juan",
        apellido: "Gonzalez",
        img: person,
        comment:
          "Tart I love sugar plum I Love oat cake, Sweet ♥ roll carramell",
        heart: true,
      },
    ],
    like: 12,
    share: 34,
    commentN: 1,
    heart: false,
    photo: fondo2,
    likes: [
      { nombre: "omar" },
      { nombre: "sergio" },
      { nombre: "ismael" },
      { nombre: "Carlos" },
    ],
  },
];

export function CardFeedPage(data) {
  const [heart, setHeart] = useState(false);

  return (
    <>
      {dataPublicacion.map((item) => {
        return (
          <div className="CardFeedPage">
            <div className="card card-about ">
              <div className="card-body bodyCardFeedPage">
                <div className="row container-titulo">
                  <ImgCircule img={item.img} />
                  <div className="info">
                    <h6 className="card-subtitle mb-2 text-muted">
                      {item.nombre} {item.apellido}
                    </h6>
                    <p className="info-text">{item.publicacion}</p>
                  </div>
                </div>
                <p>
                  {" "}
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.♥{" "}
                </p>
                <div className="photo-feed">
                  <img src={item.photo} />
                </div>
                <div className="footer-photo">
                  <div className="footer-photo">
                    {item.heart ? (
                      <AiFillHeart color="red" size="1.5em" />
                    ) : (
                      <AiOutlineHeart size="1.5em" />
                    )}
                    {item.like}
                    <Avatar />
                  </div>
                  <div className="share">
                    <BiComment size="1.5em" /> {item.commentN}
                    <AiOutlineShareAlt size="1.5em" /> {item.share}
                  </div>
                </div>

                {item.comment.map((data) => {
                  return (
                    <div className="row container-titulo">
                      <ImgCircule img={data.img} />
                      <div className="info comment">
                        <>
                          <p className="card-subtitle mb-2 text-muted">
                            {data.nombre} {data.apellido}
                          </p>
                          <p className="commenta">{data.comment}</p>
                        </>
                      </div>
                    </div>
                  );
                })}

                <div className="add-comment">
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                  ></textarea>
                </div>
                <button className="btn-primary btn"> Add Comment</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

const CardFeed = () => {
  return (
    <IndexFeed>
      <CardFeedPage data={dataPublicacion} />
    </IndexFeed>
  );
};

export default CardFeed;

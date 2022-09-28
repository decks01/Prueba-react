import React from "react";
import IndexFeed from "./Index";
import "../Styles/Style.scss";

import person1 from '../img/person1.jpg'

import person2 from "../img/w1.jpg";
import person3 from "../img/w3.png";
import person6 from "../img/p3.jpg";
import person4 from "../img/person4.jpg";
import person5 from "../img/person5.jpg";

const dataUser = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Gonzalez",
    join: "november 15, 2015",
    lived: "New York, USA",
    email: "Juan@gmail.com",
    website: "www.juan.com",
    img: person1,
    favorite: false,
    tag: ["Linux", "Hat"],
    amigos: 5,
    twitter: "@jergos",
    puesto: "UX/Designer",
    about: "Tart I love sugar plum I Love oat cake, Sweet ♥ roll carramell",
  },
  {
    id: 2,
    nombre: "Carlos",
    apellido: "Avalos",
    join: "november 15, 2015",
    lived: "New York, USA",
    email: "Juan@gmail.com",
    website: "www.juan.com",
    img: person4,
    twitter: "@carlios",
    amigos: 5,
    tag: ["React", "code"],
    favorite: true,
    puesto: "UX/Designer",
    about: "Tart I love sugar plum I Love oat cake, Sweet ♥ roll carramell",
  },
  {
    id: 3,
    nombre: "Christian",
    apellido: "Gonzalez",
    twitter: "@Christian234",
    tag: ["React", "code"],
    favorite: true,
    img: person5,
  },
  {
    id: 4,
    nombre: "Fernando",
    apellido: "Mendez",
    twitter: "@Fernando234",
    tag: ["vue", "code", "coffe"],
    favorite: false,
    img: person2,
  },
  {
    id: 5,
    nombre: "Marisol",
    apellido: "Hernan",
    twitter: "@Marisol345",
    tag: ["UX", "python", "Code"],
    favorite: true,
    img: person3,
  },
  {
      id: 6,
      nombre: "Christian",
      apellido: "Gonzalez",
      twitter: "@Christian234",
      tag: ["React", "code"],
      favorite: true,
      img: person3,
    },
    {
      id: 7,
      nombre: "Fernando",
      apellido: "Mendez",
      twitter: "@Fernando234",
      tag: ["vue", "code", "coffe"],
      favorite: false,
      img: person1,
    },
    {
      id: 8,
      nombre: "Marisol",
      apellido: "Hernan",
      twitter: "@Marisol345",
      tag: ["UX", "python", "Code"],
      favorite: true,
      img: person4,
    },
    {
      id: 9,
      nombre: "Marisol",
      apellido: "Hernan",
      twitter: "@Marisol345",
      tag: ["UX", "python", "Code"],
      favorite: true,
      img: person3,
    },
];
export function LatestPhotosPage({ data }) {
  return (
    <>
      <div className="about">
        <div className="card card-about ">
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">Latest Photos</h6>
            <div className="grid-photos">
              {dataUser.map((item) => {
                return (
                  <>
                    <div>
                      <img src={item.img} />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const LatestPhotos = () => {
  return (
    <IndexFeed>
      <LatestPhotosPage />
    </IndexFeed>
  );
};

export default LatestPhotos;

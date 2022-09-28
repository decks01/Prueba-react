import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import person1 from "../img/person1.jpg";
import person2 from "../img/w1.jpg";
import person3 from "../img/w3.png";
import person6 from "../img/p3.jpg";
import person4 from "../img/person4.jpg";
import person5 from "../img/person5.jpg";

import { AboutPage } from "./About";
import CardFeedPage from "./CardFeed";
import {LatestPhotosPage} from "./LatestPhotos"
import Suggest from "../components/Suggest";
import Suggestion from "../components/Suggestion";
import Twitter from "../components/Twitter";
import Polls from "../components/Polls";


function IndexFeed({ children }) {

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

  return (
    <>
      <div className="contain-index">
        <Header data={dataUser} />
        <div className="container-feed">
          <div className="feed">
            <div className="col-3">
                <AboutPage data={dataUser} />
                <Suggest data={dataUser}/>
                <Twitter data={dataUser}/>
            </div>
            <div className="col-12 col-lg">
                {children}
                {/* <CardFeedPage /> */}
            </div>
            <div className="col-3">
                 {/* <AboutPage /> */}
                <LatestPhotosPage data={dataUser}/>    
                <Suggestion data={dataUser} />
                <Polls data={dataUser} />

                
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

// export default Index;

export default function Index({ children }) {
  return <IndexFeed children={children} />;
}

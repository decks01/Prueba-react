import React from "react";
import IndexFeed from "./Index";
import "../Styles/Style.scss";

export function AboutPage({data}) {
  return (
    <>
      <div className="about">
        <div className="card card-about "   >
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">About</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.♥ 
            </p>

            <h6 className="card-subtitle mb-2 text-muted">Joined</h6>
            <p className="card-text">
              {data[1].join}
            </p>

            <h6 className="card-subtitle mb-2 text-muted">lives</h6>
            <p className="card-text">
              {data[1].lived}
            </p>

            <h6 className="card-subtitle mb-2 text-muted">Email</h6>
            <p className="card-text">
              {data[1].email}
            </p>

            <h6 className="card-subtitle mb-2 text-muted">Website</h6>
            <p className="card-text">
              {data[1].website}
            </p>




          </div>
        </div>
      </div>
    </>
  );
}

const About = () => {

  const dataUser = [
    {
      id: 1,
      nombre: "Juan",
      apellido: "Gonzalez",
      join: "november 15, 2015",
      lived: "New York, USA",
      email: "Juan@gmail.com",
      website: "www.juan.com",
      amigos: 5,
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
      amigos: 5,
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
    },
    {
      id: 4,
      nombre: "Fernando",
      apellido: "Mendez",
      twitter: "@Fernando234",
      tag: ["vue", "code", "coffe"],
      favorite: false,
    },
    {
      id: 5,
      nombre: "Marisol",
      apellido: "Hernan",
      twitter: "@Marisol345",
      tag: ["UX", "python", "Code"],
      favorite: true,
    },
    {
        id: 6,
        nombre: "Christian",
        apellido: "Gonzalez",
        twitter: "@Christian234",
        tag: ["React", "code"],
        favorite: true,
      },
      {
        id: 7,
        nombre: "Fernando",
        apellido: "Mendez",
        twitter: "@Fernando234",
        tag: ["vue", "code", "coffe"],
        favorite: false,
      },
      {
        id: 8,
        nombre: "Marisol",
        apellido: "Hernan",
        twitter: "@Marisol345",
        tag: ["UX", "python", "Code"],
        favorite: true,
      },
      {
        id: 9,
        nombre: "Marisol",
        apellido: "Hernan",
        twitter: "@Marisol345",
        tag: ["UX", "python", "Code"],
      },
  ];

  return (
    <IndexFeed>
      <AboutPage data={dataUser}/>
    </IndexFeed>
  );
};

export default About;

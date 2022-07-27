import React from "react";
import "../hoja-de-estilos/Public.css";
import dots from "../assets/icons/dots.svg";
import profile from "../assets/profile.jpg";
import ContentImages from "./ContentImages";

function Public({ newPublic }) {
  console.log("desde public", newPublic);
  return (
    <div className="public">
      <button className="public-button">
        <img src={dots} alt="Menú de Opciones" />
      </button>
      <div className="public-date">
        <div className="date-conte">
          <a
            className="link-public"
            href="https://twitter.com/yummta?lang=es"
            target="_blank"
          >
            <img
              className="date-img"
              src={profile}
              alt="Foto de perfil del usuario"
            />
          </a>
          <div className="date-text">
            <a
              className="link-public"
              href="https://twitter.com/yummta?lang=es"
              target="_blank"
            >
              <h3>Igor R</h3>
            </a>
            <p>27 de Julio 2022</p>
          </div>
        </div>
      </div>
      <div className="text">
        <p>{newPublic}</p>
      </div>
      <ContentImages />
    </div>
  );
}

export default Public;

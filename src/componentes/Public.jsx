import React from "react";
import '../hoja-de-estilos/Public.css'
import dots from '../assets/icons/dots.svg'
import profile from '../assets/profile.jpg'

function Public() {
  return (
    <div class="public">
      <button class="public-button">
        <img src={dots} alt="Menú de Opciones" />
      </button>
      <div class="public-date">
        <div class="date-conte">
          <a
            class="link-public"
            href="https://twitter.com/yummta?lang=es"
            target="_blank"
          >
            <img
              class="date-img"
              src={profile}
              alt="Foto de perfil del usuario"
            />
          </a>
          <div class="date-text">
            <a
              class="link-public"
              href="https://twitter.com/yummta?lang=es"
              target="_blank"
            >
              <h3>Paul Portillo</h3>
            </a>
            <p>04 de Julio, 2022</p>
          </div>
        </div>
      </div>
      <div class="text">
        <p>
          Hoy aprendí a usar Git. Aprendi a crear un branch, commitear mis
          cambios, hacer pull request y mergearlo!
        </p>
      </div>
    </div>
  );
}

export default Public;

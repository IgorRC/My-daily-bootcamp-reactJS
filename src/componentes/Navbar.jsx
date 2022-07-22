import React from "react";
import '../hoja-de-estilos/Navbar.css'

function Navbar() {

  return (
    <div class="header-wrapper">
      <header class="header">
        <nav class="nav">
          <ul class="nav-list">
            <li class="nav-item">
              <a class="nav-link active" href="#"> All </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> Me </a>
            </li>
          </ul>
        </nav>
        <div class="header-logo">
          <a class="logo-link" href="index.html">
            <img class="logo-img" src="./assets/logo.svg" alt="bootcamp logo" />
            <h2 class="logo-text">My Daily Bootcamp</h2>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Navbar;

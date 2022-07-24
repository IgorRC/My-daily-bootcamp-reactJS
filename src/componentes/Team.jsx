import React from "react";
import "../hoja-de-estilos/Team.css";
import imgFirts from "../assets/team/team-1.jpg";
import imgSecond from "../assets/team/team-2.jpg";
import imgThird from "../assets/team/team-3.jpg";
import imgFourth from "../assets/team/team-4.jpg";

function Team() {
  return (
    <div class="teams">
      <h2>My team</h2>
      <div class="container-team">
        <div class="date-teams1">
          <a class="link-team" href="#">
            <img class="team-img" src={imgFirts} alt="Alden Cantrell" />
            <p class="text-teams">Alden Cantrell</p>
          </a>
        </div>
        <div class="date-teams">
          <a class="link-team" href="#">
            <img class="team-img" src={imgSecond} alt="Thomas Crane" />
            <p>Thomas Crane</p>
          </a>
        </div>
        <div class="date-teams">
          <a class="link-team" href="#">
            <img class="team-img" src={imgThird} alt="Miranda Shaffer" />
            <p>Miranda Shaffer</p>
          </a>
        </div>
        <div class="date-teams2">
          <a class="link-team" href="#">
            <img class="team-img" src={imgFourth} alt="Alvaro Mcgee" />
            <p>Alvaro Mcgee</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Team;

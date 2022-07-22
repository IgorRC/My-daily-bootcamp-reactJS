import React from 'react'
import '../hoja-de-estilos/SidebarLeft.css'
import imgtest from '../assets/me.jpg'
import imgtest1 from '../assets/team/team-1.jpg'
import imgtest2 from '../assets/team/team-2.jpg'
import imgtest3 from '../assets/team/team-3.jpg'
import imgtest4 from '../assets/team/team-4.jpg'
function SidebarLeft() {

  return (<div class="sidebar-left">
    <div class="Profile-card">
      <img src={imgtest} alt="Perfil del usuario" />
      <h3>Paul Portillo</h3>
      <span>Software Enginner</span>
      <div class="buttom">
        <a
          href="https://twitter.com/yummta?lang=es"
          target="_blank"
          class="profile-c"
        ><b>@yummta</b></a
        >
        <a
          href="https://www.linkedin.com/jobs/?originalSubdomain=pe"
          target="_blank"
          class="profile-c"
        ><b>LinkedIn</b></a
        >
      </div>
    </div>

    <div class="teams">
      <h2>My team</h2>
      <div class="container-team">
        <div class="date-teams1">
          <a class="link-team" href="#">
            <img
              class="team-img"
              src={imgtest1}
              alt="Alden Cantrell"
            />
            <p class="text-teams">Alden Cantrell</p>
          </a>
        </div>
        <div class="date-teams">
          <a class="link-team" href="#">
            <img
              class="team-img"
              src={imgtest2}
              alt="Thomas Crane"
            />
            <p>Thomas Crane</p>
          </a>
        </div>
        <div class="date-teams">
          <a class="link-team" href="#">
            <img
              class="team-img"
              src={imgtest3}
              alt="Miranda Shaffer"
            />
            <p>Miranda Shaffer</p>
          </a>
        </div>
        <div class="date-teams2">
          <a class="link-team" href="#">
            <img
              class="team-img"
              src={imgtest4}
              alt="Alvaro Mcgee"
            />
            <p>Alvaro Mcgee</p>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}
export default SidebarLeft

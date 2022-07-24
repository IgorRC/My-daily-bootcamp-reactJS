import React from "react";
import '../hoja-de-estilos/ProfileCard.css'
import img from '../assets/me.jpg'

function ProfileCard(){
 return(
	<div className="Profile-card">
     <div class="Profile-card">
          <img src={img} alt="Perfil del usuario" />
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
  </div>
 )
}

export default ProfileCard;
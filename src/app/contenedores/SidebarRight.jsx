import React from "react";
import "../estilos-contenedores/sidebarRigth.css";


function SidebarRight() {
  return (
    <div class="sidebar-right">
      <div class="stories">
        <h2 class="tittle-stories">Stories</h2>
        <ul class="stories-sqare">
          <li class="frame-storie">
            <figure class="img-storie1 img-storie">
              <img class="profile-photo" src="src/assets/stories/bg-1.jpg" />
              <img class="profile-photo" src="src/assets/stories/bg-2.jpg" />
              <img class="profile-photo" src="src/assets/stories/bg-3.jpg" />
            </figure>
          </li>
        </ul>
      </div>

      <section class="news-section">
        <div class="news-card">
          <article class="news-article news-article1">
            <h4 class="news-tittle">Bootcamp X</h4>
            <span class="news-text">Learn working in a real environment</span>
            <a class="news-button" href="/">
              Explore All
            </a>
          </article>
          <div class="news-footer">
            <figure class="news-avatars">
              <img
                class="avatar avatar1"
                src="src/assets/companies/profile-1.jpg"
                alt="photo 1"
              />
              <img
                class="avatar avatar2"
                src="src/assets/companies/profile-2.jpg"
                alt="photo 2"
              />
              <img
                class="avatar avatar3"
                src="src/assets/companies/profile-3.jpg"
                alt="photo 3"
              />
            </figure>
            <span class="participants-text">12 participants</span>
          </div>
        </div>

        <div class="news-card">
          <article class="news-article news-article1">
            <h4 class="news-tittle">Bootcamp X</h4>
            <span class="news-text">Learn working in a real environment</span>
            <a class="news-button" href="/">
              Explore All
            </a>
          </article>
          <div class="news-footer">
            <figure class="news-avatars">
              <img
                class="avatar avatar1"
                src="src/assets/companies/profile-1.jpg"
                alt="photo 1"
              />
              <img
                class="avatar avatar2"
                src="src/assets/companies/profile-2.jpg"
                alt="photo 2"
              />
              <img
                class="avatar avatar3"
                src="src/assets/companies/profile-3.jpg"
                alt="photo 3"
              />
            </figure>
            <span class="participants-text">12 participants</span>
          </div>
        </div>
      </section>

      <div class="contactos-1">
        <h2 class="follow">Who to follow</h2>
        <div class="follow-recomend">
          <div class="follow-spacing">
            <div class="contacto-frank">
              <figure class="imagen-follow">
                <img
                  src="src/assets/instructors/Ellipse 31.png"
                  alt="foto de perfil de Frank Condezo"
                  class="imagen-1.2"
                />
              </figure>
              <p class="correo">@condef5</p>
              <img src="src/assets/companies/vector.png" alt="" class="imagen-1"/>
              <a
                type="button"
                class="enlaces-follow"
                href="https://twitter.com/condef5"
              >
                Follow
              </a>
            </div>

            <div class="contacto-paul">
              <figure class="imagen-follow">
                <img
                  src="src/assets/instructors/Ellipse 32.png "
                  alt="imagen de verificacion de la cuenta"
                  class="imagen-12"
                />
              </figure>
              <p class="correo">@yummta</p>
              <img src="src/assets/companies/vector.png" alt="" class="imagen-2"/>
              <a
                type="button"
                class="enlaces-follow"
                href="https://twitter.com/condef5"
              >
                Follow
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer">
        <p>
          Bootcamp X &copy; <span id="date"></span>
        </p>
      </footer>
    </div>
  );
}
export default SidebarRight;

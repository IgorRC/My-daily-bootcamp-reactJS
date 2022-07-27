import React, { useEffect } from "react";
import "../hoja-de-estilos/Team.css";
import imgFirts from "../assets/team/team-1.jpg";
import imgSecond from "../assets/team/team-2.jpg";
import imgThird from "../assets/team/team-3.jpg";
import imgFourth from "../assets/team/team-4.jpg";

function Team() {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const post = await fetch(
      "https://my-daily-bootcamp.herokuapp.com/users.json"
    );
    const infoPost = await post.json();
    //console.log(infoPost);
    setPosts([...infoPost]);
  };

  if (posts.length == 0) {
    return <></>;
  }
  console.log(posts);

  return (
    <div className="teams">
      <h2>My team</h2>
      <div class="container-team">
        {posts.map((element) => {
          console.log(element);
          return (
            <div class="date-teams">
              <a class="link-team" href="#">
                <img
                  class="team-img"
                  src={element.profile_url}
                  alt="Alden Cantrell"
                />
                <p class="text-teams">{element.full_name}</p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Team;

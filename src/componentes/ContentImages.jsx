import React, { useState } from "react";
import "../hoja-de-estilos/ContentImages.css";
import imgIgor from "../assets/imagenes/igor.jpg";
import imgFrank from "../assets/imagenes/frank.jpg";
import imgFrida from "../assets/imagenes/frida.jpg";

function ContentImages() {
  const [images, setImages] = useState({
    1: "image1",
    2: "image2",
    3: "image3",
  });

  return (
    <div className="container-img-third">
      <div className="img-big">
        <img className="sub-img-big " src={imgFrank} alt="" />
      </div>
      <div className="img-right">
        <div className="img-small">
          <img className="sub-img-small" src={imgFrida} alt="" />
        </div>
        <div className="img-small">
          <img className="sub-img-small" src={imgIgor} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ContentImages;

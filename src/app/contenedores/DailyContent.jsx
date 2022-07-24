import React from "react";
import LearningContent from "../../componentes/LearningContent";
import Public from "../../componentes/Public";
import '../estilos-contenedores/DailyContent.css'


function DailyContent() {

  return (
  <div className="add-new-content">
    <LearningContent/>
    <Public/>
  </div>
  );
}

export default DailyContent;

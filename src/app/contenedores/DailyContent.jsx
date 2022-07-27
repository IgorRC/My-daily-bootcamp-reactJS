import React from "react";
import LearningContent from "../../componentes/LearningContent";
import Public from "../../componentes/Public";
import "../estilos-contenedores/DailyContent.css";

function DailyContent({ setStateModal, state, newPublic, publication }) {
  let publications = publication;
  return (
    <div className="add-new-content">
      <LearningContent setStateModal={setStateModal} state={state} />
      {publications.map((p) => {
        return <Public newPublic={p} />;
      })}
    </div>
  );
}

//prop dirigin
export default DailyContent;

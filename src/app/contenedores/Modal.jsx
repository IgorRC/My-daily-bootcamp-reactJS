import React, { useState } from "react";
import "../estilos-contenedores/Modal.css";

function Modal({
  stateModal,
  setStateModal,
  setPublic,
  publication,
  setPublication,
}) {
  const [learningText, setLearningText] = useState("");
  const closeModal = () => {
    setStateModal(false);
  };

  let auxPublic = [];

  const newPublish = () => {
    console.log(learningText);
    setPublic(learningText);
    auxPublic.push(...publication);
    auxPublic.push(learningText);
    console.log(auxPublic);
    setPublication(auxPublic);
    setStateModal(false);
  };

  const handlerLearningText = (event) => {
    setLearningText(event.target.value);
  };

  return (
    <>
      <div
        className={`modal ${stateModal && "is-visible"}`}
        id="modal1"
        data-animation="slideInOutLeft"
      >
        <div className="modal-dialog">
          <div className="container-button-close">
            <button
              className="close-modal"
              aria-label="close modal"
              data-close
              onClick={closeModal}
            >
              x
            </button>
          </div>
          <div className="container-input">
            <header className="modal-header">
              What did you learn today Paul?
            </header>
            <section className="modal-content">
              <textarea
                className="text-content"
                name=""
                id=""
                cols="30"
                rows="10"
                maxLength={280}
                placeholder="Today I learnd..."
                value={learningText}
                onChange={handlerLearningText}
              ></textarea>
              <span className="from-user">
                From: desde tingo para el mundo :u
              </span>
            </section>
            <footer className="modal-footer">
              <button className="publish" onClick={newPublish}>
                Publish
              </button>
            </footer>
          </div>
        </div>
      </div>
      <footer className="page-footer"></footer>
    </>
  );
}

export default Modal;

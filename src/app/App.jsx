import "./App.css";
import Navbar from "../componentes/Navbar";
import SidebarLeft from "./contenedores/SidebarLeft";
import DailyContent from "./contenedores/DailyContent";
import SidebarRight from "./contenedores/SidebarRight";
import Modal from "./contenedores/Modal";
import { useState } from "react";

import imgIgor from "../assets/imagenes/igor.jpg";
import imgFrank from "../assets/imagenes/frank.jpg";
import imgFrida from "../assets/imagenes/frida.jpg";

function App() {
  const [stateModal, setStateModal] = useState(false);
  const [newPublic, setPublic] = useState("");
  const [publication, setPublication] = useState(["hola mundo"]);
  const [imgesThrid, setImagesThird] = useState([imgFrank, imgFrida, imgIgor]);
  const [imgesTwo, setImagesTwo] = useState([imgFrank, imgFrida]);
  const [imgesOne, setImagesOne] = useState([imgFrank]);
  const [imagen, setImagen] = useState([]);
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <SidebarLeft />
        <DailyContent
          setStateModal={setStateModal}
          newPublic={newPublic}
          publication={publication}
        />
        <SidebarRight />
      </div>
      <Modal
        stateModal={stateModal}
        setStateModal={setStateModal}
        setPublic={setPublic}
        publication={publication}
        setPublication={setPublication}
      />
    </div>
  );
}

export default App;

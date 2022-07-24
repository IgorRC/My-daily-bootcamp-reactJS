import './App.css'
import Navbar from '../componentes/Navbar'
import SidebarLeft from "../componentes/SidebarLeft"


function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className='main'>
        <SidebarLeft/>
      </div>
      
    </div>
  )
}

export default App

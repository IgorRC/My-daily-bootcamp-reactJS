import './App.css'
import Navbar from '../componentes/Navbar'
import SidebarLeft from "./contenedores/SidebarLeft"
import DailyContent from './contenedores/DailyContent'
import SidebarRight from './contenedores/SidebarRight'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className='main'>
        <SidebarLeft/>
        <DailyContent/>
        <SidebarRight/>
      </div>
      
    </div>
  )
}

export default App

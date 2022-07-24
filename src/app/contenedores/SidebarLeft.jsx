import React from 'react'
import '../estilos-contenedores/SidebarLeft.css'
import Team from '../../componentes/Team'
import ProfileCard from '../../componentes/ProfileCard'

function SidebarLeft() {

  return (
  <div className="sidebar-left">
    <ProfileCard/>
    <Team/>
  </div>
  )
}
export default SidebarLeft

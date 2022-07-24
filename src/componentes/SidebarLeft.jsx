import React from 'react'
import ProfileCard from './ProfileCard'
import Team from './Team'
import '../hoja-de-estilos/SidebarLeft.css'

function SidebarLeft() {

  return (
  <div className="sidebar-left">
    <ProfileCard/>
    <Team/>
  </div>
  )
}
export default SidebarLeft

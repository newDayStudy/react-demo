import React from 'react'
import logo from '@/assets/logo.svg'
const style = {
  textAlign: 'center'
}
function Logo() {
  return (
    <div style={style}>
      <img src={logo} height="64"/>
    </div>
  )
}
export default Logo
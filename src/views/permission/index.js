import React from 'react'
import {Navigate} from 'react-router-dom'
function Permission(){
  const isLogin = localStorage.getItem('user')
  return (
    <div>
      {
        isLogin ? < Navigate to="/home/user" /> : <Navigate to="/login"/>
      }
    </div>
    
  )
}
export default Permission
import React from 'react'
import {ConfigProvider} from 'antd'
import zhCN from 'antd/lib/locale/zh_CN';
import {HashRouter, Route, Routes } from 'react-router-dom'
import routes from './router.config'
function deepCreate(routes){
  return(
    routes.map((item, index) =>{
      return <Route path={item.path} key={index} element={item.component}>
       {
         item.children && deepCreate(item.children)
       } 
      </Route>
    })
  )
}
function CreateRouter(){
  return (
    <ConfigProvider locale={zhCN}>
      <HashRouter>
        <Routes>
          {
            routes.map((item, index) =>{
              return <Route path={item.path} key={index} element={item.component}>
                { 
                  item.children && deepCreate(item.children)
                }
              </Route>
            })
          }
        </Routes>
      </HashRouter>
    </ConfigProvider>
   
  )
}

export default CreateRouter
import React from 'react'
import Login from '@/views/login'
import Home from '@/views/home'
import Permission from '@/views/permission'
import UserManager from '@/views/home/module/UserManager'
import MenuManager from '@/views/home/module/MenuManager'
import ArticleManager from '@/views/home/module/ArticleManager'
const routes = [
  {
    path: '',
    component: <Permission />
  },
  {
    path: '/login',
    name: 'login',
    component: <Login />,
    auth: false
  },
  {
    path: '/home',
    name: 'home',
    component: <Home />,
    auth: true,
    children: [
      {
        path: 'userManager',
        name: 'userManager',
        component: <UserManager />,
        auth: true
      },
      {
        path: 'menuManager',
        name: 'menuManager',
        component: <MenuManager />,
        auth: true
      },
      {
        path: 'articleManager',
        name: 'articleManager',
        component: <ArticleManager />,
        auth: true
      }
    ]
  }
]
export default routes
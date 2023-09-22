import React from 'react'
import Login from '@/views/login'
import Home from '@/views/home'
import Permission from '@/views/permission'
import Dashboard from "@/views/home/components/dashboard";
import RcButton from "@/components/button/button";
import RcIcon from "@/components/icon/icon";
import RcGrid from "@/components/grid/grid";
import RcLayout from "@/components/layout/layout";
import RcDivider from "@/components/divider/divider";
import RcBreadcrumb from "@/components/breadcrumb/breadcrumb";
import RcDropdown from "@/components/dropdown/dropdown";
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
        path: '',
        name: '首页',
        component: <Dashboard/>,
        auth: true
      },
      {
        path: 'components/button',
        name: 'button',
        component: <RcButton />,
        auth: true
      },
      {
        path: 'components/icon',
        name: 'icon',
        component: <RcIcon />,
        auth: true
      },
      {
        path: 'components/grid',
        name: 'grid',
        component: <RcGrid />,
        auth: true
      },
      {
        path: 'components/divider',
        name: 'divider',
        component: <RcDivider />,
        auth: true
      },
      {
        path: 'components/layout',
        name: 'layout',
        component: <RcLayout />,
        auth: true
      },
      {
        path: 'components/breadcrumb',
        name: 'breadcrumb',
        component: <RcBreadcrumb/>,
        auth: true
      },
      {
        path: 'components/dropdown',
        name: 'dropdown',
        component: <RcDropdown/>,
        auth: true
      }
    ]
  }
]
export default routes

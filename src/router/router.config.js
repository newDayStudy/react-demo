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
import RcChart from "@/components/echarts/chart";
import RcTable from "@/components/table/table";
import RcBook from "@/components/book/book";
import RcCar from "@/components/car/car";
import Rc3d from "@/components/3D/3d";
import Rc3d2 from "@/components/3D/3d2";
import RcCustom from "@/components/echarts/custom";
import RcFullScreen from "@/components/3D/fullscreen";
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
        path: 'components/table',
        name: 'table',
        component: <RcTable />,
        auth: true
      },
      {
        path: "components/car",
        name: 'car',
        component: <RcCar/>,
        auth: true
      },
      {
        path: 'components/button',
        name: 'button',
        component: <RcButton />,
        auth: true
      },
      {
        path: 'components/custom',
        name: 'custom',
        component: <RcCustom />,
        auth: true
      },
      {
        path: 'components/3d',
        name: '3d',
        component: <Rc3d />,
        auth: true
      },
      {
        path: 'components/3d2',
        name: '3d2',
        component: <Rc3d2 />,
        auth: true
      },
      {
        path: 'components/360',
        name: '360',
        component: <RcFullScreen/>,
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
        path: "components/book",
        name: 'book',
        component: <RcBook/>,
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
      },
      {
        path: 'components/echarts',
        name: 'chart',
        component: <RcChart/>,
        auth: true
      }
    ]
  }
]
export default routes

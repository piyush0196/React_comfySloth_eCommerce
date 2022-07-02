// import { lazy } from "react";
import { ROUTE_PATHS } from 'utils/constants'
import { v4 as uuidv4 } from 'uuid'
import Home from 'pages/Home/Home'
import About from 'pages/About/About'
import Products from 'pages/Products/Products'

export const routerList = [
  {
    id: uuidv4(),
    key: uuidv4(),
    path: ROUTE_PATHS.home,
    component: Home,
    isAuthNeeded: false,
    subMenus: []
  },
  {
    id: uuidv4(),
    key: uuidv4(),
    path: ROUTE_PATHS.about,
    component: About,
    isAuthNeeded: false,
    subMenus: []
  },
  {
    id: uuidv4(),
    key: uuidv4(),
    path: ROUTE_PATHS.products,
    component: Products,
    isAuthNeeded: false,
    subMenus: []
  }
]

import { type RouteProps } from 'react-router-dom'

import { AboutPage } from 'pages/About'
import { MainPage } from 'pages/Main'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: routePaths.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: routePaths.about,
    element: <AboutPage />
  }
}

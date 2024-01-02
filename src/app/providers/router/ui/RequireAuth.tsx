import { type ReactNode, type FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

import { routePaths } from '@/shared/consts/router'
import { getUserAuthData } from '@/entities/User'

interface RequireAuthProps {
  children: ReactNode
}

const RequireAuth: FC<RequireAuthProps> = (props) => {
  const { children } = props

  const location = useLocation()

  const isAuth = useSelector(getUserAuthData)

  if (!isAuth) {
    return <Navigate to={routePaths.main} state={{ from: location }} replace/>
  }

  return children
}

export default RequireAuth

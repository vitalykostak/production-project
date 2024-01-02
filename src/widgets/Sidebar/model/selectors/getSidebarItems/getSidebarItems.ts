import { createSelector } from '@reduxjs/toolkit'

import MainIcon from '@/shared/assets/icons/main.svg'
import AboutIcon from '@/shared/assets/icons/about.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import ArticlesIcon from '@/shared/assets/icons/articles.svg'
import { getUserAuthData } from '@/entities/User'
import { routePaths } from '@/shared/consts/router'

export const getSidebarItems = createSelector(getUserAuthData, (authData) => {
  return [
    {
      path: routePaths.main,
      Icon: MainIcon,
      text: 'main:main'
    },
    {
      path: routePaths.about,
      Icon: AboutIcon,
      text: 'about:about'
    },
    {
      path: routePaths.profile + authData?.id || '',
      Icon: ProfileIcon,
      text: 'profile:profile',
      authOnly: true
    },
    {
      path: routePaths.articles,
      Icon: ArticlesIcon,
      text: 'article:articles',
      authOnly: true
    }
  ]
})

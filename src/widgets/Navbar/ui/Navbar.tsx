import { useCallback, type FC, useState, memo } from 'react'
import navbarStyles from './Navbar.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
  AppLink,
  Button,
  ButtonTheme,
  HStack,
  Text,
  TextTheme
} from '@/shared/ui'
import { useTranslation } from 'react-i18next'
import { LoginModal } from '@/features/AuthByUsername'
import { useSelector } from 'react-redux'
import {
  getUserAuthData
} from '@/entities/User'

import { NotificationButton } from '@/features/notificationButton'
import { AvatarButton } from '@/features/avatarButton'
import { routePaths } from '@/shared/consts/router'

interface NavbarProps {
  className?: string
}

const Navbar: FC<NavbarProps> = memo(({ className }) => {
  const { t } = useTranslation(['translation', 'article'])

  const userAuthData = useSelector(getUserAuthData)

  const [isAuthModal, setisAuthModal] = useState<boolean>(false)
  const onShowModal = useCallback(() => setisAuthModal(true), [])

  const onClose = useCallback(() => setisAuthModal(false), [])

  if (userAuthData) {
    return (
      <nav className={classNames(navbarStyles.Navbar, {}, [className])}>
        <Text
          text={t('translation:app_name')}
          theme={TextTheme.INVERTED}
          className={navbarStyles.appName}
        />
        <AppLink to={routePaths.article_create}>
          {t('article:create_article')}
        </AppLink>
        <HStack className={navbarStyles.actions} gap="16" align="center">
          <NotificationButton />
          <AvatarButton />
        </HStack>
      </nav>
    )
  }

  return (
    <header className={classNames(navbarStyles.Navbar, {}, [className])}>
      <div className={navbarStyles.links}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
          {t('translation:sign_in')}
        </Button>
        {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onClose} />}
      </div>
    </header>
  )
})

export default Navbar

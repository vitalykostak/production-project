import { useCallback, type FC, useState, useEffect } from 'react'
import navbarStyles from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'

interface NavbarProps {
  className?: string
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation()

  const dispatch = useDispatch()

  const userAuthData = useSelector(getUserAuthData)

  const [isAuthModal, setisAuthModal] = useState<boolean>(false)
  const onShowModal = useCallback(() => setisAuthModal(true), [])

  const onClose = useCallback(() => setisAuthModal(false), [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  useEffect(() => {
    if (userAuthData && isAuthModal) {
      setisAuthModal(false)
    }
  }, [userAuthData, isAuthModal])

  if (userAuthData) {
    return (
      <nav className={classNames(navbarStyles.Navbar, {}, [className])}>
        <div className={navbarStyles.links}>
          <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogout}>
            {t('sign_out')}
          </Button>
        </div>
      </nav>
    )
  }

  return (
    <nav className={classNames(navbarStyles.Navbar, {}, [className])}>
      <div className={navbarStyles.links}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
          {t('sign_in')}
        </Button>
        {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onClose} />}
      </div>
    </nav>
  )
}

export default Navbar

import { useCallback, type FC, useState, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { classNames } from '@/shared/lib/classNames/classNames'
import {
    AppLink,
    Button as ButtonDeprecated,
    ButtonTheme,
    Text,
    TextTheme,
} from '@/shared/ui/deprecated'
import { LoginModal } from '@/features/AuthByUsername'
import { getUserAuthData } from '@/entities/User'
import { NotificationButton } from '@/features/notificationButton'
import { AvatarButton } from '@/features/avatarButton'
import { getArticleCreateRoute } from '@/shared/consts/router'
import { ToggleFeature } from '@/shared/lib/featureFlags'
import { Button, HStack } from '@/shared/ui/redesigned'

import navbarStyles from './Navbar.module.scss'
import navbarRedesignedStyles from './NavbarRedesigned.module.scss'

interface NavbarProps {
    className?: string
}

const NavbarDeprecated: FC<NavbarProps> = memo(({ className }) => {
    const { t } = useTranslation(['translation', 'article'])
    const userAuthData = useSelector(getUserAuthData)

    const [isAuthModal, setisAuthModal] = useState<boolean>(false)
    const onShowModal = useCallback(() => setisAuthModal(true), [])

    const onClose = useCallback(() => {
        setisAuthModal(false)
        window.location.reload()
    }, [])

    if (userAuthData) {
        return (
            <nav className={classNames(navbarStyles.Navbar, {}, [className])}>
                <Text
                    text={t('translation:app_name')}
                    theme={TextTheme.INVERTED}
                    className={navbarStyles.appName}
                />
                <AppLink to={getArticleCreateRoute()}>{t('article:create_article')}</AppLink>
                <HStack className={navbarStyles.actions} gap="16" align="center">
                    <NotificationButton />
                    <AvatarButton invertedAvatarErrorFallbackColor />
                </HStack>
            </nav>
        )
    }

    return (
        <header className={classNames(navbarStyles.Navbar, {}, [className])}>
            <div className={navbarStyles.links}>
                <ButtonDeprecated theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
                    {t('translation:sign_in')}
                </ButtonDeprecated>
                {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onClose} />}
            </div>
        </header>
    )
})

const NavbarRedesigned: FC<NavbarProps> = memo(({ className }) => {
    const { t } = useTranslation(['translation', 'article'])

    const userAuthData = useSelector(getUserAuthData)

    const [isAuthModal, setisAuthModal] = useState<boolean>(false)
    const onShowModal = useCallback(() => setisAuthModal(true), [])

    const onClose = useCallback(() => {
        setisAuthModal(false)
        window.location.reload()
    }, [])

    if (userAuthData) {
        return (
            <nav className={classNames(navbarRedesignedStyles.Navbar, {}, [className])}>
                <HStack gap="16" align="center">
                    <NotificationButton />
                    <AvatarButton invertedAvatarErrorFallbackColor />
                </HStack>
            </nav>
        )
    }

    return (
        <header className={classNames('', {}, [className])}>
            <div className={navbarRedesignedStyles.links}>
                <Button variant="outline" onClick={onShowModal}>
                    {t('translation:sign_in')}
                </Button>
                {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onClose} />}
            </div>
        </header>
    )
})

const Navbar: FC<NavbarProps> = memo(props => {
    return (
        <ToggleFeature
            featureFlag="isAppRedesigned"
            onDisabled={<NavbarDeprecated {...props} />}
            onEnabled={<NavbarRedesigned {...props} />}
        />
    )
})

export default Navbar

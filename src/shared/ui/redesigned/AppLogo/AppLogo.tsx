import { memo } from 'react'

import AppSvg from '@/shared/assets/icons/app-image.svg'
import { classNames } from '@/shared/lib/classNames/classNames'

import HStack from '../Stack/HStack/HStack'

import styles from './AppLogo.module.scss'

interface AppLogoProps {
    className?: string
    size?: number
}

const AppLogo = memo(({ className, size = 50 }: AppLogoProps) => {
    return (
        <HStack max justify="center" className={classNames(styles.appLogoWrapper, {}, [className])}>
            <AppSvg width={size} height={size} className={styles.appLogo} />
            <div className={styles.gradientBig} />
            <div className={styles.gradientSmall} />
        </HStack>
    )
})

export default AppLogo

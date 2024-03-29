import { memo, type FC, useMemo, type CSSProperties } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import AppImage from '../AppImage/AppImage'
import Skeleton from '../../deprecated/Skeleton/Skeleton'
import UserIcon from '../../../assets/icons/user.svg'
import Icon from '../Icon/Icon'

import avatarStyles from './Avatar.module.scss'

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
}

const Avatar: FC<AvatarProps> = memo(props => {
    const { className, src, size = 100, alt } = props

    const mods = {}

    const styles = useMemo<CSSProperties>(() => ({ width: size, height: size }), [size])

    const fallback = <Skeleton width={`${size}px`} height={`${size}px`} borderRadius="50%" />
    const errorFallback = <Icon Svg={UserIcon} width={size} height={size} />

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            className={classNames(avatarStyles.Avatar, mods, [className])}
            style={styles}
            src={src}
            alt={alt}
        />
    )
})

export default Avatar

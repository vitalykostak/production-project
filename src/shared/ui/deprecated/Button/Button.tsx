import { memo, type ButtonHTMLAttributes, type FC } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import buttonStyle from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    size?: ButtonSize
    square?: boolean
    max?: boolean
}

/**
 * @deprecated
 */
export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    PRIMARY = 'primary',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outlineRed',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

/**
 * @deprecated
 */
export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

/**
 * @deprecated
 */
const Button: FC<ButtonProps> = memo(props => {
    const {
        children,
        className,
        theme = ButtonTheme.PRIMARY,
        size = ButtonSize.M,
        square = false,
        disabled,
        max,
        ...otherButtonProps
    } = props

    const mods = {
        [buttonStyle.square]: square,
        [buttonStyle.disabled]: disabled,
        [buttonStyle.max]: max,
    }

    const additionsClasses = [className, buttonStyle[theme], buttonStyle[size]]

    return (
        <button
            {...otherButtonProps}
            disabled={disabled}
            className={classNames(buttonStyle.Button, mods, additionsClasses)}
        >
            {children}
        </button>
    )
})

export default Button

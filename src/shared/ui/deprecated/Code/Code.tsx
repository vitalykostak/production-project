import { memo, type FC, useCallback } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import CopyIcon from '@/shared/assets/icons/copy-icon.svg'

import Button, { ButtonTheme } from '../Button/Button'
import Icon from '../Icon/Icon'

import styles from './Code.module.scss'

interface CodeProps {
    className?: string
    text: string
}

/**
 * @deprecated
 */
const Code: FC<CodeProps> = memo(props => {
    const { className, text } = props

    const onCopy = useCallback(async () => navigator.clipboard.writeText(text), [text])

    const mods = {}

    const additionsClasses = [className]

    return (
        <pre className={classNames(styles.Code, mods, additionsClasses)}>
            <Button className={styles.copyButton} theme={ButtonTheme.CLEAR} onClick={onCopy}>
                <Icon Svg={CopyIcon} />
            </Button>
            <code>{text}</code>
        </pre>
    )
})

export default Code

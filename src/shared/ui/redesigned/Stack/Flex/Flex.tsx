import { type HTMLAttributes, type FC, type ReactNode } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { type TestProps } from '@/shared/types'

import styles from './Flex.module.scss'

export interface FlexProps extends HTMLAttributes<HTMLDivElement>, TestProps {
    className?: string
    children: ReactNode
    justify?: FlexJustify
    align?: FlexAlign
    direction: FlexDirection
    gap?: Gap
    max?: boolean
}

type FlexJustify = 'start' | 'end' | 'center' | 'between'
type FlexAlign = 'start' | 'end' | 'center'
export type FlexDirection = 'row' | 'column'
type Gap = '4' | '8' | '12' | '16' | '24'

const justifyClassesMapping: Record<FlexJustify, string> = {
    start: styles.justifyStart,
    end: styles.justifyEnd,
    center: styles.justifyCenter,
    between: styles.justifyBetween,
}

const alignClassesMapping: Record<FlexAlign, string> = {
    start: styles.alignStart,
    end: styles.alignEnd,
    center: styles.alignCenter,
}

const directionClassesMapping: Record<FlexDirection, string> = {
    row: styles.directionRow,
    column: styles.directionColumn,
}

const gapClassesMapping: Record<Gap, string> = {
    4: styles.gap4,
    8: styles.gap8,
    12: styles.gap12,
    16: styles.gap16,
    24: styles.gap24,
}

const Flex: FC<FlexProps> = props => {
    const {
        className,
        children,
        justify = 'start',
        align = 'start',
        direction = 'row',
        gap,
        max = false,
        'data-testid': dataTestId = 'Flex',
    } = props

    const mods = {
        [styles.max]: max,
    }

    const additionsClasses = [
        className,
        justifyClassesMapping[justify],
        alignClassesMapping[align],
        directionClassesMapping[direction],
        gap && gapClassesMapping[gap],
    ]

    return (
        <div className={classNames(styles.Flex, mods, additionsClasses)} data-testid={dataTestId}>
            {children}
        </div>
    )
}

export default Flex

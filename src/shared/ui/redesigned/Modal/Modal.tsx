import { type ReactNode, type FC } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'
import { toggleFeature } from '@/shared/lib/featureFlags'

import Overlay from '../Overlay/Overlay'
import Portal from '../Portal/Portal'

import modalStyles from './Modal.module.scss'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

const ANIMATION_DELAY = 300

const Modal: FC<ModalProps> = props => {
    const { className, children, isOpen, onClose, lazy } = props

    const { isClosing, close, isMounted } = useModal({
        onClose,
        isOpen,
        animationDelay: ANIMATION_DELAY,
    })

    const mods = {
        [modalStyles.opened]: isOpen,
        [modalStyles.closing]: isClosing,
    }

    // class of theme is needed for including current theme variables
    const additionsClasses = [
        className,
        toggleFeature({
            featureFlag: 'isAppRedesigned',
            onDisabled: () => modalStyles.uiDeprecatedVersion,
            onEnabled: () => modalStyles.uiLatestVersion,
        }),
    ]

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(modalStyles.Modal, mods, additionsClasses)}>
                <Overlay onClick={close} />
                <div className={modalStyles.content}>{children}</div>
            </div>
        </Portal>
    )
}

export default Modal

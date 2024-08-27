import { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'

import cn from 'classnames'
import styles from './Modal.module.css'

interface ModalProps {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  zIndex: '100' | '200' | '300'
  disable: boolean
  className?: string
}

const Modal = ({ children, isOpen, onClose, zIndex, disable, className }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return createPortal(
    <>
      <div className={styles.overlay} onClick={handleOverlayClick} />
      <div
        className={cn(styles.modal, className, {
          [styles.first]: zIndex === '100',
          [styles.second]: zIndex === '200',
          [styles.three]: zIndex === '300',
          [styles.disable]: disable
        })}
      >
        {children}
      </div>
    </>,
    document.body
  )
}

export default Modal

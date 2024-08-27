import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: ReactNode
  size: 's' | 'm' | 'l' | 'xl' | 'xs'
  className?: string
  isError?: boolean
  isBold?: boolean
  
}

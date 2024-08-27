export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: React.ReactNode
  isDisable?: boolean
  lightColorVersion?: boolean
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  appearance: 's' | 'm' | 'l' | 'xl' 
}

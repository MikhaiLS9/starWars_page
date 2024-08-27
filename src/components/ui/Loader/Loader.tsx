import cn from 'classnames'
import styles from './loader.module.css'

interface LoaderInterface {
  className?: string
}

export function Loader({ className }: LoaderInterface) {
  return <div className={cn(styles.loader, className)}></div>
}

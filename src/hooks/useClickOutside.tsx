import { useEffect, useRef } from 'react'

type Handler = () => void

const useClickOutside = (handler: Handler) => {
  const domNode = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const maybeHandler = (event: MouseEvent) => {
      if (domNode.current && !domNode.current.contains(event.target as Node)) {
        handler()
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handler()
      }
    }

    document.addEventListener('mousedown', maybeHandler)
    document.addEventListener('keydown', handleKeyDown) 

    return () => {
      document.removeEventListener('mousedown', maybeHandler)
      document.removeEventListener('keydown', handleKeyDown) 
    }
  }, [handler])

  return domNode
}

export default useClickOutside

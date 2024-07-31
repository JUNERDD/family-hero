import { memo } from 'react'
import Vector from '@/assets/svg/vector'

interface IProps {
  children?: React.ReactNode
}

const Kbd: React.FC<IProps> = ({ children }) => {
  return (
    <div className="hidden md:flex items-center flex-1 gap-1 border-2 py-1 px-2 border-zinc-700 rounded-lg border-b-4 text-zinc-400">
      <Vector />
      {children}
    </div>
  )
}

export default memo(Kbd)

import { cn } from '@/lib/utils'
import { ElProps } from '@/types'
import { memo } from 'react'

interface IProps extends ElProps<'div'> {
  children?: React.ReactNode
  className?: string
}

const Card: React.FC<IProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        'border outline-3 outline-black border-zinc-700 p-5 overflow-hidden rounded-3xl outline bg-card-bg',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default memo(Card)

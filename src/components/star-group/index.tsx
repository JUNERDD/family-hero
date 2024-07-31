import { LucideProps, Star } from 'lucide-react'
import { memo } from 'react'

interface IProps extends LucideProps {
  length?: number
  color?: string
}

const StarGroup: React.FC<IProps> = ({ length = 5, color = '#FEC84B', ...props }) => {
  return (
    <div className="flex gap-2">
      {Array.from({ length }, (_, index) => (
        <Star key={index} fill={color} color={color} {...props} />
      ))}
    </div>
  )
}

export default memo(StarGroup)

import Card from '@/components/card'
import { memo } from 'react'
import Home from '@/assets/home/group-photo.png'

interface IProps {}

const Friends: React.FC<IProps> = () => {
  return (
    <Card
      className="flex flex-col justify-end pb-12 h-56 xl:flex-1 xl:h-auto"
      style={{ background: `url(${Home.src}) no-repeat center/cover` }}
    >
      <p>Invite family, friends, anyone</p>
      <p className="text-sm">See what your team spends the most on</p>
    </Card>
  )
}

export default memo(Friends)

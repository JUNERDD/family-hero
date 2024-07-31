import Card from '@/components/card'
import { memo } from 'react'

interface IProps {}

const Percentage: React.FC<IProps> = () => {
  return (
    <Card className="flex-center-i gap-5 xl:w-80">
      <h1 className="text-5xl">78%</h1>
      <p className="text-sm text-zinc-500">Of people don't talk to therapists</p>
    </Card>
  )
}

export default memo(Percentage)

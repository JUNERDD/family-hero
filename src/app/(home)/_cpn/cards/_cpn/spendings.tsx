import Card from '@/components/card'
import LineCard from '@/components/line-card'
import { Zap } from 'lucide-react'
import { memo } from 'react'

interface IProps {}

/**
 * 小卡片列表
 */
const lineCardColors: string[] = ['#FF5029', '#61FF29', '#29FFFF', '#EE29FF']

const Spendings: React.FC<IProps> = () => {
  return (
    <Card className="space-y-2 h-full w-full xl:w-auto">
      <Zap color="#24FBEE" />
      <p>Spendings in one place</p>
      <p className="text-sm text-zinc-500">See what your team spends the most on</p>

      <div className="flex flex-col gap-3">
        {lineCardColors.map((color) => (
          <LineCard key={color} title="Grocery Shopping" text="$100" color={color} />
        ))}
      </div>
    </Card>
  )
}

export default memo(Spendings)

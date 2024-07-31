import Card from '@/components/card'
import { memo } from 'react'
import { Zap } from 'lucide-react'
import Tags from '@/assets/home/tags.png'
import Image from 'next/image'

interface IProps {}

const Badges: React.FC<IProps> = () => {
  return (
    <Card className="flex-center-i gap-3 h-18 p-0">
      <div className="flex flex-col w-3/5 gap-2 p-5">
        <Zap color="#24FBEE" />
        <p>Earn Badges</p>
        <p className="text-sm text-zinc-500">Of people don't talk to therapists</p>
        <p className="text-sm text-zinc-500">Of people don't talk.</p>
      </div>

      <Image className="w-2/5 h-full object-cover" src={Tags} alt="Tags" />
    </Card>
  )
}

export default memo(Badges)

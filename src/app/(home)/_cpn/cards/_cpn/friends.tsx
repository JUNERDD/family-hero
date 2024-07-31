import type { AvatarProps } from '@/components/avatar'
import Avatar from '@/components/avatar'
import Card from '@/components/card'
import { Zap } from 'lucide-react'
import { memo } from 'react'
import DadAvatar from '@/assets/avatars/memoji-1.png'
import MumAvatar from '@/assets/avatars/memoji-2.png'
import MeAvatar from '@/assets/avatars/memoji-3.png'
import LilSisAvatar from '@/assets/avatars/memoji-4.png'

interface IProps {}

/**
 * 好友列表
 */
const friendList: AvatarProps[] = [
  { src: DadAvatar, name: 'Dad', color: '#C2D6FF' },
  { src: MumAvatar, name: 'Mum', color: '#FBDFB1' },
  { src: MeAvatar, name: 'Me', color: '#A47657' },
  { src: LilSisAvatar, name: 'Lil Sis', color: '#F8C9D2' }
]

const Friends: React.FC<IProps> = () => {
  return (
    <Card className="flex-1 space-y-2">
      <Zap color="#24FBEE" />
      <p>Invite family, friends, anyone</p>
      <p className="text-sm text-zinc-500">See what your team spends the most on</p>

      <div className="flex flex-col gap-5 pt-5">
        <div className="flex gap-10 justify-around xl:justify-start">
          {friendList.map((friend) => (
            <Avatar key={friend.name} {...friend} />
          ))}
        </div>

        <button type="button" className="bg-middle-gray rounded-full py-2">
          Invite
        </button>
      </div>
    </Card>
  )
}

export default memo(Friends)

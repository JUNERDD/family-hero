import Image, { type StaticImageData } from 'next/image'
import { memo } from 'react'

export interface AvatarProps {
  src: string | StaticImageData
  size?: number
  name?: string
  color?: string
}

const Avatar: React.FC<AvatarProps> = ({ src, name, color, size = 40 }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        src={src}
        className="rounded-full"
        width={size}
        height={size}
        alt="avatar"
        style={{ backgroundColor: color }}
      />

      {/* name */}
      {name && <span className="text-zinc-500 text-sm">{name}</span>}
    </div>
  )
}

export default memo(Avatar)

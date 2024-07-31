import { memo } from 'react'

interface IProps {
  color?: string
  title: string
  text: string
}

const LineCard: React.FC<IProps> = ({ color = '#FF5029', title, text }) => {
  return (
    <div className="flex p-2 text-sm border-zinc-700 border h-16 gap-3 rounded-lg bg-middle-gray">
      <div className="h-full w-1 rounded-md" style={{ backgroundColor: color }} />
      <div className="flex flex-col justify-between flex-1">
        <div>{title}</div>
        <p className="text-zinc-500">{text}</p>
      </div>
    </div>
  )
}

export default memo(LineCard)

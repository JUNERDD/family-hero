import { memo } from 'react'

interface IProps {}

const AppLogo: React.FC<IProps> = () => {
  return (
    <div className="hidden md:flex flex-1 justify-end">
      <div className="py-2 px-4 cursor-pointer select-none bg-middle-gray rounded-full">
        Create Account For Free
      </div>
    </div>
  )
}

export default memo(AppLogo)

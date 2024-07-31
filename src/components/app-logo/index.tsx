import Link from 'next/link'
import { memo } from 'react'

interface IProps {}

const AppLogo: React.FC<IProps> = () => {
  return (
    <Link href="/" className="flex items-center flex-1 gap-1">
      <p>SYNTASK</p>
      <p>©</p>
    </Link>
  )
}

export default memo(AppLogo)

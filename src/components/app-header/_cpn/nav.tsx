import Kbd from '@/components/kbd'
import Link from 'next/link'
import { memo } from 'react'

interface IProps {}

const navList: { label: string; href: string; kbd: string }[] = [
  { label: 'About Us', href: '/about', kbd: 'A' },
  { label: 'Services', href: '/services', kbd: 'S' },
  { label: 'Pricing', href: '/pricing', kbd: 'P' }
]

const AppLogo: React.FC<IProps> = () => {
  return (
    <div className="flex gap-6 lg:gap-8 items-center">
      {navList.map(({ label, href, kbd }) => (
        <Link key={label} href={href} className="flex items-center gap-2">
          {label}
          <Kbd>{kbd}</Kbd>
        </Link>
      ))}
    </div>
  )
}

export default memo(AppLogo)

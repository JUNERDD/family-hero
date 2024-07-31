import { memo, MouseEventHandler } from 'react'
import type { ReactNode } from 'react'
import AppLogo from '../app-logo'
import Nav from './_cpn/nav'
import Create from './_cpn/create'

interface IProps {
  children?: ReactNode
  title?: ReactNode
  onRefresh?: MouseEventHandler
}

const AppHeader: React.FC<IProps> = () => {
  return (
    <header className="border-b border-zinc-800 text-xs">
      <div className="mx-auto flex-center-i h-16 py-6 px-10 max-w-7xl">
        {/* logo */}
        <AppLogo />

        {/* nav */}
        <Nav />

        {/* search */}
        <Create />
      </div>
    </header>
  )
}

export default memo(AppHeader)

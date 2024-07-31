import AppHeader from '@/components/app-header'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppHeader />
      {children}
    </>
  )
}

import StarGroup from '@/components/star-group'
import Link from 'next/link'
import { memo } from 'react'

interface IProps {}

const Welcome: React.FC<IProps> = () => {
  return (
    <div className="flex-center flex-col gap-8">
      {/* star */}
      <div className="flex-center gap-4">
        <StarGroup size={17} />
        <span>5.0 (from 200+ reviews)</span>
      </div>

      {/* title */}
      <div className="text-center space-y-4 md:w-[34rem]">
        <h1 className="text-5xl">Track your family</h1>
        <h1 className="text-5xl">needs in one place.</h1>
        <p>
          Syntask helps you with your daily family needs.Track budgets,talk to your family,and more.
        </p>
      </div>

      {/* create */}
      <div className="flex-center-i gap-3">
        {/* create button */}
        <button type="button" className="bg-[#24FBEE] text-black rounded-full py-3 px-6">
          Create Account For Free
        </button>

        {/* detail button */}
        <Link href="/" className="underline">
          See How It Works
        </Link>
      </div>
    </div>
  )
}

export default memo(Welcome)

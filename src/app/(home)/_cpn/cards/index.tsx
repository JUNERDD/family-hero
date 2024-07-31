import { memo } from 'react'
import Spendings from './_cpn/spendings'
import Friends from './_cpn/friends'
import GroupPhoto from './_cpn/group-photo'
import Percentage from './_cpn/percentage'
import Badges from './_cpn/badges'

interface IProps {}

const Cards: React.FC<IProps> = () => {
  return (
    <div className="flex flex-col xl:flex-row max-w-7xl items-center xl:h-[29rem] gap-8">
      {/* spendings */}
      <Spendings />

      <div className="flex flex-col gap-8 h-full">
        <div className="flex gap-8 h-3/5 flex-col xl:flex-row">
          {/* friends */}
          <Friends />

          {/* group photo */}
          <GroupPhoto />
        </div>

        <div className="flex gap-8 h-2/5 flex-col md:flex-row">
          {/* percentage */}
          <Percentage />

          {/* badges */}
          <Badges />
        </div>
      </div>
    </div>
  )
}

export default memo(Cards)

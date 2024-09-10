import React from 'react'

import LogoutButton from '@/components/atoms/LogoutButton'

const layout = (
  props: any
) => {
  return (
    <div>
      <div className='relative w-full h-14'>
        <div className='absolute top-0 right-10'>
          <LogoutButton/>
        </div>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default layout
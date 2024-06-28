import React from 'react'

const Tabs = () => {
  return (
    <div id='tabs' className="w-full border-[1px] border-gray-200 h-[71px] relative flex items-center">
        <div id='tabs' className="max-w-screen-xl ml-[100px] px-4 h-full flex gap-[72px] items-center">

          <h2 className='font-normal text-xl leading-7'>Job preview</h2>
          <h2 className='font-normal text-xl leading-7'>Applicants</h2>
          <h2 className='font-normal text-xl leading-7'>Match</h2>
          <h2 className='font-normal text-xl leading-7'>Messages</h2>
        </div>
    </div>
  )
}

export default Tabs
import React from 'react'

const Card = () => {
  return (
    <aside className="w-full max-w-sm lg:w-80 h-auto mt-[20px] right-0 lg:right-4 p-4 bg-white shadow-lg rounded-lg space-y-6">
        <h2 className='font-normal text-xl leading-[30px]'>“A quote from a Atlassian.”</h2>

        <div className='w-auto max-w-[153px] h-auto max-h-[50px] flex gap-4'>
           <img src="src\assets\Avatar.png" alt="Avatar" className='w-11 h-11'/>
           <div className='w-auto max-w-[92px] h-auto max-h-[50px] flex gap-[2px] flex-col'>
                <h2 className='font-medium text-base leading-6'>Name</h2>
                <p className='text-[#828282] font-medium text-base leading-6'>Description</p>
           </div>
        </div>
    </aside>
  )
}

export default Card
import React from 'react'

const Sidebar = () => {
  return (
<aside className="w-full max-w-sm lg:w-80 h-auto top-9 right-0 lg:right-4 p-4 bg-white shadow-lg rounded-lg space-y-6">
      <div className="flex gap-4">
        <button className="w-[172px] px-3 py-2 flex items-center justify-center gap-2 bg-[#FEF4F2] border border-[#DC4A2D] rounded-lg">
          <img src="/src/assets/trash-03.png" alt="trash" className="w-5 h-5"/>
          <span className="font-normal text-base text-[#DC4A2D]">Delete job</span>
        </button>
        <button className="w-[172px] px-3 py-2 flex items-center justify-center gap-2 bg-[#DC4A2D] border border-[#DC4A2D] rounded-lg">
          <img src="/src/assets/edit-02.png" alt="edit" className="w-4 h-4"/>
          <span className="font-normal text-base text-white">Edit job</span>
        </button>
      </div>
      <div className="w-full max-w-[360px] h-[299px] pt-3 space-y-4 rounded-tl-lg overflow-y-auto">
      <div className="w-full max-w-[336px] h-11 flex justify-between items-center mx-auto">
      <div className="w-[135px] h-11 pt-[10px] flex gap-[10px]">
        <img src="src\assets\users-01.png" alt="users" className='w-5 h-5'/>
        <h2 className='font-normal text-base'>Applicants</h2>
      </div>
       <div className='min-w-14 min-h-10 px-[6px] py-[10px]'>
        <h1 className='font-normal text-xl leading-[30px]'>400</h1>
       </div>
       </div>
      <div className="w-full max-w-[336px] h-11 flex justify-between items-center mx-auto">
      <div className="w-[135px] h-11 pt-[10px] flex gap-[10px]">
        <img src="src\assets\user-check-01.png" alt="user-check" className='w-5 h-5'/>
        <h2 className='font-normal text-base'>Matches</h2>
      </div>
       <div className='min-w-14 min-h-10 px-[6px] py-[10px]'>
        <h1 className='font-normal text-xl leading-[30px]'>100</h1>
       </div>
       </div>
      <div className="w-full max-w-[336px] h-11 flex justify-between items-center mx-auto">
      <div className="w-[135px] h-11 pt-[10px] flex gap-[10px]">
        <img src="src\assets\message-square-01.png" alt="message" className='w-5 h-5'/>
        <h2 className='font-normal text-base'>Messages</h2>
      </div>
       <div className='min-w-14 min-h-10 px-[6px] py-[10px]'>
        <h1 className='font-normal text-xl leading-[30px]'>147</h1>
       </div>
       </div>
      <div className="w-full max-w-[336px] h-11 flex justify-between items-center mx-auto">
      <div className="w-[135px] h-11 pt-[10px] flex gap-[10px]">
        <img src="src\assets\eye.png" alt="views" className='w-5 h-5'/>
        <h2 className='font-normal text-base'>Views</h2>
      </div>
       <div className='min-w-14 min-h-10 px-[6px] py-[10px]'>
        <h1 className='font-normal text-xl leading-[30px]'>800</h1>
       </div>
       </div>
      </div>
    </aside>    
    )
}

export default Sidebar
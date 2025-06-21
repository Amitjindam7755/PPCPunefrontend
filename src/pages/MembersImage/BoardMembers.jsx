import React from 'react'

const BoardMembers = () => {
  return (
    <div>

         {/* Right - Image Cards */}
        <div className="w-full md:w-1/6 flex flex-col gap-6 mb-10 mr-4 pr-8">
            <div className='text-nowrap pl-4 md:pl-12'>
              <h3 className="title text-3xl md:text-4xl  mt-10 font-bold">Board Members</h3>
            </div>
            <div className='flex flex-col items-center'>
              <ImageCard imgSrc={assets.MemberPhoto}/>
              <h3 className='text-red-900 text-md pt-2'>Jhon</h3>
            </div>
            <div className='flex flex-col items-center'>
              <ImageCard imgSrc={assets.MemberPhoto}/>
            <h3 className='text-red-900 text-md pt-2'>Raj</h3>
            </div>
            <div className='flex flex-col items-center'>
              <ImageCard imgSrc={assets.MemberPhoto}/>
            <h3 className='text-red-900 text-md pt-2'>Amit</h3>
            </div>
            <div className='flex flex-col items-center'>
              <ImageCard imgSrc={assets.MemberPhoto}/>
            <h3 className='text-red-900 text-md pt-2'>Amit</h3>
            </div>
        </div>

    </div>
  )
}

export default BoardMembers
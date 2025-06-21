// import ImageCard from '../../About/MembersImage'
// import { assets } from '../../../assets/assets'


// ******WORKING
import React from 'react'

import { assets } from '../../assets/assets'

const ImageCard = ({children, imgSrc, ...props}) => {
  return (
    <div
        {...props}
        className='relative w-28 h-36 overflow-hidden rounded-md shadow-lg group mx-auto'>
            <img src={imgSrc} alt="" className='w-full h-full object-cover transition-transform group-hover:scale-105 duration-200 ' />
         <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent'>
         <div className='p-2 text-sm w-full text-center text-white'>{children}</div>
         </div>
    </div>
  )
}

export default ImageCard




import Image from 'next/image'
import React from 'react'
import { DotsHorizontalIcon,HeartIcon,ChatIcon,BookmarkIcon,EmojiHappyIcon } from '@heroicons/react/outline'

function Post({id,caption,img,userImg,username}) {
  return (
    <div className='bg-white my-7 border rounded-md '>
      {/* Post Header */}
        <div className="flex items-center p-5">
            <Image className='h-12 w-12 rounded-full object-cover border p-1 mr-3' src={userImg} alt={`${username}'s img`} width={800} height={500}/>
            <p className='font-bold flex-1'>{username}</p>
            <DotsHorizontalIcon className='h-5 cursor-pointer' />

        </div>

        {/* Post Image */}
        <Image className='object-cover w-full' src={img} alt='User post' width={700} height={700}/>

        {/* Post Buttons */}
        <div className="flex justify-between px-4 pt-4">
            <div className='flex space-x-4'>
                <HeartIcon className="btn hover:scale-125" />
                <ChatIcon className="btn hover:scale-125" />
            </div>
                <BookmarkIcon className="btn hover:scale-125" />
        </div>

        {/* Post comments */}
        <p className='p-5 truncate'>
            <span className='font-bold mr-2'>{username}</span>
            {caption}
        </p>

        {/* Post Input Box */}
        <form className="flex items-center p-4">
            <EmojiHappyIcon  className='h-7 cursor-pointer'/>
            <input className='border-none flex-1 focus:ring-0' type="text" placeholder='Enter your comment ...' />
            <button className='text-blue-400 font-bold'>Post</button>
        </form>

    </div>
  )
}

export default Post

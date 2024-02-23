import React,{FC} from 'react'
import PostCard from './PostCard'

const PostCardList:FC = () => {
  return (
    <div className='p-16 grid grid-cols-4 gap-12'>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
    </div>
  )
}

export default PostCardList
import React,{FC} from 'react'
import PostCard from './PostCard'

const PostCardList:FC = () => {
  return (
    <div className='m-16 grid grid-cols-4 gap-4'>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
    </div>
  )
}

export default PostCardList
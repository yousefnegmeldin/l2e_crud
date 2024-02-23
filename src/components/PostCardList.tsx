import React,{FC} from 'react'
import PostCard from './PostCard'
import PostCardCreator from './PostCreatorCard'

const PostCardList:FC = () => {
  return (
    <div className='p-16 grid grid-cols-4 gap-12'>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCardCreator />
    </div>
  )
}

export default PostCardList
import React,{FC, useState} from 'react'
import PostCard from './PostCard'
import PostCardCreator from './PostCreatorCard'
import Pagination from './Pagination'

const PostCardList:FC = () => {
    const POSTS_PER_PAGE = 8;

    const [page,setPage] = useState(1);

    const postArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    const startIndex = (page - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE ;
    const totalPages = Math.ceil(postArray.length / POSTS_PER_PAGE);

    

  return (
    <div className='p-16 '>
        <div className='grid grid-cols-4 gap-12'>
          {postArray.slice(startIndex,endIndex).map((post) => <PostCard key={post} />)}  
        </div>
        <div className='pt-16'>
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          
        </div>
        
    </div>
  )
}

export default PostCardList
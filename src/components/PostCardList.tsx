import React,{FC, useEffect, useState} from 'react'
import PostCard from './PostCard'
import PostCardCreator from './PostCreatorCard'
import Pagination from './Pagination'
import postsArr from '../data/Posts.js'
const PostCardList:FC = () => {

  
    type PostCardProps = {
      title:string,
      imageSrc:string,
    }
    const POSTS_PER_PAGE = 8;

    const [page,setPage] = useState(1);

    
    const startIndex = (page - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE ;
    const totalPages = Math.ceil(postsArr.length / POSTS_PER_PAGE);

    useEffect(()=>{
      console.log(postsArr);
    },[postsArr])

  return (
    <div className='p-16 '>
        <div className='grid grid-cols-4 gap-12'>
          {postsArr.slice(startIndex,endIndex).map((post:PostCardProps,index:number) => <PostCard key={index} title={post.title} imageSrc={post.imageSrc} />)}  
        </div>
        <div className='pt-16'>
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          
        </div>
        
    </div>
  )
}

export default PostCardList
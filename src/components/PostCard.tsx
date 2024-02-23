import React,{FC} from 'react'

type PostCardProps = {
  title:string,
  imageSrc:string,
  altText:string,
}


const PostCard:FC<PostCardProps> = () => {
  return (
  <div className="w-64 h-80 bg-[#eee] shadow-xl border-red-600 border">
    <div className="h-[60%] bg-[#ddd]">
      <img src="https://via.placeholder.com/300" alt="" className="w-full h-full object-cover" />
    </div>
    <div className="flex h-[40%] flex-col justify-center items-center">
      <h2 className="text-2xl font-bold">Post Title</h2>
    </div>
  </div>
  );
}

export default PostCard
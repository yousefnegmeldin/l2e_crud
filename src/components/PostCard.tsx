import React,{FC} from 'react'

type PostCardProps = {
  title:string,
  imageSrc:string,
}


const PostCard:FC<PostCardProps> = (props) => {
  return (
  <div className="w-64 h-80 bg-[#eee] shadow-xl  border">
    <div className="h-[60%] bg-[#ddd]">
      <img src={props.imageSrc} alt="" className="w-full h-full object-cover" />
    </div>
    <div className="flex h-[40%] flex-col justify-center items-center">
      <h2 className="text-2xl font-bold">Post Title</h2>
    </div>
  </div>
  );
}

export default PostCard
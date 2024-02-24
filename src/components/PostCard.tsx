import React, { FC } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

type PostCardProps = {
  title: string;
  imageSrc: string;
  id: number;
};

const PostCard: FC<PostCardProps> = (props) => {
  return (
    <div className="w-64 h-80 bg-[#eee] shadow-xl  border">
      <div className="h-[60%] bg-[#ddd]">
        <img
          src={props.imageSrc}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex h-[40%] flex-col justify-between py-4 items-center">
        <h2 className="text-2xl font-bold">Post Title</h2>
        <div className="flex justify-between w-full px-4">
          <Link to={`/editpost/${props.id}`}>
            <div className="flex items-center ">
              <MdEdit />
              <p className="px-2">Edit</p>
            </div>
          </Link>
          <div className="flex items-center ">
            <MdDelete />
            <p className="px-2">Delete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

import React, { FC, useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { usePosts } from "../data/PostsContext";
import ConfirmationDialog from "./ConfirmationDialog";

type PostCardProps = {
  title: string;
  imageSrc: string;
  id: number;
};

const PostCard: FC<PostCardProps> = (props) => {
  const { setPostsArr } = usePosts();
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);

  const handleDelete = () => {
    setConfirmationOpen(true);
  };

  const confirmDelete = () => {
    setPostsArr((prevPostsArr) => {
      return prevPostsArr.filter((post) => post.id !== props.id);
    });
    setConfirmationOpen(false);
  };

  const cancelDelete = () => {
    setConfirmationOpen(false);
  };

  return (
    <div className="w-64 h-80 bg-[#eee] shadow-xl border">
      <div className="h-[60%] bg-[#ddd]">
        <img
          src={props.imageSrc}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex h-[40%] flex-col justify-between py-4 items-center">
        <h2 className="text-2xl font-bold">{props.title}</h2>
        <div className="flex justify-between w-full px-4">
          <Link to={`/editpost/${props.id}`}>
            <div className="flex items-center">
              <MdEdit />
              <p className="px-2">Edit</p>
            </div>
          </Link>
          <div
            className="flex items-center cursor-pointer"
            onClick={handleDelete}
          >
            <MdDelete />
            <p className="px-2">Delete</p>
          </div>
        </div>
      </div>
      <ConfirmationDialog
        isOpen={isConfirmationOpen}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
        message="Are you sure you want to delete this post?"
      />
    </div>
  );
};

export default PostCard;

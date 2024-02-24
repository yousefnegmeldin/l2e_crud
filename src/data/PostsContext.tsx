import React, { ReactNode, createContext, useContext, useState, FC } from 'react';

type Post = {
  title: string;
  imageSrc: string;
};

type PostsContextType = {
  postsArr: Post[];
  setPostsArr: React.Dispatch<React.SetStateAction<Post[]>>;
};

const PostsContext = createContext<PostsContextType>({ postsArr: [], setPostsArr: () => {} });

export const PostsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [postsArr, setPostsArr] = useState<Post[]>([]);
  return (
    <PostsContext.Provider value={{ postsArr, setPostsArr }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);

import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  FC,
  Dispatch,
  useCallback,
} from "react";

type Post = {
  title: string;
  imageSrc: string;
  id: number;
};

type PostsContextType = {
  postsArr: Post[];
  setPostsArr: React.Dispatch<React.SetStateAction<Post[]>>;
};

const PostsContext = createContext<PostsContextType>({
  postsArr: [],
  setPostsArr: React.Dispatch<React.SetStateAction<Post[]>>,
});

export const PostsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [postsArr, setPostsArr] = useState<Post[]>([]);
  const memoizedSetPostsArr = useCallback(
    (newPostsArr: React.SetStateAction<Post[]>) => {
      setPostsArr(newPostsArr);
    },
    [setPostsArr]
  );

  return (
    <PostsContext.Provider
      value={{ postsArr, setPostsArr: memoizedSetPostsArr }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);

import React from "react";
import Typography from "../components/Typography";

const PostEditorForm = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<string>();
  const { setPostsArr, postsArr } = usePosts();
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-center items-center pt-12">
        <Typography title="Create Post" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col items-center justify-center"
      >
        <div className="mt-16">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            value={title}
            onChange={handleTitleChange}
            className="p-1 border-black border-2"
          />
        </div>
        <input
          type="file"
          name="image"
          className="mt-16"
          onChange={handleOnChange}
          accept="image/jpeg, image/png"
        />
        <img width={300} height={300} src={file} />
        <button
          className="mt-16 bg-blue-700 p-4 rounded-full text-white"
          onClick={handleSubmit}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostEditorForm;

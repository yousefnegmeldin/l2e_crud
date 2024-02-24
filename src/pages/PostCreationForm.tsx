import React, { useState } from 'react'
import Typography from '../components/Typography'
import postsArr from '../data/Posts.js'
const PostCreationForm = () => {
  const [title,setTitle] = useState('');
  const[file,setFile] = useState<string>();


  const handleTitleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setTitle(e.target.value);
  }

  const handleOnChange = (e:React.FormEvent<HTMLInputElement>) =>{
    const target = e.target as HTMLInputElement & {
      files:FileList;
    }
    const allowedTypes = ['image/jpeg', 'image/png'];
    const selectedFile = target.files ? target.files[0] : undefined;
    if(selectedFile){
      if (allowedTypes.includes(selectedFile.type))
        setFile(URL.createObjectURL(selectedFile));
      else {
        alert('Please select an image file (JPEG, PNG)');
        e.target.value = '';
      }
    }    
  }

  const uploadFile = async(fileObj:string)=>{
    postsArr.push({title,fileObj});
    await new Promise(resolve => setTimeout(resolve, 1000));
    return;
  }

  const handleSubmit = (e: React.FormEvent)=>{
    e.preventDefault();
    if (!file) {
      alert('Please select a file');
      return;
    }
    if(title===''){
      alert('please enter title');
      return;
    }
    uploadFile(file).then(()=>alert('uploaded successfully')).then(()=>window.location.href='/');
  }

  return (
    <div>
      <div className='flex justify-center items-center pt-12'>
        <Typography title="Create Post" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='flex flex-col items-center justify-center'>
        <div className='mt-16'>
        <label htmlFor='title'>Title:</label>
        <input id="title" type="text" name="title" value={title} onChange={handleTitleChange} className='p-1 border-black border-2' />
        </div>
        <input type="file" name="image" className='mt-16' onChange={handleOnChange}  accept="image/jpeg, image/png" />
        <img width={300} height={300} src={file} />
        <button className='mt-16 bg-blue-700 p-4 rounded-full text-white' onClick={handleSubmit}  type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostCreationForm
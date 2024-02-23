import './App.css'
import Typography from './components/Typography'
import PostCardList from './components/PostCardList'
import { Link } from 'react-router-dom'
function App() {

  return (
    <div className='mt-8 px-16 text-center  flex flex-col justify-center items-center'>
      <div className='grid grid-cols-3 w-full'>
       <div></div>
      <Typography title="L2E CRUD" />
      <Link to="/createpost">
        <button className='bg-blue-800 text-white shadow-2xl rounded-2xl ml-64 w-1/4'>Create Post</button>
      </Link>
      </div>
      <PostCardList />
    </div>
  )
}

export default App

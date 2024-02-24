import './App.css'
import PostCardList from './components/PostCardList'
import Navbar from './components/Navbar'
function App() {

  return (
    <div className='mt-8 px-16 text-center  flex flex-col justify-center items-center'>
      <Navbar />
      <PostCardList />
    </div>
  )
}

export default App

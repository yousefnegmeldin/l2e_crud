import './App.css'
import Typography from './components/Typography'
import PostCardList from './components/PostCardList'
function App() {

  return (
    <div className='mt-8 text-center flex flex-col justify-center items-center'>
      <Typography title="L2E CRUD" />
      <PostCardList />
    </div>
  )
}

export default App

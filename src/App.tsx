import './App.css'
import Typography from './components/Typography'
import PostCardList from './components/PostCardList'
function App() {

  return (
    <div className='m-4 mx-16 p-0 text-center'>
      <Typography title="L2E CRUD" />
      <PostCardList />
    </div>
  )
}

export default App

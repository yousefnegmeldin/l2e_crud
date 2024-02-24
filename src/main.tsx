import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import PostCreationForm from './pages/PostCreationForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PostsProvider } from './data/PostsContext';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PostsProvider>
    <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<App/>} />
          <Route path="/createpost" element={<PostCreationForm />} />
        
      </Routes>
    </BrowserRouter>
    </PostsProvider>  
  </React.StrictMode>,
)

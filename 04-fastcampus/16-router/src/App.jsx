import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Posts from './components/Posts'
import PostIndex from './components/Posts/PostIndex'
import PostDetail from './components/Posts/PostDetail'
import Users from './components/Users'
import UserIndex from './components/Users/UserIndex'
import UserDetail from './components/Users/UserDetail'
import Nav from './components/Nav'

const App = () => {
  const location = useLocation()

  return (
    <>
      <Nav />
      <p>location.pathname: {location.pathname}</p>
      <Routes>
        <Route path="posts" element={<PostIndex />}>
          <Route index element={<Posts />} />
          <Route path=":postId" element={<PostDetail />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route index element={<UserIndex />} />
          <Route path=":userId" element={<UserDetail />} />
        </Route>
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </>
  )
}

export default App

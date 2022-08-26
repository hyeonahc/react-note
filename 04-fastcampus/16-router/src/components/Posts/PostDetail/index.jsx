import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const PostDetail = () => {
  const location = useLocation()
  const navigate = useNavigate()
  // const { title, body } = location.state.post
  const { post } = location.state ? location.state : { post: null }
  const params = useParams()

  useEffect(() => {
    console.log('location: ', location)
    console.log('params: ', params)
  }, [location, params])

  if (!post) return <p>Not Found</p>
  return (
    <>
      <p>params.postId: {params.postId}</p>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={() => navigate('/users', { state: { data: 1 } })}>
        Users 페이지로 이동하기
      </button>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
      <button onClick={() => navigate(0)}>새로고침</button>
    </>
  )
}

export default PostDetail

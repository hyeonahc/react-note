import React, { useEffect, useState } from 'react'
import { postData } from '../../../constant/postData'
import { Link, useLocation, useSearchParams } from 'react-router-dom'

const PostIndex = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [posts, setPosts] = useState(postData)

  const searchPost = (e) => {
    const filter = e.target.value
    filter ? setSearchParams({ filter }) : setSearchParams({})
  }

  const location = useLocation()

  // http://localhost:3000/posts?filter=hello
  // searchParams.get('filter')를 하면 hello를 리턴함
  // const filter = searchParams.get('filter')
  // console.log(filter)

  useEffect(() => {
    setPosts(
      postData.filter((post) => {
        const filter = searchParams.get('filter')
        const title = post.title.toLocaleLowerCase()
        return filter ? title.includes(filter) : true
      }),
    )
    console.log(location)
  }, [searchParams, location])

  return (
    <>
      <input type="text" onChange={searchPost} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              to={`/posts/${post.id}`}
              state={{
                post: posts.find((data) => data.id === parseInt(post.id)),
              }}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default PostIndex

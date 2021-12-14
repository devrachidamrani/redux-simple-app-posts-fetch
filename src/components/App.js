import React, { useEffect } from 'react'
import { getPosts } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const { posts, loading, error } = useSelector(state => state)
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <>
      <h1> My blog </h1>
      {loading ? (
        <h3>Loading posts ... </h3>
      ) : error ? (
        <h3> {error}</h3>
      ) : (
        <div>
          {posts.map(post => (
            <div key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default App

import {useEffect, useState} from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then((response) => {
      setPosts(response);
    });
  }, []);

  return (
      <div className="app">
        <ul className="posts">
          {posts.map(post => <li key={post.title}>
            <div>{post.title}</div>
            <div>{post.body}</div>
          </li>)}
        </ul>
      </div>
  )
}

export default App

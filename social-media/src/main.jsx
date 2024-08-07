import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import LoadingSpinner from './components/LoadingSpinner.jsx'
import CreatePost, {createPostAction} from './components/CreatePost.jsx'
import PostList, {loaderData} from './components/PostList.jsx'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
let router = createBrowserRouter([
  
  {path: "/", element: <App />, children: [
    {path:"/", element: <PostList />, loader: loaderData},
    {path:"/create-post", element: <CreatePost />,action: createPostAction},
  
  ],}
  
  ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

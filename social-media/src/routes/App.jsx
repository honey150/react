import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import PostList from '../components/PostList.jsx'
import CreatePost from '../components/CreatePost.jsx'
import {Outlet} from "react-router-dom"
import PostListProvider from '../store/post-list-store.jsx'
import {useState} from 'react'

import './App.css'
import '../styles/CreatePost.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {


  return (
  <PostListProvider>
    <div className="container">
     <Header />
    <Outlet />
    <Footer></Footer>
    </div>
    </PostListProvider>
  )
}

export default App

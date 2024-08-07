import {useContext, useEffect, useState} from 'react'

import {PostList as PostListData} from '../store/post-list-store.jsx'
import WelcomeMessage from './WelcomeMessage.jsx'

import Post from './Post.jsx'
import {useLoaderData} from 'react-router-dom'


const PostList = () => {
// let {postList} = useContext(PostListData)
let postList = useLoaderData();
 return ( 
   <>
  
   {postList.length === 0 && <WelcomeMessage />}
   {postList.map((post, idx) => {
     return <Post key={idx} postData={post}/>
   })}
   </>
);
}

export default PostList;

export const loaderData = () => {
  return fetch('https://dummyjson.com/posts')
.then(res => res.json())
.then(data => {
  return data.posts
});
}
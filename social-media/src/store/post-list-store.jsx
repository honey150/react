
import {createContext, useReducer, useState, useEffect} from 'react';

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {}
})

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if(action.type === "DELETE POST") {
    newPostList = currPostList.filter(post => post.id !== action.payload.postId)
  } else if(action.type === 'ADD POST') {
    newPostList = [action.payload, ...currPostList]
    console.log(newPostList)
  } else if(action.type === 'INITIAL DATA') {
    newPostList = action.payload.posts
  }
  return newPostList;
}

const DEFAULT_DATA = [
 {
   id: '1',
   title: 'learn react',
   body: 'hello dosto me react sikh rha hu',
   reactions: 4,
   tags: ['react', 'course']
 },
 {
   id: '2',
   title: 'web development',
   body: 'web development course kaafi hard hai',
   reactions: 10,
   tags: ['web', 'frontend']
 }
  ]

const PostListProvider = ({children}) => {
  let [postList, dispatchPostList] = useReducer(postListReducer, [])
 // let [fetchLoading, setFetchLoading] = useState(false);
  
  const addPost = (post) => {
    
    let newPost = {
      type: "ADD POST",
      payload: post
    }
    dispatchPostList(newPost)
  }
  
  const addInitialData = (posts) => {
    dispatchPostList( {
      type: "INITIAL DATA",
      payload: {
        posts
      }
    })
    
  }
  
  const deletePost = (postId) => {
  dispatchPostList({
    type: 'DELETE POST',
    payload: {
      postId
    }
  })
  }
  

// useEffect(() => {
//   let controller = new AbortController();
// let signal = controller.signal;

//   setFetchLoading(true)
  
// return () => {
//   controller.abort();
// }
// }, [])

  
  return (
  <PostList.Provider value = {
  {
    postList,
    addPost,
    deletePost
  }
  }>
   {children}
  </PostList.Provider>
  );
}

export default PostListProvider;
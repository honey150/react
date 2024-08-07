// import {useContext, useRef} from 'react'
// import {useNavigate} from 'react-router-dom'
// import {PostList} from '../store/post-list-store.jsx'

import {Form, redirect} from 'react-router-dom'
import {useContext} from 'react'
import {PostList} from '../store/post-list-store.jsx'
import '../styles/CreatePost.css'

const CreatePost = () => {
  let {addPost} = useContext(PostList);
  const handleAddPost = (data) => {
    console.log(data)
  }
//   let navigate = useNavigate();
//   const handleNewPost = (eve) => {
//     eve.preventDefault();
//     let postId = 5;
//     let postTitle = postTitleElement.current.value;
//     let postBody = postBodyElement.current.value;
//     let postReactions = Math.floor((Math.random() * 100) + 1);
//     let postTags = (postTagsElement.current.value).split(" ")
    
//     fetch('https://dummyjson.com/posts/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify( {
//     userId: postId,
//       title: postTitle,
//       body: postBody,
//       reaction: postReactions,
//       tags: postTags
//       })
// })
// .then(res => res.json())
// .then(post => addPost(post));
// navigate("/")
//     postTitleElement.current.value = "";
//   postBodyElement.current.value = "";
//   postTagsElement.current.value = "";
  
//   }
  
  
//   let postIdElement = useRef();
//   let postTitleElement = useRef();
//   let postBodyElement = useRef();
//   let postReactionElement = useRef();
//   let postTagsElement = useRef();
  
  return (
    <Form className="newPost" method="POST"  >
    <h1>Create New Post</h1>
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">User Id:</label>
  <input type="text" name="userId" className="form-control" id="exampleFormControlInput1" placeholder="Enter user id" />
</div>
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Post Title</label>
  <input type="text" name="title" className="form-control" id="exampleFormControlInput1" placeholder="Enter post title" />
</div>
        <div className="mb-3">
  <label htmlFor="reactions" className="form-label">Reactions:</label>
  <input type="text" name="reaction" className="form-control" id="reaction" placeholder="Enter reaction" />
</div>
        <div className="mb-3">
  <label htmlFor="tags" className="form-label">Tags:</label>
  <input type="text" name="tags" className="form-control" id="tags" placeholder="Enter tags using space" />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Message:</label>
  <textarea className="form-control" name="body" id="exampleFormControlTextarea1" rows="5"></textarea>
</div>
<div className="col-12">
    <button type="submit" className="btn btn-warning">Create Post</button>
  </div>
    </Form>

    );
}

export const createPostAction = async (data) => {
 let formData = await data.request.formData()
 let postData = Object.fromEntries(formData)
 postData.tags = postData.tags.split(' ')
 fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(postData)
})
.then(res => res.json())
.then(console.log);
 return redirect("/")
}

export default CreatePost;
import { MdDelete } from "react-icons/md";
import {PostList} from '../store/post-list-store.jsx'
import {useContext} from 'react'
import '../styles/Post.css'

const Post = ({postData}) => {
 let {id, title, body, reactions, tags} = postData;
 
 let {deletePost} = useContext(PostList)
  return (
    <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    <h4 className="card-title">{title}</h4>
    <p className="card-text">{body}</p>
    <a href="#" className="btn btn-warning">Likes: {reactions}</a>
  </div>

  <div className="badges">
    {tags.map((tag, idx) =>  
      <span key={idx} className="badge text-bg-primary">{tag}</span>
      )}
  </div>
<span onClick={() => {deletePost(id)}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    <MdDelete className="deleteBtn" />
    <span  className="visually-hidden">unread messages</span>
  </span>
</div>
    );
}

export default Post;
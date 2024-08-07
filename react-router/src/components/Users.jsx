import "../assets/styles/Users.css";
import { useEffect, useState } from "react";
import { FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useParams, useLoaderData } from "react-router-dom";
export default function Users() {
  //const [data, setData] = useState([]);
  //let { id } = useParams();

  let data = useLoaderData();

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${id}`)
  //     .then(res => res.json())
  //     .then(data =>  setData(data));
  // }, []);
  return (
    <>
      <h1 className="text-orange-700 text-4xl m-5 font-bold text-center">
        Github <span className="text-gray-700">User</span>
      </h1>
      <div className="card-container">
        <div className="person-info">
          <img src={data.avatar_url} alt="avatar.png" />

          <div className="person-details">
            <div className="name">{data.name}</div>
            <div className="user-id">@{data.login}</div>
            <div className="post">{data.bio}</div>
          </div>
        </div>
        <div className="hero-section">
          <div className="github-score">
            <div className="follower">
              <div className="first f-num">{data.followers}</div>
              <div className="second foll">Followers</div>
            </div>
            <div className="repos">
              <div className="first r-num">{data.public_repos}</div>
              <div className="second repo">Public Repos</div>
            </div>
            <div className="following">
              <div className="first fo-num">{data.following}</div>
              <div className="second fwng">Following</div>
            </div>
          </div>
          <div className="button">
            <a href={data.html_url}>View Profile</a>
          </div>
          <div className="social-section">
            <FaTwitter className="social-icon" />
            <FaYoutube className="social-icon" />
            <IoMdMail className="social-icon" />
            <FaLinkedin className="social-icon" />
          </div>
        </div>
      </div>
    </>
  );
}
// use loader feature of react router dom
export const loadUserData = async ({ params }) => {
  let { id } = params;
  let response = await fetch(
    `https://api.github.com/users/${id || 'hiteshchoudhary'}`
  );
  if (!response.ok) {
    throw new Error("fetching failed");
  }

  return response.json();
};

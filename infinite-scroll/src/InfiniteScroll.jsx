import { useState, useEffect } from "react";
import PostImage from "./PostImage.jsx";

export default function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=4`)
    .then(res => res.json())
    .then(result => setData([...data, ...result]) )
  }, [page]);
  return (
<div class="container">
    <PostImage data={data} page={page} setPage={setPage} />
</div>


  );
}

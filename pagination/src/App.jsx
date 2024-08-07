import { useState, useEffect } from "react";
import Pagination from "./Pagination.jsx";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=3`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [page]);
  return (
    <div className="main">
      <div className="container">
        {data.map((img, idx) => (
          <img key={idx} src={img.download_url} alt="image" />
        ))}
      </div>
      <Pagination setPage={setPage} page={page}  />
    </div>
  );
}

export default App;

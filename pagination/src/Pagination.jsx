import { useState, useEffect } from "react";

export default function Pagination({ page, setPage }) {
  const [pageArr, setPageArr] = useState([]);
  const handleIncrease = () => {
    setPage(prev => prev + 1);
  };

  const handleDecrease = () => {
    setPage(prev => prev - 1);
  };
  
  const handlePage = (e) => {
    setPage(Number(e.target.innerText))
  }

  useEffect(() => {
   let prevThreeArr = Array.from({length: 2}, (_,idx) => page - 1 - idx).filter(arr => arr>0).reverse()
  let nextThreeArr = Array.from({length: 3}, (_,idx) => page+idx )
   let data = [...prevThreeArr, ...nextThreeArr];
    setPageArr(data);
  }, [page]);

  return (
    <div className="page-container">
      {page === 1 ? null : (
        <div onClick={handleDecrease} className="page">
          &lt;
        </div>
      )}
      {pageArr.map((pgNum, idx) => (
        <div onClick={(e) => handlePage(e) } key={idx} className={`page ${page === pgNum ? "active" : ""}`}>
          {pgNum}
        </div>
      ))}
      <div onClick={handleIncrease} className="page">
        &gt;
      </div>
    </div>
  );
}

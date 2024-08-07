import data from "./data.json";
import { useState, useEffect, useRef } from "react";

export default function ImageCarousel() {
  let interval = useRef(null);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [key, setKey] = useState(0);
  const DATA_LENGTH = data.length;
  const handleNextBtn = () => {
    setIndex(prevIndex => {
      if (prevIndex === DATA_LENGTH - 1) {
        return 0;
      } else {
        setAnimate(prev => !prev);
        return prevIndex + 1;
      }
    });
  };
  const handlePrevBtn = () => {
    if (index === 0) {
      setIndex(DATA_LENGTH - 1);
    } else {
      setIndex(index - 1);
    }
  };

  useEffect(() => {
    interval.current = setInterval(handleNextBtn, 2000);
  }, []);
  return (
    <div className="container">
      <div onClick={handlePrevBtn} className="btn prev">
        &lt;
      </div>
      <img
        className={`post-image ${animate ? "active" : ""}`}
        key={key}
        src={data[index].download_url}
        alt="post image"
      />
      <div onClick={handleNextBtn} className="btn next">
        &gt;
      </div>
    </div>
  );
}

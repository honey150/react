import { useEffect } from "react";

export default function PostImage({ data, page, setPage }) {
  useEffect(() => {
    let lastImage = document.querySelector(".post-image:last-child");
    
    let observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting) {
        observer.unobserve(lastImage)
        setPage(prev => prev+1)
      }
    }, {threshold: 0.5})
    if(!lastImage) return;
    observer.observe(lastImage)
  }, [data]);
  return (
    <>
      {data.map(img => (
        <img
          className="post-image"
          key={img.id}
          src={img.download_url}
          alt="post image"
        />
      ))}
    </>
  );
}

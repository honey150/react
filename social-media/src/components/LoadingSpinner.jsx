

const LoadingSpinner = () => {
  return <div className="spinner d-flex justify-content-center">
  <div style={{width: "2.5rem", height: "2.5rem"}} className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>

}

export default LoadingSpinner;
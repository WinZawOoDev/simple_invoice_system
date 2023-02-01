export default function LoadingSpinner() {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
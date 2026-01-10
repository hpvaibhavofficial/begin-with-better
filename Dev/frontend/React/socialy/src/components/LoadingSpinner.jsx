const LoadingSpinner = () => {
  return (
    <center>
      <div className="text-center spinner">
        <div
          className="spinner-border"
          role="status"
          style={{ width: "5rem", height: "5rem", borderWidth: "6px" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </center>
  );
};

export default LoadingSpinner;

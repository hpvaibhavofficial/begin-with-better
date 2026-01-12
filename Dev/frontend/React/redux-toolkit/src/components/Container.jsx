const Container = ({ children }) => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card w-75 w-md-50 w-lg-25">
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default Container;

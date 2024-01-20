import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PageNotFound() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="text-center">
            <h1 className="m-auto">Page Not Found</h1>
            <p className="lead">The requested page could not be found.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

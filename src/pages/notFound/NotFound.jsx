import React from "react";

export default function NotFound() {
  return (
    <div className=" d-flex justify-content-center">
      <div className="image-container text-center my-5 rounded ">
        <img
          style={{ width: "500px", height: "200px" }}
          src="not-found.jpg"
          alt="not found"
        />
        <p
          className="alert alert-info tex-center mt-4"
          style={{ width: "500px" }}
        >
          opps we can't find this url
        </p>
      </div>
    </div>
  );
}

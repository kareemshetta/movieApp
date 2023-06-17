import React, { useState } from "react";
import { Shimmer } from "react-shimmer";

function ImageLoader({ src }) {
  console.log(src);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
    console.log("finshed");
  };

  return (
    <div>
      {isLoading ? (
        <div>
          <Shimmer width={500} height={500}></Shimmer>
          <img
            src={src}
            onLoad={handleImageLoad}
            // onError={handleImageError}
            style={{ visibility: "hidden" }}
          />
        </div>
      ) : (
        <img className="card-img-top" src={src} onLoad={handleImageLoad} />
      )}
    </div>
  );
}

export default ImageLoader;

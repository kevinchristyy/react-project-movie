import React from "react";

function CustomSkeleton({ skeletonCount }) {
  return (
    <>
      {new Array(skeletonCount).fill(0).map((_, index) => (
        <div className="movie" key={index}>
          <img
            src="https://wallpapers.ispazio.net/wp-content/uploads/2021/04/solid-gray.png"
            className="movie__img--skeleton"
            alt=""
          />
          <div className="movie__title">
            <div className="movie__title--link-skeleton"></div>
            <div className="movie__details--skeleton"></div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CustomSkeleton;

import React from "react";

const page = () => {
  return (
    <div className="my-20">
      <div className="max-w-5xl m-auto w-full relative">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/AbvwgZIwsXw?si=OW1fh5RpBiCgIveL"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default page;

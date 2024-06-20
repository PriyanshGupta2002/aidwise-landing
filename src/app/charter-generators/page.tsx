import React from "react";

const page = () => {
  return (
    <div className="my-20">
      <div className="max-w-5xl m-auto w-full relative">
        <iframe
          src="https://charter-generator.vercel.app/"
          className="  h-[70vh] w-full"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default page;

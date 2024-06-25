import IFrameViewer from "@/components/i-frame-viewer";
import React from "react";

const page = () => {
  return (
    <div className="my-20">
      <div className="max-w-5xl m-auto w-full relative">
        <IFrameViewer src="https://app.powerbi.com/view?r=eyJrIjoiZDdlZDI4ZmYtMTU2Yi00MGI0LThjZjItY2RmYTljNTM4NWZhIiwidCI6IjgxOTNhZDg5LWJkNTAtNDQ5OC1iMTdhLWJmYmM0YWRiYzA3NCJ9" />
      </div>
    </div>
  );
};

export default page;

import IFrameViewer from "@/components/i-frame-viewer";
import React from "react";

const page = () => {
  return (
    <div className="my-20">
      <div className="max-w-5xl m-auto w-full relative">
        <IFrameViewer src="https://sdz-strategyhub-chatbot-dev.azurewebsites.net/chat-bot" />
      </div>
    </div>
  );
};

export default page;

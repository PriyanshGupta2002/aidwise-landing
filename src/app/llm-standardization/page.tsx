import React from "react";
import text from "../../../public/response.json";
import ReactJson from "react-json-view";
import JsonViewer from "@/components/json-viewer";
const page = () => {
  return (
    <div className="mt-9 max-w-5xl m-auto max-h-96 overflow-y-auto">
      <JsonViewer />
    </div>
  );
};

export default page;

"use client";
import React from "react";
import ReactJson from "react-json-view";
import text from "../../public/response.json";
const JsonViewer = () => {
  return <ReactJson src={text} theme={"codeschool"} />;
};

export default JsonViewer;

import { useFiles } from "@/store/store";
import React from "react";
//import noImage from "/images/blank.png";

export const Preview = () => {
  const { selectedScoreboard } = useFiles();
  const imgToShow: string = selectedScoreboard.preview_url
    ? selectedScoreboard.preview_url
    : '/images/blank.png';
  return <img src={imgToShow} className="max-w-80" alt="" />;
};

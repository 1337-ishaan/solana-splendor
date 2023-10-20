import React from "react";
import {NextPage} from "next";
import {IRoadmapItem} from "./types";

const RoadmapItem: NextPage<IRoadmapItem> = ({roadmapTitle,title,description}) => {
  return (
    <div className="bt-roadmap-item">
      <span className="roadmap-title">{roadmapTitle}</span>
      <div className="roadmap-content">
        <span className="dot" />
        <h4 className="title">{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default RoadmapItem;

import React from "react";
import { index } from "../../../hooks/useHorizontalScroll";
import RoadmapItem from "./RoadmapItem";
import {NextPage} from "next";
import {IRoadmapItem} from "./types";

const Roadmap: NextPage = () => {
  const scrollRef = index();

  const roadmapItems: IRoadmapItem[] = [
    {
      "roadmapTitle": "end of Q1 2021",
      "title": "Concept",
      "description": "Idea for an alternative Bitcoin Blockchain"
    },
    {
      "roadmapTitle": "end of Q3 2021",
      "title": "Research",
      "description": "Consensus algorithms, scaling\nand privacy."
    },
    {
      "roadmapTitle": "Q1 2022",
      "title": "Initial Blockchain development",
      "description": "zk-SNARK or Zero-Knowledge Succinct\n Non-Interactive Argument of Knowledge implementation"
    },
    {
      "roadmapTitle": "Mid of Q4 2022",
      "title": "Network Testing",
      "description": "ZK Layer 1 blockchain testing"
    },
    {
      "roadmapTitle": "q1 2023",
      "title": "Smart Contracts",
      "description": "Privacy contracts implementation."
    },
    {
      "roadmapTitle": "Mid of Q2 2023",
      "title": "Public Nodes Testing",
      "description": ""
    },
    {
      "roadmapTitle": "Mid of Q3 2023",
      "title": "Initial token launch",
      "description": "Limited token offering on\n ethereum network"
    },
    {
      "roadmapTitle": "q4 2023",
      "title": "Splendor Network",
      "description": "Exodus Protocol and Mainnet Launch"
    },
    {
      "roadmapTitle": "Mid of Q4 2023",
      "title": "SPL token migration",
      "description": "SPL token migration from Ethereum\nnetwork to Splendor Network"
    }
  ]

  return (
    <section id="roadmap" className="roadmap-area pt-130 pb-130 flex items-center justify-center">
      <div className="container custom-container-two">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-8">
            <div className="section-title text-center mb-60">
              <h1 className="title">
                Splendor Network Roadmap
              </h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div
              className="bt-roadmap_x bt-roadmap-scrollbar"
              ref={scrollRef}
              style={{ overflow: "auto" }}
            >
              <div className="bt-roadmap-wrap">
                {[...Array(9)].map((x, index) => (
                  <RoadmapItem key={index} {...{
                    roadmapTitle: roadmapItems[index].roadmapTitle,
                    title: roadmapItems[index].title,
                    description: roadmapItems[index].description
                  }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

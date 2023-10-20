import React from "react";
import LayoutOne from "../../components/layouts/LayoutOne";
import HeaderSection from "../../components/section/HeaderSection";
import ExploreSection from "../../components/section/ExploreSection";
import {NextPage} from "next";

const BlockExplorerEcosystem: NextPage = () => {
    return (
        <LayoutOne
            title={"Explorer Ecosystem"}
            description={"Explorer Ecosystem"}
        >
            <div className="fix">
                <HeaderSection />
                <ExploreSection />
            </div>
        </LayoutOne>
    )
}

export default BlockExplorerEcosystem;

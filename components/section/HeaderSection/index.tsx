import React from "react";
import {NextPage} from "next";

const HeaderSection: NextPage = () => {
    return (
        <section className="pt-[130px] pb-[130px] max-[800px]:pt-[250px] max-[800px]:pb-0">
            <div className={"border-b-[1px] border-b-white border-b-solid pb-[40px] my-0 mx-[200px] max-[800px]:mx-0"}>
                <div className="flex-row flex items-center max-[800px]:justify-center">
                    <div>
                        <div className="wow fadeInRight">
                            <div className="mb-[30px]">
                                <h2 className="text-[70px] font-normal text-left text-[#073B4C] mx-[200px] max-[800px]:mx-0
                                max-[800px]:text-[50px] max-[800px]:text-center">
                                    Our Ecosystem
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderSection;

import React from "react";
import WhyChooseUsItem from "../WhyChooseUs/WhyChooseUsItem";
import {NextPage} from "next";
import {IWhyChooseUs} from "../WhyChooseUs/types";

const ExploreSection: NextPage = () => {
    const slider_items: IWhyChooseUs[] = [
        {
            alt: "",
            link: "https://splendor.org/",
            title: "Artificial Intelligence",
            description: "Unleash the power of our advanced AI product, combining machine learning, natural language processing, and computer vision. Encounter intelligent decision-making, language understanding, and visual recognition. Join us on the journey to reshape the landscape of AI technology.",
        },
        {
            alt: "",
            link: "https://decentercloud.com/",
            title: "Decentralized Cloud",
            description: "Experience the future of computing with our Decentralized Cloud. Enjoy exceptional security, privacy, and scalability. Join our community-driven platform for transparent, resilient, and efficient cloud solutions. Embrace decentralized computing and gain control of your data and resources.\n",
        },
        {
            alt: "",
            link: "https://splendor.org/",
            title: "Search Engine",
            description: "Unlock the potential of our advanced product, designed to deliver instant, relevant, and precise results. With its intuitive and personalized export interface, it will help you find exactly what you need in the blink of an eye. Discover smart and efficient search like never before!",
        },
        {
            alt: "",
            link: "https://sentinelbrowser.com/",
            title: "Browser",
            description: "Upgrade your web browsing experience today with Splendor, the browser powered by our advanced AI models. Discover the future of browsing – faster, smarter, and more private. Try Splendor now and experience the next level of digital exploration.",
        },
        {
            alt: "",
            link: "https://splendos.org/",
            title: "OS",
            description: "Unlock your potential with our groundbreaking operating system. Encounter seamless resource management, enhanced security, intuitive export interface, and effortless maintenance. Embark on this transformative journey to redefine the way you compute.\n",
        },
        {
            alt: "",
            link: "/",
            title: "Encrypted Email",
            description: "Enjoy blazing-fast email communication without compromising privacy. Our revolutionary product offers end-to-end encryption, ensuring the security of your sensitive data. Embrace the future of email with combined speed and privacy.\n",
            comingSoon: true
        },
        {
            alt: "",
            link: "https://octaocean.com/",
            title: "DEX",
            description: "Step into the future of trading with our innovative DEX. Encounter secure, decentralized transactions with full asset control. Benefit from our user-friendly export interface and transparent, liquid market offering seamless trading. Embrace decentralized finance with our advanced DEX platform.\n",
        },
        {
            alt: "",
            link: "/wallet",
            title: "Wallet",
            description: "Manage your digital assets securely with our state-of-the-art wallet. Take control of your private keys, enjoy seamless transactions, and explore multiple Splendor tokens. Encounter the future of asset management with our user-friendly and secure wallet.\n",
        },
        {
            alt: "",
            link: "/",
            title: "Mobile Phones",
            description: "Unleash the potential of our cutting-edge mobile phone. Encounter stunning visuals, exceptional performance, advanced camera capabilities, long-lasting battery life, seamless connectivity, and sleek design. Elevate your mobile journey with our state-of-the-art technology.",
            comingSoon: true
        },
        {
            alt: "",
            link: "/",
            title: "Laptops",
            description: "Discover the power of our innovative laptop. Enjoy ultimate portability, exceptional performance, stunning visuals, long battery life, seamless connectivity, and enhanced security. Embrace the future of computing on-the-go with our cutting-edge laptop..",
            comingSoon: true
        },
        {
            alt: "",
            link: "https://getspacenet.com/",
            title: "Low Orbit Satellite Constellation",
            description: "Introducing SpaceNet - the groundbreaking Low Orbit Satellite Project that propels mobile communication to new heights. Experience a mobile network beyond imagination, outshining conventional systems and surpassing current satellite solutions"
        }
    ];
    return (
        <section className={`about-area pb-[40px] my-0 mx-[200px] max-[800px]:my-0 max-[1000px]:mx-[100px] 
        max-[800px]:mx-[15px] max-[800px]:pb-[120px] max-[800px]:px-0`}>
            <div className="flex flex-row">
                <div className={"flex flex-wrap justify-between"}>
                    {slider_items.map((item, index) => (
                        <div key={index} className={`w-[400px] mb-[30px] shadow-2xl rounded-[10px] bg-white max-[800px]:w-full`}>
                            <WhyChooseUsItem {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExploreSection;

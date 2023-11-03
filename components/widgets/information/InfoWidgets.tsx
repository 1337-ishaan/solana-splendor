import {TWidgetInfo} from "./types";
import {ApiAdminPanel} from "../../../api/bittensor";
import wallet from "../../../assets/icons/dashboard/wallet.svg";
import planet from "../../../assets/icons/dashboard/planet.svg";
import document from "../../../assets/icons/dashboard/document.svg";
import sales from "../../../assets/icons/dashboard/sales.svg";
import InfoWidget from "../info/InfoWidget";
import {useEffect, useState} from "react";

async function fetchBTCPriceAndBuildObject() {
    const btcData = await ApiAdminPanel.getBTCPrice();
    const obj = {
        title: "BTC Price",
        completed: 100,
        value: `$${btcData.BTC_price_usd.toFixed(2)}`,
        icon: sales
    };

    return obj;
}

const InfoWidgets = () => {
    const [btcPrice, setBTCPrice] = useState("0.00");

    useEffect(() => {
        const fetchBTCData = async () => {
            const btcData = await ApiAdminPanel.getBTCPrice();
            setBTCPrice(btcData.BTC_price_usd.toFixed(2));
        };
        fetchBTCData();
    }, []);

    const testInfoDataWidgets: TWidgetInfo[] = [
        {
            id: 1,
            title: "SPL Markercap",
            value: "$153,000",
            rate: 55,
            icon: wallet,
            link: '/',
        },
        {
            id: 2,
            title: "Earnings in 24 Hours",
            value: "$204",
            rate: 5,
            icon: planet,
            link: '/',
        },
        {
            id: 3,
            title: "Bitcoin Price in 24 Hours",
            value: `$${btcPrice}`,
            rate: -14,
            icon: document,
            link: '/',
        },
        {
            id: 4,
            title: "Storage used from the users",
            value: "2.3T",
            rate: 18,
            icon: sales,
            link: '/',
        }
    ]

    return (
        <div className={"flex flex-col"}>
            <div className={"flex flex-row justify-center flex-1 items-center flex-wrap"}>
                {
                    testInfoDataWidgets.map(
                        button => <InfoWidget {...button} key={button.id} />
                    )
                }
            </div>
        </div>
    )
}

export default InfoWidgets;
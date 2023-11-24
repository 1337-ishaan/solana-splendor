const WelcomeWidget = () => {
    return (
        <div className={`min-w-[250px] h-full py-[8px] px-[20px] justify-between flex-[4] flex-col items-start mr-1 rounded-[20px] flex 
            border-[#FFFFFF33] border-[1px] mr-[10px] bg-[#09081c] bg-opacity-40 mt-[10px] 
            max-[800px]:h-[300px] max-[800px]:mt-[20px] max-[800px]:py-[25px]`}>
            <div>
                <p className={"text-[#a0aec0] text-[12px] text-[#a0aec0]"}>Welcome back,</p>
                <p className={"text-white text-[25px] font-bold text-white pt-[0px] pb-[10px]"}></p>
                <p className={"text-[14px] text-[#a0aec0]"}>
                    Glad to see you again!<br />
                    Check your last earnings
                </p>
                <p className={"text-[14px] text-[#a0aec0] mt-[40px] break-all"}>

                </p>
            </div>
            <a href={"/"}>
                <p className={"text-white text-[12px]"}>Check your profile →</p>
            </a>
        </div>
    )
}

export default WelcomeWidget;

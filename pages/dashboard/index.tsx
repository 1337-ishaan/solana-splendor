import Menu from "../../components/menu/dashboard/DashboardMenu";
import {useEffect} from "react";
import Home from "../../components/tabs/home/HomeTab";
import {useSelector} from "react-redux";
import {selectAuthState} from "../../store/autStore/selectors";
import classes from "./styles.module.css"
import LayoutOne from "../../components/layouts/LayoutOne";
import {NextPage} from "next";
import {useRouter} from "next/router";

const Dashboard: NextPage = () => {
    const authState = useSelector(selectAuthState);
    const router = useRouter()

    useEffect(()=>{
        if(!authState)
            router.push("/");
    }, [authState])

    if(authState){
        return(
            <LayoutOne
                title={"Decentercloud Dashboard"}
                description={"Decentercloud Dashboard"}
                hideFooter={true}
                hideHeader={true}
            >
                <div className={"h-full flex flex-row"}>
                    <div className={`${classes.dashboardBG} bg-center bg-no-repeat bg-cover fixed h-full w-full z-[-1] fixed`} />
                    <Menu />
                    <div className={"min-[801px]:w-full ml-[280px] max-[1100px]:ml-[200px] max-[800px]:ml-[110px]"}>
                        <Home />
                    </div>
                </div>
            </LayoutOne>
        )
    }
}

export default Dashboard

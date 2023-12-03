// Importa las clases CSS de Tailwind CSS
import "tailwindcss/tailwind.css";

import Menu from "../../components/menu/dashboard/DashboardMenu";
import Home from "../../components/tabs/home/HomeTab";
import classes from "./styles.module.css";
import LayoutOne from "../../components/layouts/LayoutOne";
import { NextPage } from "next";

const Dashboard: NextPage = () => {
  return (
    <LayoutOne
      title={"Decentercloud Dashboard"}
      description={"Decentercloud Dashboard"}
      hideFooter={true}
      hideHeader={true}
    >
      <div className="min-h-screen flex flex-row">
        <div
          className={`${classes.dashboardBG} bg-center bg-no-repeat bg-cover fixed h-full w-full z-[-1]`}
        />
        <Menu />
        <div className="w-full ml-[280px] max-[1100px]:ml-[200px] max-[800px]:ml-[110px]">
          <Home />
        </div>
      </div>
    </LayoutOne>
  );
};

export default Dashboard;

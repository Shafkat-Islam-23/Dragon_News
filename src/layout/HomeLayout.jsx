import { Outlet } from "react-router";
import Header from "../components/Header";
import Latestnews from "../components/Latestnews";

const homeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>{" "}
        <section className="my-5">
          <Latestnews></Latestnews>
        </section>
      </header>
      <div>
        <div className="left-nav"></div>
        <div className="main">
          <Outlet></Outlet>
        </div>
        <div className="right-nav"></div>
      </div>
    </div>
  );
};

export default homeLayout;

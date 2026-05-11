import { Outlet } from "react-router";
import Header from "../components/Header";
import Latestnews from "../components/Latestnews";
import Navbar from "../components/Navbar";
import Leftaside from "../components/Leftaside";
import Rightaside from "../components/Rightaside";

const homeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>{" "}
        <section className="my-5">
          <Latestnews></Latestnews>
        </section>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <div className=" grid grid-cols-12 w-11/12 mx-auto pt-4">
        <aside className="col-span-3">
          <Leftaside></Leftaside>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3  ">
          <Rightaside></Rightaside>
        </aside>
      </div>
    </div>
  );
};

export default homeLayout;

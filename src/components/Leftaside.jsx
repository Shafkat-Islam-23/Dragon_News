import Categories from "./Categories";
import { Suspense } from "react";

const Leftaside = () => {
  return (
    <div>
      <Suspense>
        <Categories></Categories>
      </Suspense>
    </div>
  );
};

export default Leftaside;

import logo from "../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div>
      <div className="flex justify-center flex-col items-center pt-10 gap-2">
        <img src={logo} alt="" />
        <h1 className="text-secondary ">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <h1>{format(new Date(), "EEEE MM yyyy")}</h1>
      </div>
    </div>
  );
};

export default Header;

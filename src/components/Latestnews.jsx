import Marquee from "react-fast-marquee";

const MarqueeComp = Marquee && Marquee.default ? Marquee.default : Marquee;

const Latestnews = () => {
  return (
    <div className="flex items-center gap-3 w-11/12 mx-auto bg-gray-100 p-3 rounded-lg">
      <p className="text-base-100 bg-base-300 px-3 py-2 font-bold">Latest</p>
      <div>
        <MarqueeComp className=" flex  gap-5">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur, exercitationem.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur, exercitationem.
          </p>
        </MarqueeComp>
      </div>
    </div>
  );
};

export default Latestnews;

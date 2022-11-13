import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 py-10 md:py-0">
      <article className="flex justify-center items-center p-[20px] md:p-[80px] w-full">
        <div className=" md:w-[500px] text-center lg:text-left">
          <h3 className="text-3xl md:text-4xl font-semibold">
            Make micro-payments easily and faster
          </h3>
          <p className="md:text-lg my-10">
            Pay for bus trips, other transport fees and daily commodities using
            Cowry mobile app.
          </p>
          <div className=" flex flex-col md:flex-row items-center">
            <Link href="#" className="w-[200px] lg:w-[250px]">
              <img src="./images/common/appstore_btn.svg" />
            </Link>
            <Link
              href="#"
              className="md:ml-8 my-5 md:my-0 w-[200px] lg:w-[250px]"
            >
              <img src="./images/common/playstore_btn.svg" />
            </Link>
          </div>
        </div>
      </article>
      <aside className=" bg-base_highlight_bg flex justify-center items-center p-[60px]">
        <div className="img-container w-[250px] md:w-[400px] relative">
          <img src="./images/index/iPhone14.svg" className="w-full h-full relative z-30" alt="" />
          <img src="./images/index/ellipse1.svg" className="absolute -right-2 -bottom-2 z-10" alt="" />
          <img src="./images/index/ellipse2.svg" className="absolute -right-10 -bottom-10 " alt="" />
          <img src="./images/index/bgdot.svg" className="absolute top-[30px] -left-[120px]" alt="" />

        </div>
      </aside>
    </section>
  );
};

export default Banner;

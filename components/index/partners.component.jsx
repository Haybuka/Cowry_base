import React from "react";

const Partners = () => {
  const partnerImg = [
    "./images/index/partners/access.svg",
    "./images/index/partners/chams.svg",
    "./images/index/partners/Kobo.svg",
    "./images/index/partners/lamata.svg",
    "./images/index/partners/meca.svg",
    "./images/index/partners/nurtw.svg",
    "./images/index/partners/sokoto.svg",
  ];
  return (
    <section className="hidden md:block py-[40px] px-[20px] md:px-[100px] md:py-[50px] overflow-x-scroll lg:overflow-auto">
      <h3 className="text-xl md:text-3xl text-center md:text-left">
        Our Partners
      </h3>
      <aside className="my-[20px] md:my-0 flex items-center justify-between ">
        {partnerImg.map((img, id) => (
          <div className=" w-[150px]" key={id}>
            <img src={img} alt="" className="w-full h-full" />
          </div>
        ))}
      </aside>
    </section>
  );
};

export default Partners;

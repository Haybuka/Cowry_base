import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

let categories = [
    {
      id: 1,
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique dapibus adipiscing pulvinar ante aliquam tristique interdum cum dui. Sapien platea elit nec viverra nec sed felis. Sollicitudin vitae id enim in scelerisque. Maecenas velit id urna, accumsan posuere non egestas.",

      name: "Inter state buses",
      title : 'Board Inter-state buses',
      src : './images/index/services/brt.svg'
    },
    {
      id: 2,
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique dapibus adipiscing pulvinar ante aliquam tristique interdum cum dui. Sapien platea elit nec viverra nec sed felis. Sollicitudin vitae id enim in scelerisque. Maecenas velit id urna, accumsan posuere non egestas.",
    
      name: "Connect",
      title: 'Connect with other commuters',
      src : './images/index/services/connect.svg'

    },
    {
      id: 3,
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique dapibus adipiscing pulvinar ante aliquam tristique interdum cum dui. Sapien platea elit nec viverra nec sed felis. Sollicitudin vitae id enim in scelerisque. Maecenas velit id urna, accumsan posuere non egestas.",
     
      name: "Receive payments",
      title : 'Receive payments from customers',
      src : './images/index/services/receive.svg'
    },
    {
        id: 4,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique dapibus adipiscing pulvinar ante aliquam tristique interdum cum dui. Sapien platea elit nec viverra nec sed felis. Sollicitudin vitae id enim in scelerisque. Maecenas velit id urna, accumsan posuere non egestas.",
        name: "Transfer",
        title : 'Transfer money between wallets',
        src : './images/index/services/transfer.svg'
      },
      {
        id: 5,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique dapibus adipiscing pulvinar ante aliquam tristique interdum cum dui. Sapien platea elit nec viverra nec sed felis. Sollicitudin vitae id enim in scelerisque. Maecenas velit id urna, accumsan posuere non egestas.",
        name: "Make payments",
        title : 'Pay with phone',
        src : './images/index/services/make.svg'
      },
  ];

const Services = () => {
  return (
    <div className="w-full px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex justify-between items-center border-b-[0.5px] border-gray-400">
          {categories.map((category) => (
            <Tab
              key={category}
              as="p"
              className={({ selected }) =>
                classNames(
                  "text-sm font-medium leading-5 text-blue-700 py-2 tracking-wider",
                  selected
                    ? "border-b-2 border-base_highlight outline-none"
                    : "text-black hover:bg-white/[0.12] hover:text-gray-400 hover:cursor-pointer"
                )
              }
            >
              {category.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {categories.map((tab, idx) => (
            <Tab.Panel
              key={idx}
              className="bg-white p-3"
            >
              <ServiceCard data={tab}/>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Services;

const ServiceCard = ({data}) => {
    
    return (
        <article className="grid grid-cols-1 md:grid-cols-4 place-items-center py-10">
            <div className="col-span-2">
                <img alt="" src={data?.src}/>
            </div>
            <aside className="col-span-2 2xl:col-span-1 mt-10 md:my-0">
                <p className="text-2xl md:text-3xl 2xl:text-4xl mb-4 text-[#011B44]">{data?.title}</p>
               <p className="text-[#6A6A6A] text-md md:text-lg"> {data?.body}</p>
            </aside>
        </article>
    )
}

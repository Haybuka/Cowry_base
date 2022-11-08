import React from 'react'
import { Tab } from '@headlessui/react';
import FaqClosure from './disclosure.component';

const AccountTabs = [
    { label: 'General questions', componennt: <FaqClosure /> },
    { label: 'Card related issues', componennt: <FaqClosure /> },
    { label: 'App related issues', componennt: <FaqClosure /> }
  ];
const FaqIndex = () => {
  return (
    <div className="py-10">
    <Tab.Group>
      <div className="flex flex-col md:flex-row gap-x-20">
        <Tab.List className="flex flex-col md:pt-28">
          {AccountTabs?.map(({ label }) => (
            <Tab
              key={label}
             
            >
              {label}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="w-full lg:w-[450px]">
          {AccountTabs?.map(({ label, componennt }) => (
            <Tab.Panel key={label}>{componennt}</Tab.Panel>
          ))}
        </Tab.Panels>
      </div>
    </Tab.Group>
  </div>
  )
}

export default FaqIndex


// className={({ selected }) =>
// clsxm('text-base px-12 py-4 font-medium focus:outline-none', {
//   'bg-[#F1F7FF] text-primary border-l-[3px] border-solid border-primary first:rounded-tl-md last:rounded-bl-md':
//     selected
// })
// }
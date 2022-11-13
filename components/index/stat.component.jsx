import React from "react";

const Stat = () => {
    const statItems = [
        {
            amount: 300,
            unit : 'k',
            title : 'Active Users'
        },
        {
            amount: 56,
            unit : 'M+',
            title : 'Transactions'
        },
        {
            amount: 430,
            unit : 'k+',
            title : 'App Downloads'
        },
        {
            amount: 300,
            unit : 'k',
            title : 'Active Users'
        }
    ]
  return (
    <ul className="px-[100px] py-[30px] bg-[#F0F6FF] flex justify-between items-center flex-col md:flex-row">
      {statItems.map((item,id) => (
        <StatFigure key={id} item={item}/>
      ))}
    </ul>
  );
};

export default Stat;

const StatFigure = ({item}) => {
    const {amount,unit,title} = item
  return (
    <li className="my-4 md:my-0 text-center">
      <span className="block text-3xl md:text-4xl 2xl:text-5xl font-bold my-2">{amount}{unit}</span>
      <span className="block text-[#81A8E7] tracking-wider ">{title}</span>
    </li>
  );
};

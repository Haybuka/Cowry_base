const navigation = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "about",
      name: "About",   
    },
    {
      path: "features",
      name: "Features",
    
    },
    {
      path: "services",
      name: "Services",
      layout : 'grid',
      dropdown: [
        {
            id :'1',
          title: 'Commuters chat',
          img: './images/navigation/services/messages.svg',
          body: 'Chat with other commuters like you.'
        },
        {
            id :'2',
          title: 'Inter-wallet transfer',
          img: '/images/navigation/services/wallet-money.svg',
          body: 'Transfer funds to other cowry wallet.'
        },
        {
            id :'3',
          title: 'Bus charter',
          img: '/images/navigation/services/bus.svg',
          body: 'Charter buses for your events and outings'
      
        },
        {
            id :'4',
          title: 'Airtime recharge',
          img: '/images/navigation/services/buy-crypto.svg',
          body: 'Buy airtime from any network provider.'
        },
        {
            id :'5',
          title: 'Pay with phone',
          img: '/images/navigation/services/fi_smartphone.svg',
          body: 'Pay your bus fees right from your phone.'
      
        },
        {
            id :'6',
          title: 'Redeem tickets',
          img: '/images/navigation/services/ticket-2.svg',
          body: 'Redeem your bus tickets with Cowry app'
      
        }
      ]
    },
    {
      path: "blog",
      name: "Blog",
      // dropdown: []
    },
    {
      path: "faqs",
      name: "FAQs",
      // dropdown: []
    },
  ];

  export default navigation
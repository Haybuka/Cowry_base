import Head from 'next/head'
import React from 'react'
import Card from '../components/services/card.component'
const Services = () => {
  return (
    <>
      <Head>
        <title>Services | Cowry</title>
      </Head>

      <main className='px-3 py-10 md:px-auto md:py-20 '>
        {servicesData.map((data, id) => (
          <Card details={data} key={id} />
        ))}
      </main>
    </>
  )
}

const servicesData = [
  {
    id: '1',
    title: 'Merchant Pay',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique dapibus adipiscing pulvinar ante aliquam tristique interdum cum dui. ',
    img: './images/services/iPhone.svg',
    type: 'iphone',
    imgWidth: '',
    // layout : 'flex-row-reverse'
  },
  {
    id: '2',
    title: 'Inter-state travel',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique dapibus adipiscing pulvinar ante aliquam tristique interdum cum dui. ',
    img: './images/services/image_one.png',
    imgWidth: 'md:w-[500px]',
    layout: 'flex-row-reverse'

  },
  {
    id: '3',
    title: 'FLM Scheme',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique dapibus adipiscing pulvinar ante aliquam tristique interdum cum dui. ',
    img: './images/services/image_two.png',
    imgWidth: 'md:w-[500px]',
    // layout : ''
  },
  {
    id: '4',
    title: 'Ferry',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique dapibus adipiscing pulvinar ante aliquam tristique interdum cum dui.  ',
    img: './images/services/image_three.png',
    imgWidth: 'md:w-[500px]',
    layout: 'flex-row-reverse'
  },

]
export default Services
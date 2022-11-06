import React from 'react'
import Head from 'next/head'
import Jumbotron from '../../components/jumbotron'

const Blog = () => {
  const blogpostData = [
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan sagittis a diam cras gravida. Adipiscing eget cursus amet velit.',
      date: 'DECEMBER 13, 2021',
      img: './images/blog/Rectangle 688.svg'


    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan sagittis a diam cras gravida. Adipiscing eget cursus amet velit.',
      date: 'DECEMBER 13, 2021',
      img: './images/blog/Rectangle 698.svg'


    }, {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan sagittis a diam cras gravida. Adipiscing eget cursus amet velit.',
      date: 'DECEMBER 13, 2021',
      img: './images/blog/Rectangle699.svg'


    },
  ]
  return (
    <>
      <Jumbotron text="Blog" />
      <section className='grid grid-cols-2 px-[100px] my-16'>
        <div>
          <article className='flex '>
            <div className='w-[580px]'>
              <img alt='' src="./images/blog/Rectangle 688.svg" className='w-full'/>
            </div>
            <aside className='ml-3 flex justify-between flex-col'>
              <div className='mb-2'>
                <h3 className='font-semibold text-lg'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h3>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan sagittis a diam cras gravida. Adipiscing eget cursus amet velit.
                </p>
              </div>
              <div className='my-2 flex justify-between items-center'>
                <span className='uppercase inline-block font-semibold text-[12px]'>December</span>
                <span className='block w-[25px]'> 
                  <img alt='' src='./images/blog/arrow.svg' className='w-full'/>
                </span>
              </div>
            </aside>
          </article>
        </div>
        <aside className='subscribe'>

        </aside>
      </section>
    </>
  )
}

export default Blog
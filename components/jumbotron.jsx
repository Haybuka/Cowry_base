import React from 'react'

const Jumbotron = ({text}) => {
  return (
    <section className='bg-[#F8FAFF] text-[#011B44] px-[100px] md:py-[120px] flex justify-center items-center font-bold text-3xl md:text-[50px]'>
        <h2>{text}</h2>
    </section>
  )
}

export default Jumbotron
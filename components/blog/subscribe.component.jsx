import React from 'react'
import styles from '../../styles/blogs.module.css'
const Subscribe = () => {
  return (
    <section className={styles.subscribe_blog}>
              <h4 className='text-center md:my-[150px] md:text-3xl text-white 2xl:text-4xl font-semibold'>Subscribe to our newsletter</h4>
              <form>
                 <label className='rounded-lg block bg-[#0B46A5] text-white py-3'>
                    <span className='inline-block mx-4'>
                       <img alt=" "/>
                    </span>
                    <input 
                       type="email" 
                       name="email" 
                       placeHolder="Enter your email"
                       className='bg-transparent text-white outline-none'/>
                 </label>
                 <button className='block py-3 rounded-lg bg-white my-4 mb-[50px] w-full text-base_highlight'>Subscribe</button>
              </form>
           </section>
  )
}

export default Subscribe
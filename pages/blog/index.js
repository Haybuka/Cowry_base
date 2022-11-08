import React from 'react'
import Head from 'next/head'
import Jumbotron from '../../components/jumbotron'
import Subscribe from '../../components/blog/subscribe.component'
// import Posts from '../../components/blog/posts.component'
import BlogTab from '../../components/blog/blogtab.component'
import styles from '../../styles/blogs.module.css'
const Blog = () => {

  return (
    <>
      <Jumbotron text="Blog" />
      <section className='grid grid-cols-2 px-[100px] 2xl:px-[200px] my-16'>
        <BlogTab />

        <aside className='subscribe_blog px-[80px] '>
          <Subscribe />
        </aside>
      </section>
    </>
  )
}

export default Blog
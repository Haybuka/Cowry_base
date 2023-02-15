import React from 'react'
import Head from 'next/head'
import Jumbotron from '../../components/jumbotron'
import Subscribe from '../../components/blog/subscribe.component'
// import Posts from '../../components/blog/posts.component'
import BlogTab from '../../components/blog/blogtab.component'
import styles from '../../styles/blogs.module.css'
import { sortBlogs } from '../../components/blog/blogFilter'

export const getStaticProps = async () => {
  const request = await fetch(
    "https://cowry-website-portal-fhtk54mb6a-uc.a.run.app/api/blogs?populate=*",
    {
      headers: {
        Authorization:
          "Bearer dc9d252c2d58a8af15f95e305b1baceeed566d3f618ad2ded84b5a6e98d0ffdc94479435820ee67bf37b73e75e63f4ba428e1a53660c7a85e87ed3dac827066d4abf0765fc1356038a62b2a5a3b469d0cda2bf270ca38ee0f490891c046260e0db5d9d2f93cfc80bd956528d7872799289dc7baf4543f5e39def5aa74f67f375",
      },
    }
  );
  const data = await request.json();
  return {
    props: {
      blogs: data.data,
    },
  };
};

const Blog = ({ blogs }) => {

  const { allBlogs, categories } = sortBlogs(blogs)

  return (
    <>
      <Jumbotron text="Blog" />
      <section className='grid grid-cols-1 px-3 xl:grid-cols-2 md:px-[80px] 2xl:px-[200px] my-16'>
        <BlogTab categoriesTab={categories} allBlogs={allBlogs} />


        <aside className=' xl:px-[80px]'>
          <Subscribe />
        </aside>
      </section>
    </>
  )
}

export default Blog
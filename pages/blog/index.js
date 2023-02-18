import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Jumbotron from '../../components/jumbotron'
import Subscribe from '../../components/blog/subscribe.component'
// import Posts from '../../components/blog/posts.component'
import BlogTab from '../../components/blog/blogtab.component'
import styles from '../../styles/blogs.module.css'
import { sortBlogs } from '../../components/blog/blogFilter'
import ErrorTab from '../../components/blog/error_tab.component'

export const getStaticProps = async () => {
  try {
    const request = await fetch(
      "https://cowry-website-portal-fhtk54mb6a-uc.a.run.app/api/blogs?populate=*",
      {
        headers: {
          Authorization:
            "Bearer dc9d252c2d58a8af15f95e305b1baceeed566d3f618ad2ded84b5a6e98d0ffdc94479435820ee67bf37b73e75e63f4ba428e1a53660c7a85e87ed3dac827066d4abf0765fc1356038a62b2a5a3b469d0cda2bf270ca38ee0f490891c046260e0db5d9d2f93cfc80bd956528d7872799289dc7baf4543f5e39def5aa74f67f375",
        },
      }
    );

    const categories = await fetch(
      "https://cowry-website-portal-fhtk54mb6a-uc.a.run.app/api/blog-categories",
      {
        headers: {
          Authorization:
            "Bearer dc9d252c2d58a8af15f95e305b1baceeed566d3f618ad2ded84b5a6e98d0ffdc94479435820ee67bf37b73e75e63f4ba428e1a53660c7a85e87ed3dac827066d4abf0765fc1356038a62b2a5a3b469d0cda2bf270ca38ee0f490891c046260e0db5d9d2f93cfc80bd956528d7872799289dc7baf4543f5e39def5aa74f67f375",
        },
      }
    )
    const data = await request.json();
    const blogCategories = await categories.json()

    return {
      props: {
        blogs: data.data,
        blogCategories: blogCategories.data
      },
    };
  } catch (error) {
    return { props: { error: true, message: 'network error' } }
  }

};

// const Blog = ({ blogs, blogCategories }) => {
const Blog = ({ blogs, blogCategories, error, message }) => {
  const [toolTip, setToolTip] = useState(error)
  const { allBlogs, categories } = sortBlogs(blogs, blogCategories)


  setTimeout(() => {
    error && setToolTip(previous => !previous)
  }, 4000);



  return (
    <>
      <Jumbotron text="Blog" />
      <section className='grid grid-cols-1 px-3 xl:grid-cols-2 md:px-[80px] 2xl:px-[200px] my-16'>
        {!error ? (
          <BlogTab categoriesTab={categories} allBlogs={allBlogs} />

        ) :
          (
            <ErrorTab error={error} />
          )}

        <aside className=' xl:px-[80px]'>
          <Subscribe />
        </aside>
        {
          toolTip && <p className='fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 bg-white px-4 py-3 rounded-lg shadow-lg tracking-widest'> you are currently <span className='text-red-500'>offline</span></p>
        }
      </section>
    </>
  )
}

export default Blog
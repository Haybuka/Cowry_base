import React, { useState } from 'react'
import Head from 'next/head'
import Jumbotron from '../components/jumbotron'
// import FaqClosure from '../components/faqs/disclosure.component'
import FaqIndex from '../components/faqs/faq.component'
import axios from 'axios'

export const getStaticProps = async () => {
  const request = await fetch('https://cowry-website-portal-fhtk54mb6a-uc.a.run.app/api/faqs?populate=*', {
    headers: {
      Authorization: 'Bearer dc9d252c2d58a8af15f95e305b1baceeed566d3f618ad2ded84b5a6e98d0ffdc94479435820ee67bf37b73e75e63f4ba428e1a53660c7a85e87ed3dac827066d4abf0765fc1356038a62b2a5a3b469d0cda2bf270ca38ee0f490891c046260e0db5d9d2f93cfc80bd956528d7872799289dc7baf4543f5e39def5aa74f67f375'
    }
  })
  const data = await request.json()

  return {
    props: {
      faqs: data?.data
    }
  }
}


const Faqs = ({ faqs }) => {
  // console.log(faqs)
  let faqPost = [
    {
      id: 1,
      labels: 'General Questions',
      posts: []
    },
    {
      id: 2,
      labels: 'Card related issues',
      posts: []
    },
    {
      id: 3,
      labels: 'App related issues',
      posts: []
    }
  ]
  let newLabels = faqs.map(faq => faq.attributes?.faq_category.data.attributes.title && { title: faq.attributes?.faq_category.data.attributes.title })
  const filteredFaqs = faqs.filter((faq) => {
    if (faq.attributes?.faq_category.data.attributes.title.toLocaleLowerCase() === 'General Questions'.toLocaleLowerCase()) {
      let data = { id: Math.floor(Math.random() * 10000), title: faq.attributes.question, body: faq.attributes.answer }
      faqPost[0].posts?.push(data)
    } else if (faq.attributes?.faq_category.data.attributes.title.toLocaleLowerCase() === 'Card related issues'.toLocaleLowerCase()) {
      faqPost[1].posts.push({ id: Math.floor(Math.random() * 10000), title: faq.attributes.question, body: faq.attributes.answer })

    } else {
      faqPost[2].posts.push({ id: Math.floor(Math.random() * 10000), title: faq.attributes.question, body: faq.attributes.answer })
    }
  })



  console.log(faqPost)
  // Refactor using the line below
  // faqPosts.find( post => post?.labels === 'General Questions' ? post?.posts.push('hello') : faqPosts.push({id:4,labels:'Affirmation',posts:[]})); 


  let [faqsPost] = useState(faqPost)
  return (
    <>
      <Head>
        <title>Faqs</title>
      </Head>
      <main>
        <Jumbotron text="FAQs" />
        <section className='my-6'>
          <FaqIndex posts={faqsPost} />
        </section>
      </main>
    </>
  )
}

export default Faqs
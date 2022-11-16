import React from 'react'

const BlogItem = () => {
    return (
        <section className='px-4 md:px-[60px] lg:px-[100px] py-6'>
            <p className=' text-base_highlight'>Business</p>
            <h3 className='text-lg leading-6 my-2 font-semibold tracking-wider lg:text-3xl'>The Difference Between The Cowry Card and The Cowry App</h3>
            <p className='text-sm text-gray-300 flex '>
                <span className='mr-3 inline-block'>
                    Dec 15, 2021 •

                </span>
                <span>
                    5 mins read

                </span>
            </p>

            <aside className='flex items-center my-4'>
                <div className='rounded-full h-8 w-8 md:h-10 md:w-10 bg-gray-300 mr-4'>

                </div>
                <p>Damilola Adebesin</p>
            </aside>
            <aside className='my-8'>
                <img src="/images/blog/blogitem.svg" alt=" " />
            </aside>
            <p className='my-8'>
                When you think about transportation payment in Lagos state I'm sure The Cowry Card takes first place in your mind.  If it doesn't, I'm not sure you're living in Lagos, Nigeria
            </p>
            <p className='my-8'>
                In any case, the Cowry card was introduced in 2020 in the aftermath of #Covid-19 when everyone needed a mode of payment that reduces handling of cash and also aids contact tracing.

            </p>
            Cowry to the rescue!tumblr_mo35preJ6e1rgpyeqo1_250.gif

            <p className='my-8'> What is special about the Cowry Card?

                Apart from being a mode of payment that promotes a cashless economy, the cowry card works OFFLINE. That's right, you don't need an internet connection to use your cowry card. And that is the differentiating factor between the Cowry Card and the Cowry App
            </p>
            <p className='my-8'>
                Therefore, in a situation whereby you aren't having strong network connection, your cowry card is the best option.
            </p>
        </section>
    )
}

export default BlogItem
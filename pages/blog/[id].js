import React, { useEffect, useState } from 'react'

export const getStaticPaths = async () => {
    const response = await fetch(
        "https://cowry-website-portal-fhtk54mb6a-uc.a.run.app/api/blogs?populate=*",
        {
            headers: {
                Authorization:
                    "Bearer dc9d252c2d58a8af15f95e305b1baceeed566d3f618ad2ded84b5a6e98d0ffdc94479435820ee67bf37b73e75e63f4ba428e1a53660c7a85e87ed3dac827066d4abf0765fc1356038a62b2a5a3b469d0cda2bf270ca38ee0f490891c046260e0db5d9d2f93cfc80bd956528d7872799289dc7baf4543f5e39def5aa74f67f375",
            },
        }
    );

    const data = await response.json();
    const paths = data.data.map(post => {
        return {
            params: { id: post.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const response = await fetch(`https://cowry-website-portal-fhtk54mb6a-uc.a.run.app/api/blogs/${id}?populate=*`, {
        headers: {
            Authorization:
                "Bearer dc9d252c2d58a8af15f95e305b1baceeed566d3f618ad2ded84b5a6e98d0ffdc94479435820ee67bf37b73e75e63f4ba428e1a53660c7a85e87ed3dac827066d4abf0765fc1356038a62b2a5a3b469d0cda2bf270ca38ee0f490891c046260e0db5d9d2f93cfc80bd956528d7872799289dc7baf4543f5e39def5aa74f67f375",
        },
    })
    const data = await response.json()

    return {
        props: {
            blog: data.data
        }
    }
}

const BlogItem = ({ blog }) => {
    const { author, blog_category, image, title, content, createdAt, duration } = blog?.attributes
    const [text, setText] = useState([]);

    console.log(image)
    useEffect(() => {
        formatText(content);
    }, [content]);

    const formatText = (body) => {
        const texts = body.split(">");
        setText(texts);
    };

    return (
        <section className='px-4 md:px-[60px] lg:px-[100px] py-6'>
            <p className=' text-base_highlight'>{blog_category?.data.attributes.title}</p>
            <h3 className='text-lg leading-6 my-2 font-semibold tracking-wider lg:text-3xl'>{title}</h3>
            <p className='text-sm text-gray-300 flex '>
                <span className='mr-3 inline-block'>
                    {createdAt.split("T")[0]} •

                </span>
                <span>
                    {duration} read

                </span>
            </p>

            <aside className='flex items-center my-4'>
                <div className='rounded-full h-8 w-8 md:h-10 md:w-10 bg-gray-300 mr-4'>

                </div>
                <p>{author.data.attributes.name}</p>
            </aside>
            <aside className='my-8'>
                <img src={`/${image.data.attributes.url}`} alt={image.alternativeText} />
            </aside>
            {
                text.map((txt, id) => (
                    <p className='my-8' key={id}>
                        {txt}
                    </p>
                ))
            }
            {/* <p className='my-8'>
                When you think about transportation payment in Lagos state Im sure The Cowry Card takes first place in your mind.  If it doesnt, Im not sure youre living in Lagos, Nigeria
            </p>
            <p className='my-8'>
                In any case, the Cowry card was introduced in 2020 in the aftermath of #Covid-19 when everyone needed a mode of payment that reduces handling of cash and also aids contact tracing.

            </p>
            Cowry to the rescue!tumblr_mo35preJ6e1rgpyeqo1_250.gif

            <p className='my-8'> What is special about the Cowry Card?

                Apart from being a mode of payment that promotes a cashless economy, the cowry card works OFFLINE. Thats right, you dont need an internet connection to use your cowry card. And that is the differentiating factor between the Cowry Card and the Cowry App
            </p>
            <p className='my-8'>
                Therefore, in a situation whereby you arent having strong network connection, your cowry card is the best option.
            </p> */}
        </section>
    )
}

export default BlogItem
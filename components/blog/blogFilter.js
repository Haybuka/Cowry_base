export const sortBlogs = (blogs, blogCategories) => {
    const allBlogs = [];

    //create categories to tab
    const categories = blogCategories.map(blog => blog?.attributes.title)
    // console.log(blogCategories)
    // console.log(Bcategories)
    // const categories = ['All', 'Business', 'Startup', 'Products']

    //create structure based off the blogs
    const blogCategory = blogs.map((blog, id) => blog.attributes && {
        id: blog?.id,
        category: blog?.attributes.blog_category.data.attributes.title,
        title: blog?.attributes.title,
        body: blog?.attributes.content,
        date: blog?.attributes.createdAt,
        img: blog?.attributes.image
    })

    //filter and create categories,which will be rendered.
    for (let i = 0; i < categories.length; i++) {
        const filtered = blogCategory.filter(blog => blog.category == categories[i])

        if (categories[i].toLowerCase() == 'All'.toLowerCase()) {

            allBlogs.push(
                {
                    name: categories[i],
                    value: blogCategory
                }
            )

        } else {

            allBlogs.push({
                name: categories[i],
                value: filtered.length > 0 ? filtered : [{
                    id: -1,
                    category: categories[i],
                    title: 'No data',
                    body: 'No data',
                    date: 'No data',
                    img: 'No data'
                }]
            })
        }

    }

    allBlogs.push(blogCategory)
    // categories.map(cat => console.log({ cat: allBlogs }))
    // categories.map(cat => console.log({ cat: allBlogs.filter(blog => blog?.category.toLowerCase() == cat?.title.toLowerCase()) }))
    // console.log(blogCategory)
    return { allBlogs, categories }
}
// {cat?.title : allBlogs.filter(blog => blog.category.toLowerCase() == cat?.title.toLowerCase())}
// All: [
//     {
//       title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan sagittis a diam cras gravida. Adipiscing eget cursus amet velit.",
//       date: "DECEMBER 13, 2021",
//       img: "./images/blog/Rectangle 688.svg",
//       id: 1,
//     },
//     {
//       title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan sagittis a diam cras gravida. Adipiscing eget cursus amet velit.",
//       date: "DECEMBER 13, 2021",
//       img: "./images/blog/Rectangle 698.svg",
//       id: 2,
//     },
//   ]
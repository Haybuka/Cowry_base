import Link from "next/link";
import React from "react";
// "./images/blog/Rectangle 688.svg"
const Post = (post) => {
  const {title,body,img,date} = post.post
  return (
    <article className="block md:grid grid-cols-2 my-10 md:my-0 md:mb-5">
      <div className="">
        <img alt="" src={img} className="w-full" />
      </div>
      <aside className="my-3 md:ml-5 md:my-0 flex justify-between flex-col">
        <div className="mb-2">
          <Link href={`/blog/${title}`}>
          <h3 className="font-semibold text-lg">
            {title}
          </h3>
          </Link>
          <p className="text-sm">
            {body}
            {body}
          </p>
        </div>
        <div className="my-2 flex justify-between items-center">
          <span className="uppercase inline-block text-[12px]">{date}</span>
          <span className="block w-[25px]">
            <img alt="" src="./images/blog/arrow.svg" className="w-full" />
          </span>
        </div>
      </aside>
    </article>
  );
};

export default Post;

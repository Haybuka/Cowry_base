import Link from "next/link";
import React, { useEffect, useState } from "react";
// "./images/blog/Rectangle 688.svg"
const Post = (post) => {
  const { title, body, img, date, id } = post.post;
  const [text, setText] = useState([]);

  useEffect(() => {
    formatText(body);
  }, [body]);

  const formatText = (body) => {
    const texts = body.split(">");
    setText(
      texts.map((txt) => (txt.length > 150 ? `${txt.slice(0, 100)}...` : txt))
    );
  };

  return (
    <article className="block md:grid grid-cols-2 my-10 md:my-0 md:mb-5">
      <div className="">
        <img alt="" src="./images/blog/Rectangle 688.svg" className="w-full" />
      </div>
      <aside className="my-3 md:ml-5 md:my-0 flex justify-between flex-col">
        <div className="mb-2">
          <Link href={`/blog/${id}`}>
            <h3 className="font-semibold text-lg">{title}</h3>
          </Link>
          <ul>
            <li className="my-1">{text[0]}</li>
            <li className="my-1">{text[1]}</li>
          </ul>
        </div>
        <div className="my-2 flex justify-between items-center">
          <span className="uppercase inline-block text-[12px]">
            {date.split("T")[0]}
          </span>
          <span className="block w-[25px]">
            <img alt="" src="./images/blog/arrow.svg" className="w-full" />
          </span>
        </div>
      </aside>
    </article>
  );
};

export default Post;

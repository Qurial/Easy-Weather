import React from "react";

const NewsPageItem = ({ title, pubDate, description, image_url, link }) => {
  return (
    <>
      <a
        href={link}
        className="p-2 flex md:hidden flex-col textContainerItem transition-all duration-75 cursor-pointer bg-neutral-700 my-3 relative">

        <h2 className="p-1 text-xl textContainerTitle">
          {title}
        </h2>

        <img src={image_url} alt="" className="object-contain" />

        <article className="min-h-48 p-1 textContainerArticle break-words break-all">
          {description}
        </article>
        <span className="p-1 w-fit absolute bottom-0 right-0 dark:text-neutral-200">
          {pubDate}
        </span>
      </a>









      <a
        href={link}
        className="p-5 rounded-lg md:flex flex-row break-words textContainerItem transition-all duration-75 cursor-pointer hidden mr-auto ml-auto max-w-[1024px] bg-neutral-700 my-6 relative">
        {image_url ? <img src={image_url} alt="" className="object-contain w-1/2" /> : null}

        <div>
          <h2 className="p-1 text-xl textContainerTitle">
            {title}
          </h2>
          <article className="min-h-48 p-1 textContainerArticle break-words break-all">
            {description}
          </article>
        </div>
        <span className="p-1 w-fit float-right absolute right-2 bottom-0 dark:text-neutral-200">
          {pubDate}
        </span>
      </a>
    </>
  )
}

export default NewsPageItem
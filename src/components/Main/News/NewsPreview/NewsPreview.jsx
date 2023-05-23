import React from "react";

const NewsPreview = ({ newsTitle, newsArticle, newsDate }) => {
  return (
    <div className="p-2 flex flex-row break-words textContainerItem transition-all duration-75 cursor-pointer">
      <div className="p-1 text-3xl text-emerald-500 font-thin">
        {newsDate}
      </div>
      <div className="ml-2">
        <h2 className="min-w-52 lg:w-56 p-1 text-xl textContainerTitle">
          {newsTitle}
        </h2>
        <article className="min-w-52 lg:w-56 min-h-48 p-1 textContainerArticle">
          {newsArticle}
        </article>
      </div>
    </div>
  )
}

export default NewsPreview
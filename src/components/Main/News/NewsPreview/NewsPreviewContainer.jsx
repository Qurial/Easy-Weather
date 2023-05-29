import React from "react";
import NewsPreview from "./NewsPreview";

const NewsPreviewContainer = () => {



  return (
    <section className="bg-neutral-700 w-full flex justify-around py-12 mt-10 relative text-white">
      <h2 className="absolute top-2 left-5 text-xl">News</h2>
      {news.filter((item, index) => index < 3)
        .map((item) => <NewsPreview
          newsDate={item.date}
          newsTitle={item.title}
          newsArticle={item.article}
        />
        )}
    </section>
  )

}

export default NewsPreviewContainer
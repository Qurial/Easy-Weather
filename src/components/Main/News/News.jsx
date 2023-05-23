import React from "react";
import NewsPreview from "./NewsPreview/NewsPreview";

const news = [
  {
    date: '10.05',
    title: 'Lorem, ipsum dolor sit amet',
    article: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, eius deleniti dolorem asperiores at sequi atque ex? Doloribus eveniet eos impedit corrupti nemo voluptas nam, eligendi maxime molestiae molestias reiciendis.'
  },
  {
    date: '09.05',
    title: 'dolorem asperiores at sequi atque ex?',
    article: 'Doloribus eveniet eos impedit corrupti nemo voluptas nam, eligendi maxime molestiae molestias reiciendis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, eius deleniti dolorem asperiores at sequi atque ex?'
  },
  {
    date: '08.05',
    title: 'Doloribus eveniet eos impedit',
    article: 'Magni, eius deleniti dolorem asperiores at sequi atque ex? Doloribus eveniet eos impedit corrupti nemo voluptas nam, eligendi maxime molestiae molestias reiciendis.'
  },
]

const News = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row justify-around items-center lg:items-stretch py-12 mt-44 relative textContainerColor textContainerTitle">
      <h2 className="absolute top-2 left-5 text-xl">News</h2>
      {news.filter((item, index) => index < 3)
        .map((item) => <NewsPreview
          newsDate={item.date}
          newsTitle={item.title}
          newsArticle={item.article}
        />)}
    </section>
  )
}

export default News
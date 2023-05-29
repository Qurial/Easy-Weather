import React, { useEffect } from "react";
import NewsPageItem from "./NewsPageItem/NewsPageItem";
import { NewsAPI } from "../../api/NewsAPI";
import { setNews, setNewsError, setNewsSuccess } from "../../Store/News/News.slice";
import { useDispatch, useSelector } from "react-redux";

const NewsPage = () => {

  const dispatch = useDispatch()
  const news = useSelector(state => state.news?.articles?.results)
  const isLoading = useSelector(state => state.news.isLoading)
  const error = useSelector(state => state.news.error)

  useEffect(() => {
    getNews()
  }, [])

  const getNews = async () => {
    try {
      dispatch(setNews())
      const response = await NewsAPI.getNews()
      dispatch(setNewsSuccess(response))
      console.log('news fetched')
    }
    catch(err) {
      dispatch(setNewsError('err'))
    }
  }

  return (
    <>
      {(!isLoading && !error) ? <div className="mt-20">


        {news.map(item => <NewsPageItem
          key={item.title}
          title={item.title}
          content={item.content}
          country={item.country}
          creator={item.creator}
          description={item.description}
          image_url={item.image_url}
          link={item.link}
          pubDate={item.pubDate}
        />)}

      </div>: 'Loading...'}
      {error ? <div>{error}</div> : null}
    </>
  )
}

export default NewsPage
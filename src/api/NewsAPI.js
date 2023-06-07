import { newsAPIKey } from "./APIKeys";

const options = {
  method: 'GET',
};
const category = 'environment'
const language = 'en'

export const NewsAPI = {
  getNews: async () => {
    let response = await fetch(`https://newsdata.io/api/1/news?apikey=${newsAPIKey}&category=${category}&language=${language}`, options)
    return response.json()
  }
}
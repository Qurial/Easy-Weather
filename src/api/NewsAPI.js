const options = {
  method: 'GET',
};
const apiKey = 'pub_17836a8932516dd7c0b5dfd4edf056faded15'
const category = 'environment'
const language = 'en'

export const NewsAPI = {
  getNews: async () => {
    let response = await fetch(`https://newsdata.io/api/1/news?apikey=${apiKey}&category=${category}&language=${language}`, options)
    return response.json()
  }
}
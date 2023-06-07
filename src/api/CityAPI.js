import { cityAPIKey } from "./APIKeys";

const options = {
  method: 'GET',
};

export const CitiesAPI = {
  getCity: async (cityName) => {
    let response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${cityName}&type=city&apiKey=${cityAPIKey}`, options)
    return response.json()
  }
}
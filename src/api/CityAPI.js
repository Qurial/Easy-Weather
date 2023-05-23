const options = {
  method: 'GET',
};

export const CitiesAPI = {
  getCity: async (cityName) => {
    let response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${cityName}&type=city&apiKey=d35391049fe140cf973f9c67993e7682`, options)
    return response.json()
  }
}
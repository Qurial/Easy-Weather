export const fetchSavedCities = () => {
  const userData = localStorage.getItem("savedCities") !== null
    ? JSON.parse(localStorage.getItem("savedCities"))
    : []
console.log(userData)
  return userData
}
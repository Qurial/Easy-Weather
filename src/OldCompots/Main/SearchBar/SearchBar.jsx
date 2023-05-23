import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CitiesAPI } from "../../../api/CityAPI";
import './SearchBar.css'
import HintsList from "./HintsList/HintsList";

const SearchBar = ({ setLocationCoords }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [hintsList, setHintsList] = useState([]);
  const [query, setQuery] = useState("");
  const [isHintsListShown, setIsHintsListShown] = useState(false);
  const [cityName, setCityName] = useState('');

  const toggleHintsList = (isShown) => {
    setTimeout(() => setIsHintsListShown(isShown), 500)
  }

  useEffect(() => {
    const fetchTimeOut = setTimeout(() => {
      setCityName(query);
    }, 500);
    return () => clearTimeout(fetchTimeOut);
  }, [query]);

  useEffect(() => {
    if (cityName.length === 0) setHintsList([]);
    if (cityName.length < 3) return;

    CitiesAPI.getCity(cityName)
      .then(response => {
        if (response.statusCode === 400) throw ('error');
        setHintsList(response.features);
      })
      .catch(() => { })
  }, [cityName]);

  const onSubmit = () => {
    CitiesAPI.getCity(query)
      .then(response => {
        if (response.statusCode === 400) throw ('error');
        setLocationCoords([response.features[0].properties.lat, response.features[0].properties.lon])
        toggleHintsList(false);
      })
      .catch(() => { })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="seacrh-form">
      <input
        {...register("cityName",
          {
            minLength: 3,
          })}
        className="seacrh-form__field"
        placeholder="Search for places..."
        onChange={event => setQuery(event.target.value)}
        onFocus={() => toggleHintsList(true)}
        onBlur={() => toggleHintsList(false)}
      />

      <input type="submit" className="search-form__btn btn btn--primary btn--inside uppercase" value='find' />

      <HintsList
        hintsList={hintsList}
        setHintsList={setHintsList}
        setLocationCoords={setLocationCoords}
        isHintsListShown={isHintsListShown} />
    </form>
  );
}

export default SearchBar;
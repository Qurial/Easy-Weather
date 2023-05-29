import React, { useEffect, useState } from "react";
import Search from "./Search";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchCity } from "../../../Store/Forecast/ForecastThunk";

const SearchContainer = () => {

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch()

  const [query, setQuery] = useState("");
  const [queryCityName, setQueryCityName] = useState([]);
  const [isHintsListShown, setIsHintsListShown] = useState(false);

  const toggleHintsList = (isShown) => {
    setTimeout(() => setIsHintsListShown(isShown), 500)
  }

  useEffect(() => {
    const fetchTimeOut = setTimeout(() => {
      setQueryCityName(query);
    }, 500);
    return () => clearTimeout(fetchTimeOut);
  }, [query]);

  const onSubmit = () => {
    dispatch(fetchCity(query))
    setQuery('')
  }


  return (
    <Search
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      toggleHintsList={toggleHintsList}
      setQuery={setQuery}
      query={query}
      isHintsListShown={isHintsListShown}
      queryCityName={queryCityName}
    />
  )
}

export default SearchContainer
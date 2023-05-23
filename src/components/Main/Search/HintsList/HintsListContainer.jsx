import React, { useEffect, useState } from "react";
import HintsList from "./HintsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchCitiesList, fetchCity } from "../../../../Store/Forecast/ForecastThunk";

const HintsListContainer = ({ isHintsListShown, queryCityName }) => {

	const [hintsList, setHintsList] = useState([]);
	const dispatch = useDispatch()

	useEffect(() => {
		if (queryCityName.length === 0) setHintsList([]);
		if (queryCityName.length < 3) return;
		dispatch(fetchCitiesList(queryCityName))
			.then(hintsList => setHintsList(hintsList))
	}, [queryCityName]);

	const handleOnClick = (query) => {
		dispatch(fetchCity(query))
	}

	return (
		<>
			{isHintsListShown
				? <HintsList
					hintsList={hintsList}
					handleOnClick={handleOnClick}
					/>
				: null}
		</>
	)
}

export default HintsListContainer
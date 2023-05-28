import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import HintsListContainer from "./HintsList/HintsListContainer";

const Search = ({ handleSubmit, onSubmit, register, toggleHintsList, setQuery, query, isHintsListShown, queryCityName }) => {

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="absolute z-20 w-full flex justify-center mt-20 items-center dark:text-neutral-100">
			<input
				{...register("cityName",
					{
						minLength: 3,
					})}
				className="py-3 px-5 pr-14 text-lg rounded-full w-64 focus:w-5/6
				sm:focus:w-1/2 md:focus:w-1/3 transition-all duration-500
				text-center outline-none delay-200 focus:delay-0
				dark:bg-neutral-700 dark:placeholder:text-neutral-100"
				placeholder="Search for places..."
				value={query}
				onChange={event => setQuery(event.target.value)}
				onFocus={() => toggleHintsList(true)}
				onBlur={() => toggleHintsList(false)}
			/>

			<button type="submit" className="buttonColor p-2 -ml-12 w-10 h-10 rounded-full transition-all" >
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</button>

			<HintsListContainer
				isHintsListShown={isHintsListShown}
				queryCityName={queryCityName}
			/>
		</form>
	)
}

export default Search
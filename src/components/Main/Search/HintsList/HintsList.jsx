import React from "react";

const HintsList = ({ hintsList, handleOnClick }) => {
	return (
		<ul className="absolute top-14 rounded-lg overflow-hidden w-5/6 sm:w-1/2 md:w-1/3 shadow-xl bg-neutral-50 dark:bg-neutral-700">
			{hintsList.map(item => <li
				className="z-50 px-2 py-3 tileColor transition-all cursor-pointer"
				onClick={() => {
					handleOnClick(item.properties.city + ' ' + item.properties.country)
				}}>
				{item?.properties?.formatted}
			</li>
			)
			}
		</ul>
	)
}

export default HintsList
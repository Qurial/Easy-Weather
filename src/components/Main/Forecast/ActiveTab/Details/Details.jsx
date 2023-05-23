import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';

const Detail = ({ detailText, iconName }) => {
	return (
		<span className="w-14 text-sm lg:text-base lg:w-16">
			<FontAwesomeIcon icon={iconName} className='text-gray-600 dark:text-gray-100' />
			&nbsp;{detailText}
		</span>
	)
}

const Details = ({ speedValue, speedUnits, percipation, windDirection }) => {
	return (
		<section className='flex flex-row justify-between'>
			<Detail iconName={faDroplet} detailText={percipation} />
			<Detail iconName={faCompass} detailText={windDirection} />
			<Detail iconName={faWind} detailText={speedValue + speedUnits} />
		</section>
	)
}

export default Details
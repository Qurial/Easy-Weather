import React from "react";

const MainInfo = ({ temperature, degreeSign, realTemperature }) => {
	return (
		<>
			<span className='block text-4xl font-thin'>
				{temperature}&#176;
				{degreeSign}
			</span>

			<span className='block text-sm'>Real feel:
				{realTemperature}&#176;{degreeSign}
			</span>
		</>
	)
}

export default MainInfo
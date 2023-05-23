import React from "react";

const Date = ({ weekDaysNames, monthsNames, currentWeather, getLocalTime }) => {
	const getFullDate = date => {
		return (date.getDate() < 10) ? '0' : null + date.getDate() + ' ' + monthsNames[date.getMonth()]
	}

	let date = getLocalTime(currentWeather?.dt)
	return (
		<div className="main__date">
			<span className="main__date--week-day">
				{weekDaysNames[date.getDay()]}&nbsp;
			</span>

			<span className="main__date--time">
				{date.getHours()}:00
			</span>

			<span className="main__date--full-date">
				{getFullDate(date)}
			</span>
		</div>
	)
}

export default Date
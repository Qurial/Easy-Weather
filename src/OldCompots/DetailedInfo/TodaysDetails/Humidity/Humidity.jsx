import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faDroplet } from '@fortawesome/free-solid-svg-icons'

const Humidity = ({ currentWeather }) => {
	const getHumidityLevel = (humidity) => {
		switch (true) {
			case (humidity < 25): return 'too dry😩'
			case (humidity < 30): return 'fair😄'
			case (humidity < 60): return 'Normal👍'
			case (humidity < 70): return 'fair😅'
			default: return 'too humid😰'
		}
	}
	return (
		<div className="summit-card summit-humidity">
			<p className="summit-card__name">
				Humidity <FontAwesomeIcon icon={faDroplet} />
			</p>
			
			<p className="summit-humidity__level">
				{currentWeather.main.humidity}<span>%</span>
			</p>

			<p className="summit-humidity__description">
				{getHumidityLevel(currentWeather.main.humidity)}
			</p>
		</div>
	)
}

export default Humidity
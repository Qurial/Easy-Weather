import React from "react";
import './SettingMenu.css';

const SettingsMenu = ({ toggleForecast, isWeekForecast, handleUnitsSetting }) => {
    return (
        <>
            <div className="switch details__settings--forecast-switch">
                <input
                    type="radio"
                    id="radio-one"
                    name="switch-one"
                    value="Today"
                    onChange={() => toggleForecast(!isWeekForecast)} />
                <label htmlFor="radio-one">Today</label>
                
                <input
                    type="radio"
                    id="radio-two"
                    name="switch-one"
                    value="Week"
                    onChange={() => toggleForecast(!isWeekForecast)}
                    defaultChecked />
                <label htmlFor="radio-two">Week</label>
            </div>

            <div className="switch details__settings--degree-switch">
                <input
                    type="radio"
                    id="radio-three"
                    name="switch-two"
                    value="&#176;F"
                    onChange={() => handleUnitsSetting('imperial')} />
                <label htmlFor="radio-three">&#176;F</label>
                <input
                    type="radio"
                    id="radio-four"
                    name="switch-two"
                    value="&#176;C"
                    onChange={() => handleUnitsSetting('metric')}
                    defaultChecked />
                <label htmlFor="radio-four">&#176;C</label>
            </div>
        </>
    )
}

export default SettingsMenu
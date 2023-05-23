import React, { useEffect, useState } from "react";

const Cloudiness = ({ currentWeather, iconsPath }) => {
  const [cloudIcon, setCloudIcon] = useState('');
  const [cloudLevel, setCloudLevel] = useState('');
  
  useEffect(() => {
    getCloudLevel(currentWeather?.clouds.all)
  }, [currentWeather])

  const getCloudLevel = (cloudiness) => {

    const setCloudInfo = (cloudinessString, cloudIconId) => {
      setCloudLevel(cloudinessString);
      setCloudIcon(cloudIconId + currentWeather?.sys.pod)
    }

    switch (true) {
      case cloudiness <= 10:
        setCloudInfo('clear', '01'); break;

      case cloudiness <= 25:
        setCloudInfo('fair', '02'); break;

      case cloudiness <= 50:
        setCloudInfo('Partly cloudy', '03'); break;

      case cloudiness <= 84:
        setCloudInfo('Mostly cloudy', '04'); break;

      default:
        setCloudInfo('Overcast', '04'); break;
    }
  }

  return (
    <div className="main__cloudiness">
      <img className="main__cloudiness--icon"
        src={`${iconsPath}${cloudIcon}.svg`} alt={cloudLevel} />

      <span className="main__cloudiness--description">
        {cloudLevel}
      </span>
    </div>
  )
}

export default Cloudiness
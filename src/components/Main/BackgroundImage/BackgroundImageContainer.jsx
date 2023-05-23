import React, { useEffect, useState } from "react";
import BackgroundImage from "./BackgroundImage";
import { useSelector } from "react-redux";

const BackgroundImageContainer = () => {

  const loadingPhoto = useSelector(state => state.forecast.cityPhoto?.small)
  const photo = useSelector(state => state.forecast.cityPhoto?.large2x)

  const [isHidden, setIsHidden] = useState(false)
  useEffect(() => {
    setIsHidden(false)
  }, [loadingPhoto]);

  const makeHidden = (isHidden) => {
    return isHidden ? 'hidden' : '';
  }

  return <BackgroundImage
    makeHidden={makeHidden}
    isHidden={isHidden}
    setIsHidden={setIsHidden}
    loadingPhoto={loadingPhoto}
    photo={photo}
  />

}

export default BackgroundImageContainer
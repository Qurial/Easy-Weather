import React from "react";

const BackgroundImage = ({ photo, makeHidden, isHidden, setIsHidden, loadingPhoto }) => {

  return (
    <>
      <img
        src={photo}
        alt="landscape"
        className={`object-cover absolute object-center w-full h-[28rem] ${makeHidden(!isHidden)}`}
        onLoad={() => setIsHidden(true)} />
      <img
        src={loadingPhoto}
        alt="landscape"
        className={`object-cover absolute object-center w-full h-[28rem] blur-lg ${makeHidden(isHidden)}`} />
    </>
  )
}

export default BackgroundImage
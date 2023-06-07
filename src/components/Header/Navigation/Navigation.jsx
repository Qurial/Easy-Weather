import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import defaultImage from '../../../assets/profile-default.svg'
import { motion } from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../../firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { clearUserData, setUserData } from "../../../Store/Auth/Auth.slice";
import { NavLink } from "react-router-dom";
import Subscription from "./Subscription/Subscription";
import ProfileMenu from "./ProfileMenu/ProfileMenu";

const Link = ({ link, name }) => {
  return <NavLink to={link} className='m-0 p-4 text-lg sm:p-0 sm:m-4 hover:text-emerald-500 transition-all ease-out'>
    {name}
  </NavLink>
}

const Navigation = () => {
  const ref = useRef(null)
  const dispatch = useDispatch()
  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider()

  const userData = useSelector(state => state.auth?.userData?.providerData)
  const profileImage = useSelector(state => state.auth?.userData?.providerData?.photoURL)
  const displayingProfileImage = (profileImage) ? profileImage : defaultImage;


  const [isMenuShown, setIsMenuShown] = useState(false)

  const handleProfileClick = () => {
    if (userData) setIsMenuShown(!isMenuShown);
    else login();
  }

  const login = async () => {
    const response = await signInWithPopup(firebaseAuth, provider)
    dispatch(setUserData({
      providerData: response.user.toJSON().providerData[0],
      refreshToken: response.user.toJSON().stsTokenManager.refreshToken
    }));
    localStorage.setItem('user', JSON.stringify(response.user.providerData[0]))
  };

  const logout = async () => {
    localStorage.clear()
    dispatch(clearUserData())
    setIsMenuShown(!isMenuShown)
  };

  return (
    <>
      {/* <button className='block sm:hidden'>
        <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
      </button> */}
      <nav className='bg-inherit flex sm:flex-row flex-col items-center sm:relative sm:mt-0'>
        <Link link={'/'} name={'Home'} />
        <Link link={'/news'} name={'News'} />
        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.button
              whileTap={{ scale: 1.05 }}
              onClick={() => handleProfileClick()}>
              <img src={displayingProfileImage} alt="profile" className="w-9 mx-1 bg-neutral-200 p-px rounded-full box-content" />
            </motion.button>
            <ProfileMenu isMenuShown={isMenuShown} logout={logout} />
          </div>

          <button
            onClick={() => ref.current.showModal()}
            className='sm:text-lg text-white bg-emerald-500 hover:bg-emerald-600 px-5 py-3 rounded-3xl transition-all ease-in-out ml-4 active:scale-95'>
            Subscribe
          </button>
        </div>
      </nav>
      <Subscription forwardRef={ref} />
    </>
  )
}

export default Navigation
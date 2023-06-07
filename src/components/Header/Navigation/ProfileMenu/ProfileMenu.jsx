import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";

const ProfileMenu = ({isMenuShown, logout}) => {
  const variants = {
    open: { opacity: 1, visbility: "visible"},
    closed: { opacity: 0, visibility: "hidden", transition: {visibility: {delay: 0.5}} },
  }
  return (
    <motion.div
    className={`absolute flex flex-col items-center gap-y-2 bg-neutral-200 dark:bg-neutral-600 w-32 py-4 rounded-lg left-1/2 -translate-x-1/2 top-12`}
    animate={isMenuShown ? "open" : "closed"}
    variants={variants}
    >
      <a href="/" className="hover:text-emerald-500 transition-all">Add article <FontAwesomeIcon icon={faPlus}/></a>
      <button
      className="bg-neutral-50 dark:bg-neutral-700 dark:hover:bg-neutral-800 w-3/4 py-2 rounded-lg transition-all active:dark:bg-neutral-700 active:bg-neutral-50"
      onClick={() => logout()}>Log out</button>
    </motion.div>
  )
}

export default ProfileMenu
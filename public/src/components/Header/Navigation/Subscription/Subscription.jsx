import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Subscription = ({ forwardRef }) => {
  return (
    <dialog
      className='bg-neutral-100 dark:bg-neutral-700 w-72 h-64 text-center shadow-xl rounded-2xl'
      ref={forwardRef}>
      <button
        onClick={() => forwardRef.current.close()}
        className='absolute right-1 top-1 text-neutral-50 rounded-full w-6 h-6 hover:bg-neutral-600 transition-all ease-in-out'>
        <FontAwesomeIcon icon={faXmark} />
      </button>

      <h1 className="text-neutral-50 mt-4">Subscribe to our weekly newsletter for the latest news!</h1>
      <input type="text" className="px-4 py-4 mt-6 rounded-full" placeholder="email..." />
      <button
        onClick={() => forwardRef.current.close()}
        className='sm:text-lg text-white bg-emerald-500 hover:bg-emerald-600 px-3 py-1 sm:px-5 sm:py-3 rounded-3xl transition-all ease-in-out active:scale-95 mt-8'>
        Subscribe
      </button>
    </dialog>
  )
}

export default Subscription
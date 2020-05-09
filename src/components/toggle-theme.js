import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeDispatchContext, ThemeStateContext } from '../context/theme-context'

const ToggleTheme = () => {
  const toggleTheme = useContext(ThemeDispatchContext)
  const theme = useContext(ThemeStateContext)

  return (
    <>
      <button
        css={`
          background-color: transparent;
          border: 0;
          display: flex;
          color: currentColor;
          cursor: pointer;
          transition: opacity 0.3s;

          &:hover {
            opacity: 0.7;
          }

          &:focus {
            outline: none;
          }
        `}
        type='button'
        title='Toggle theme'
        onClick={toggleTheme}
      >
        {theme === 'light' && (
          <AnimatePresence>
            <motion.svg
              transition={{ ease: 'easeOut', duration: 0.3 }}
              initial={{ opacity: 0, rotate: -65 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0 }}
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='sun'
            >
              <circle cx='12' cy='12' r='5'></circle>
              <line x1='12' y1='1' x2='12' y2='3'></line>
              <line x1='12' y1='21' x2='12' y2='23'></line>
              <line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line>
              <line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line>
              <line x1='1' y1='12' x2='3' y2='12'></line>
              <line x1='21' y1='12' x2='23' y2='12'></line>
              <line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line>
              <line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
            </motion.svg>
          </AnimatePresence>
        )}

        {theme === 'dark' && (
          <AnimatePresence>
            <motion.svg
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0 }}
              transition={{ ease: 'easeOut', duration: 0.3 }}
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='moon'
            >
              <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
            </motion.svg>
          </AnimatePresence>
        )}
      </button>
    </>
  )
}

export default ToggleTheme

import React, { createContext } from 'react'
import PropTypes from 'prop-types'

import { useDarkMode } from '../hooks/use-dark-mode'

export const ThemeStateContext = createContext()
export const ThemeDispatchContext = createContext()

const ThemeContextProvider = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode()

  return (
    <ThemeStateContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={toggleTheme}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  )
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThemeContextProvider

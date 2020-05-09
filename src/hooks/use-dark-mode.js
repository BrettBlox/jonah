import React, { useEffect, useState, createContext } from 'react'

export const ThemeStateContext = createContext()
export const ThemeDispatchContext = createContext()

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light')

  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    /* eslint-disable */
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme
      ? setMode('dark')
      : localTheme
      ? setTheme(localTheme)
      : setMode('light')
  }, [])

  return [theme, toggleTheme]
}


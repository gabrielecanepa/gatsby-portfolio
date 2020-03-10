import createPersistedState from 'use-persisted-state'
import themes, { baseTheme } from 'themes'
import useDarkMode from 'use-dark-mode'
import { getLocalStorageItem, isDarkModeSupported } from 'utils'
import { useCallback, useMemo } from 'react'

const useThemeState = createPersistedState('theme')

const useTheme = _theme => {
  const availableThemes = useMemo(
    () => (isDarkModeSupported() ? ['adaptive', ...Object.keys(themes)] : Object.keys(themes)),
    []
  )

  const initialTheme = useMemo(() => {
    const localStorageTheme = getLocalStorageItem('theme')
    return _theme || availableThemes.includes(localStorageTheme) ? localStorageTheme : availableThemes[0]
  }, [_theme, availableThemes])

  const [activeTheme, setActiveTheme] = useThemeState(initialTheme)
  const isUserDarkMode = useDarkMode(false).value

  const theme = useMemo(() => {
    const themeObject = activeTheme === 'adaptive' ? (isUserDarkMode ? themes.dark : themes.light) : themes[activeTheme]
    return {
      ...themeObject,
      ...baseTheme,
      colors: { ...themeObject.colors, ...baseTheme.colors }, // merge colors
    }
  }, [activeTheme, isUserDarkMode])

  const setTheme = useCallback(
    theme => {
      if (!availableThemes.includes(theme)) return
      setActiveTheme(theme)
    },
    [availableThemes, setActiveTheme]
  )

  const setNextTheme = useCallback(() => {
    const themeIndex = availableThemes.indexOf(activeTheme)
    const nextTheme = availableThemes[themeIndex === availableThemes.length - 1 ? 0 : themeIndex + 1]
    setActiveTheme(nextTheme)
  }, [activeTheme, availableThemes, setActiveTheme])

  const setRandomTheme = useCallback(() => {
    const randomTheme = availableThemes.filter(availableTheme => availableTheme !== activeTheme)[
      Math.floor(Math.random() * (availableThemes.length - 1))
    ]
    setActiveTheme(randomTheme)
  }, [activeTheme, availableThemes, setActiveTheme])

  return {
    theme,
    setTheme,
    setNextTheme,
    setRandomTheme,
  }
}

export default useTheme

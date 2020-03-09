import createPersistedState from 'use-persisted-state'
import themes, { baseTheme } from 'themes'
import { getLocalStorageItem, isUserDarkMode } from 'utils'
import { useCallback, useMemo } from 'react'

const useThemeState = createPersistedState('theme')

const useTheme = _theme => {
  const availableThemes = useMemo(() => ['adaptive', ...Object.keys(themes)], [])

  const initialTheme = useMemo(() => {
    const localStorageTheme = getLocalStorageItem('theme')
    return _theme || availableThemes.includes(localStorageTheme) ? localStorageTheme : availableThemes[0]
  }, [_theme, availableThemes])

  const [activeTheme, setActiveTheme] = useThemeState(initialTheme)

  const theme = useMemo(() => {
    const themeObject = activeTheme === 'adaptive' ? (isUserDarkMode() ? themes.dark : themes.light) : themes[activeTheme]
    return {
      ...themeObject,
      ...baseTheme,
      colors: { ...themeObject.colors, ...baseTheme.colors }, // merge colors
    }
  }, [activeTheme])

  const setTheme = useCallback(
    theme => {
      if (!availableThemes.includes(theme)) return
      setActiveTheme(theme)
    },
    [availableThemes, setActiveTheme]
  )

  const setRandomTheme = useCallback(() => {
    const randomTheme = availableThemes.filter(availableTheme => availableTheme !== activeTheme)[
      Math.floor(Math.random() * (availableThemes.length - 1))
    ]
    setActiveTheme(randomTheme)
  }, [activeTheme, availableThemes, setActiveTheme])

  const switchTheme = useCallback(() => {
    const themeIndex = availableThemes.indexOf(activeTheme) + 1
    const nextTheme = availableThemes[themeIndex === availableThemes.length ? 0 : themeIndex]
    setActiveTheme(nextTheme)
  }, [activeTheme, availableThemes, setActiveTheme])

  return { theme, setTheme, setRandomTheme, switchTheme }
}

export default useTheme

import themes, { baseTheme } from 'themes'
import { StoreContext } from './store'
import { getLocalStorageItem, isUserDarkMode, setLocalStorageItem } from 'utils'
import { useCallback, useContext, useEffect, useMemo } from 'react'

const useTheme = () => {
  const { setStore, store } = useContext(StoreContext)

  const availableThemes = useMemo(() => ['adaptive', ...Object.keys(themes)], [])

  const setStoreAndLocalStorageTheme = useCallback(
    theme => {
      setStore({ theme })
      setLocalStorageItem('theme', theme)
    },
    [setStore]
  )

  useEffect(() => {
    if (store.theme) return

    const localStorageTheme = getLocalStorageItem('theme')

    if (availableThemes.includes(localStorageTheme)) {
      setStore({ theme: localStorageTheme })
    } else {
      setStoreAndLocalStorageTheme(availableThemes[0])
    }
  })

  const activeTheme = useMemo(() => {
    const localStorageTheme = getLocalStorageItem('theme')
    return store.theme || availableThemes.includes(localStorageTheme) ? localStorageTheme : availableThemes[0]
  }, [availableThemes, store.theme])

  const theme = useMemo(() => {
    const themeObject =
      activeTheme === 'adaptive' ? (isUserDarkMode() ? themes.dark : themes.light) : themes[activeTheme]

    return {
      ...themeObject,
      ...baseTheme,
      colors: { ...themeObject.colors, ...baseTheme.colors }, // merge colors
    }
  }, [activeTheme])

  const setTheme = useCallback(
    theme => {
      if (!availableThemes.includes(theme)) return
      setStoreAndLocalStorageTheme(theme)
    },
    [availableThemes, setStoreAndLocalStorageTheme]
  )

  const setRandomTheme = useCallback(() => {
    const randomTheme = availableThemes.filter(availableTheme => availableTheme !== activeTheme)[
      Math.floor(Math.random() * (availableThemes.length - 1))
    ]
    setTheme(randomTheme)
  }, [activeTheme, availableThemes, setTheme])

  const switchTheme = useCallback(() => {
    const themeIndex = availableThemes.indexOf(activeTheme) + 1
    const nextTheme = availableThemes[themeIndex === availableThemes.length ? 0 : themeIndex]
    setTheme(nextTheme)
  }, [activeTheme, availableThemes, setTheme])

  return { theme, setTheme, setRandomTheme, switchTheme }
}

export default useTheme

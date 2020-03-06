import themes, { baseTheme } from 'themes'
import { StoreContext } from './store'
import { getLocalStorageItem, setLocalStorageItem } from 'utils'
import { useCallback, useContext, useEffect, useMemo } from 'react'

const useTheme = () => {
  const { setStore, store } = useContext(StoreContext)

  const availableThemes = useMemo(() => Object.keys(themes), [])

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

  const theme = useMemo(() => {
    const localStorageTheme = getLocalStorageItem('theme')
    const activeTheme = store.theme
      ? themes[store.theme]
      : availableThemes.includes(localStorageTheme)
      ? themes[localStorageTheme]
      : themes[availableThemes[0]]
    return {
      ...activeTheme,
      ...baseTheme,
      colors: { ...activeTheme.colors, ...baseTheme.colors }, // merge colors
    }
  }, [availableThemes, store.theme])

  const setTheme = useCallback(
    theme => {
      if (!availableThemes.includes(theme)) return
      setStoreAndLocalStorageTheme(theme)
    },
    [availableThemes, setStoreAndLocalStorageTheme]
  )

  const setRandomTheme = useCallback(() => {
    const randomTheme = availableThemes.filter(availableTheme => availableTheme !== theme.name)[
      Math.floor(Math.random() * (availableThemes.length - 1))
    ]
    setStoreAndLocalStorageTheme(randomTheme)
  }, [availableThemes, setStoreAndLocalStorageTheme, theme.name])

  const switchTheme = useCallback(() => {
    const themeIndex = availableThemes.indexOf(theme.name) + 1
    const nextTheme = availableThemes[themeIndex === availableThemes.length ? 0 : themeIndex]
    setStoreAndLocalStorageTheme(nextTheme)
  }, [availableThemes, setStoreAndLocalStorageTheme, theme.name])

  return { theme, setTheme, setRandomTheme, switchTheme }
}

export default useTheme

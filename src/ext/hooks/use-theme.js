import themes, { baseTheme } from 'themes'
import { StoreContext } from './store'
import { getLocalStorageItem, setLocalStorageItem } from 'utils'
import { useCallback, useContext, useEffect, useMemo } from 'react'

const useTheme = () => {
  const { setStore, store } = useContext(StoreContext)

  const availableThemes = useMemo(() => Object.keys(themes), [])

  useEffect(() => {
    if (store.theme) return
    const localStorageTheme = getLocalStorageItem('theme')
    if (availableThemes.includes(localStorageTheme)) {
      setStore({ theme: localStorageTheme })
    } else {
      setStore({ theme: availableThemes[0] })
      setLocalStorageItem('theme', availableThemes[0])
    }
  })

  const theme = useMemo(() => {
    const localStorageTheme = getLocalStorageItem('theme')
    const activeTheme = store.theme
      ? themes[store.theme]
      : availableThemes.includes(localStorageTheme)
      ? themes[localStorageTheme]
      : themes[availableThemes[0]]
    return { ...activeTheme, ...baseTheme }
  }, [availableThemes, store.theme])

  const setTheme = useCallback(
    theme => {
      if (!availableThemes.includes(theme)) return
      setStore({ theme })
      setLocalStorageItem('theme', theme)
    },
    [availableThemes, setStore]
  )

  const setRandomTheme = useCallback(() => {
    const randomTheme = themes.filter(_theme => _theme.name !== theme.name)[
      Math.floor(Math.random * (themes.length - 1))
    ]
    setStore({ theme: randomTheme })
    setLocalStorageItem('theme', randomTheme)
  }, [setStore, theme.name])

  const switchTheme = useCallback(() => {
    const themeIndex = availableThemes.indexOf(theme.name) + 1
    const nextTheme = availableThemes[themeIndex === availableThemes.length ? 0 : themeIndex]
    setStore({ theme: nextTheme })
    setLocalStorageItem('theme', nextTheme)
  }, [availableThemes, setStore, theme.name])

  return { theme, setTheme, setRandomTheme, switchTheme }
}

export default useTheme

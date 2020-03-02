import themes, { baseTheme } from 'themes'
import { StoreContext } from './store'
import { useCallback, useContext, useMemo } from 'react'

const getThemeIndex = store => store.themeIndex || parseInt(localStorage.getItem('theme')) || 0

const useTheme = () => {
  const { setStore, store } = useContext(StoreContext)

  const switchTheme = useCallback(() => {
    const themeIndex = getThemeIndex(store)
    const nextThemeIndex = themeIndex >= 0 && themeIndex < themes.length - 1 ? themeIndex + 1 : 0
    setStore({ themeIndex: nextThemeIndex })
    localStorage.setItem('theme', nextThemeIndex)
  }, [setStore, store])

  const theme = useMemo(() => ({ ...themes[getThemeIndex(store)], ...baseTheme }), [store])

  return { theme, switchTheme }
}

export default useTheme

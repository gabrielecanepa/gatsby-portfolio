export const getLocalStorageItem = name => (typeof window === 'undefined' ? null : window.localStorage.getItem(name))

export const setLocalStorageItem = (name, value) =>
  typeof window === 'undefined' ? null : window.localStorage.setItem(name, value)

export const isUserDarkMode = () =>
  typeof window === 'undefined' ? null : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

export const shadeColor = (color, amount) =>
  `#${color
    .replace(/^#/, '')
    .replace(/../g, color => ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2))}`

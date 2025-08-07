import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

const THEME_KEY = 'theme'
const THEMES = ['light', 'dark', 'system']

function getSystemTheme() {
	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light'
}

export const ThemeProvider = ({ children }) => {
	// Инициализация темы: localStorage -> system
	const getInitialTheme = () => {
		const saved = localStorage.getItem(THEME_KEY)
		if (THEMES.includes(saved)) return saved
		return 'system'
	}
	const [theme, setTheme] = useState(getInitialTheme())

	// Применяем тему к <html> через data-theme
	useEffect(() => {
		const applyTheme = (t) => {
			let applied = t
			if (t === 'system') applied = getSystemTheme()
			document.documentElement.setAttribute('data-theme', applied)
		}
		applyTheme(theme)
		localStorage.setItem(THEME_KEY, theme)
		// Если выбрана system, слушаем изменения системной темы
		let mql
		const handleSystemChange = () => {
			if (theme === 'system') applyTheme('system')
		}
		if (theme === 'system') {
			mql = window.matchMedia('(prefers-color-scheme: dark)')
			mql.addEventListener('change', handleSystemChange)
		}
		return () => {
			if (mql) mql.removeEventListener('change', handleSystemChange)
		}
	}, [theme])

	// Смена темы
	const toggleTheme = (newTheme) => {
		if (THEMES.includes(newTheme)) setTheme(newTheme)
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export const useTheme = () => useContext(ThemeContext)

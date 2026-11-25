import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Theme = "dark" | "light" | "system"


type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const storageKey = "thunder-ui-theme"
const ThemeProviderContext = createContext<ThemeProviderState | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem(storageKey)
      if (saved === "light" || saved === "dark" || saved === "system") return saved
    } catch {
      // The website theme also works when storage is unavailable.
    }
    return "dark"
  })

  useEffect(() => {
    const system = window.matchMedia("(prefers-color-scheme: dark)")
    const applyTheme = () => {
      const isDark = theme === "system" ? system.matches : theme === "dark"
      document.documentElement.classList.toggle("dark", isDark)
      document.documentElement.classList.toggle("light", !isDark)
    }
    applyTheme()
    if (theme === "system") {
      system.addEventListener("change", applyTheme)
      return () => system.removeEventListener("change", applyTheme)
    }
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      setTheme(theme)
      try {
        localStorage.setItem(storageKey, theme)
      } catch {
        // Keep the chosen theme for this visit.
      }
    },
  }

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === null) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}

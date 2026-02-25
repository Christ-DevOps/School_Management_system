"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react" // or use your own SVG icons

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:ring-2 ring-purple-400 transition-all duration-300"
    >
      {theme === "dark" ? (
        <Sun className="text-yellow-400 w-5 h-5" />
      ) : (
        <Moon className="text-slate-700 w-5 h-5" />
      )}
    </button>
  )
}

export default ThemeToggle
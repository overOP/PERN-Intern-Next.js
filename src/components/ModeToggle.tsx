"use client"
import * as React from "react"
import { Button } from "./ui/button"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

const ModeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" disabled>
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <SunIcon className="h-[1.2rem] w-[1.2rem] transition-all hover:scale-110" />
      ) : (
        <MoonIcon className="h-[1.2rem] w-[1.2rem] transition-all hover:scale-110" />
      )}
    </Button>
  )
}

export default ModeToggle

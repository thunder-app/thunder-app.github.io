import { Monitor, Moon, Sun } from "lucide-react"
import { Link } from "react-router-dom"

import { Icons } from "@/components/custom/icons"
import { useTheme } from "@/components/custom/theme-provider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { site } from "@/config/site"

const themes = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
] as const

export default function Header() {
  const { theme, setTheme } = useTheme()
  const ThemeIcon = themes.find((option) => option.value === theme)?.icon ?? Sun

  return (
    <header className="site-header">
      <div className="site-width header-inner">
        <Link className="brand" to="/" aria-label="Thunder home">
          <Icons.logo aria-hidden="true" />
          <span>Thunder</span>
        </Link>
        <div className="header-tools">
          <Button asChild variant="ghost" size="icon-lg" className="size-[44px]">
            <a href={site.links.github} aria-label="GitHub">
              <Icons.github aria-hidden="true" />
            </a>
          </Button>
          <Separator orientation="vertical" className="mx-1 data-[orientation=vertical]:h-4" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button type="button" variant="ghost" size="icon-lg" aria-label="Website theme" className="size-[44px]">
                <ThemeIcon className="size-[18px]" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={6} className="motion-reduce:animate-none">
              <DropdownMenuRadioGroup
                value={theme}
                onValueChange={(value) => {
                  const selected = themes.find((option) => option.value === value)
                  if (selected) setTheme(selected.value)
                }}
              >
                {themes.map(({ value, label }) => (
                  <DropdownMenuRadioItem key={value} value={value} className="min-h-11">{label}</DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

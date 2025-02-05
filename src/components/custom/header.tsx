import { Link } from 'react-router';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { Icons } from './icons';
import { ThemeToggle } from './theme-toggle';

function Header() {
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Download",
      href: "/download",
      description: "Navigates to the download page for Thunder",
    },
    {
      title: "Documentation",
      href: "/docs",
      description: "Navigates to the documentation for Thunder",
    },
  ]

  return (
    <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex mx-6  h-14 items-center justify-between">
        <NavigationMenu>
          <NavigationMenuList>
            <Link to="/" className="flex items-center space-x-2 mr-4">
              <Icons.logo className="h-6 w-6" />
              <span className="font-bold inline-block">
                Thunder
              </span>
            </Link>
            {components.map((navigation) => {
              return (
                <NavigationMenuItem key={navigation.href}>
                  <Link to={{ pathname: navigation.href }}>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent`}>
                      {navigation.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

export default Header;
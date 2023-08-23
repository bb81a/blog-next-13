import Link from 'next/link'

import { siteConfig } from '@/config/site'

// import { Combobox } from './combobox'
import { ThemeToggle } from './ThemeToggle'

// // import { Combobox } from '@/components/combobox'
// import { MainNav } from '@/components/layouts/main-nav'
// // import { MobileNav } from '@/components/layouts/mobile-nav'

export function SiteHeader() {
  return (
    <header className="bg-background/90 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-12 items-center justify-between px-5">
        <div className="flex items-center space-x-6">
          <Link
            className="focus-visible:ring-ring ring-offset-background flex h-6 items-center space-x-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            href="/"
          >
            <span className="text-2xl font-medium leading-none">
              Dan Stroot{/*  · Blog   */}
            </span>
          </Link>
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.name}
                className="hover:text-foreground/80 focus-visible:ring-ring ring-offset-background text-foreground mt-1 space-y-3 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* <Combobox /> */}
          <ThemeToggle />
          <button
            className="focus-visible:ring-ring ring-offset-background hover:bg-accent hover:text-accent-foreground hamburger inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:bg-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 md:hidden"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:R3ipja:"
            data-state="closed"
          >
            <svg
              fill="none"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <g>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16"
                />
              </g>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 12h16"
              />
              <g>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 18h16"
                />
              </g>
            </svg>
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>
    </header>
    // <header className="sticky top-0 z-40 w-full border-b bg-background/90 backdrop-blur">
    //   <div className="container flex items-center h-16">
    //     <MainNav items={siteConfig.mainNav} />
    //     {/* <MobileNav
    //       mainNavItems={siteConfig.mainNav}
    //       sidebarNavItems={dashboardConfig.sidebarNav}
    //     /> */}
    //     <div className="flex items-center justify-end flex-1 space-x-4">
    //       <nav className="flex items-center space-x-2">
    //         {/* <Combobox /> */}
    //       </nav>
    //     </div>
    //   </div>
    // </header>
  )
}
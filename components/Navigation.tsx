'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Trophy, Brain, BarChart3, Settings, BookOpen } from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname()

  // Don't show navigation on auth pages
  if (pathname?.startsWith('/login') || pathname?.startsWith('/signup')) {
    return null
  }

  const links = [
    { href: '/dashboard', label: 'Accueil', icon: Home },
    { href: '/leaderboard', label: 'Classement', icon: Trophy },
    { href: '/review', label: 'Révision', icon: Brain },
    { href: '/exam', label: 'Examen', icon: BookOpen },
    { href: '/statistics', label: 'Stats', icon: BarChart3 },
    { href: '/settings', label: 'Paramètres', icon: Settings },
  ]

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">CP</span>
            </div>
            <span className="font-bold text-xl text-gray-900 hidden sm:block">
              CharterPath
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {links.map((link) => {
              const Icon = link.icon
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden md:inline">{link.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

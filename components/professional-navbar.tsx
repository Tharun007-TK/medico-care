"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Phone, Menu, X, Shield } from "lucide-react"
import Link from "next/link"

interface NavbarProps {
  currentPage?: string
}

export default function ProfessionalNavbar({ currentPage = "home" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <>
      {/* Simplified Top Bar */}
      <div className="bg-gray-900 text-white py-2 px-4 text-sm animate-in slide-in-from-top duration-500">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2 group">
            <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            <span className="group-hover:text-gray-300 transition-colors duration-300">
              24/7 Support: (555) 123-4567
            </span>
          </div>
          <Badge className="bg-green-600 text-white text-xs px-2 py-1 hover:bg-green-700 hover:scale-105 transition-all duration-300">
            <Shield className="w-3 h-3 mr-1" />
            HIPAA Compliant
          </Badge>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-black to-gray-700 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                <Heart className="w-6 h-6 text-white group-hover:scale-110 group-hover:text-red-400 transition-all duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors duration-300">
                  MediCare+
                </span>
                <span className="text-xs text-gray-500 -mt-1 group-hover:text-gray-600 transition-colors duration-300">
                  Healthcare Platform
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`text-gray-700 hover:text-black transition-all duration-300 font-medium relative group ${
                    currentPage === item.label.toLowerCase() ? "text-black" : ""
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Action Buttons */}
              <div className="hidden md:flex items-center space-x-3">
                <Button
                  variant="outline"
                  className="border-gray-200 text-gray-700 hover:bg-gray-50 rounded-lg px-4 bg-transparent hover:scale-105 hover:shadow-md transition-all duration-300"
                >
                  Login
                </Button>
                <Link href="/book-appointment">
                  <Button className="bg-black hover:bg-gray-800 text-white rounded-lg px-4 hover:scale-105 hover:shadow-lg transition-all duration-300 group">
                    Book Appointment
                    <span className="ml-1 group-hover:translate-x-0.5 transition-transform duration-300">→</span>
                  </Button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 rotate-0 transition-transform duration-300" />
                ) : (
                  <Menu className="w-6 h-6 rotate-0 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-3">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-black font-medium transition-all duration-300 hover:translate-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Action Buttons */}
            <div className="mt-4 space-y-2">
              <Button
                variant="outline"
                className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 rounded-lg py-2 bg-transparent hover:scale-105 transition-all duration-300"
              >
                Login
              </Button>
              <Link href="/book-appointment" className="block">
                <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-lg py-2 hover:scale-105 transition-all duration-300">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

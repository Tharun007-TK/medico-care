"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Phone, Mail, Clock, Menu, X, ChevronDown, Shield, Award, Users } from "lucide-react"
import Link from "next/link"

interface NavbarProps {
  currentPage?: string
}

export default function ProfessionalNavbar({ currentPage = "home" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    {
      label: "Services",
      href: "#services",
      dropdown: [
        { label: "Teleconsultation", href: "#teleconsultation" },
        { label: "Appointment Booking", href: "/book-appointment" },
        { label: "Health Records", href: "#health-records" },
        { label: "Prescription Management", href: "#prescriptions" },
      ],
    },
    {
      label: "For Providers",
      href: "#providers",
      dropdown: [
        { label: "Healthcare Professionals", href: "#healthcare-pros" },
        { label: "Medical Institutions", href: "#institutions" },
        { label: "Integration Solutions", href: "#integrations" },
        { label: "Clinical Tools", href: "#clinical-tools" },
      ],
    },
    {
      label: "Resources",
      href: "#resources",
      dropdown: [
        { label: "Patient Education", href: "#education" },
        { label: "Clinical Guidelines", href: "#guidelines" },
        { label: "Research & Studies", href: "#research" },
        { label: "Help Center", href: "#help" },
      ],
    },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>24/7 Support: (555) 123-4567</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>support@medicare-plus.com</span>
            </div>
            <div className="hidden lg:flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Mon-Fri: 8AM-8PM EST</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge className="bg-green-600 text-white text-xs px-2 py-1 hover:bg-green-700">
              <Shield className="w-3 h-3 mr-1" />
              HIPAA Compliant
            </Badge>
            <Badge className="bg-blue-600 text-white text-xs px-2 py-1 hover:bg-blue-700">
              <Award className="w-3 h-3 mr-1" />
              SOC 2 Certified
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Heart className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-black group-hover:text-gray-700 transition-colors duration-300">
                  MediCare+
                </span>
                <span className="text-xs text-gray-500 -mt-1">Professional Healthcare Platform</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-2 rounded-lg text-gray-700 hover:text-black hover:bg-gray-50 transition-all duration-200 font-medium ${
                      currentPage === item.label.toLowerCase() ? "text-black bg-gray-50" : ""
                    }`}
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown
                        className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-in slide-in-from-top-2 duration-200">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-gray-600 hover:text-black hover:bg-gray-50 transition-colors duration-200 text-sm"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Professional Stats */}
              <div className="hidden xl:flex items-center space-x-6 text-sm text-gray-600 border-r border-gray-200 pr-6">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span className="font-medium">50K+ Patients</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Award className="w-4 h-4" />
                  <span className="font-medium">1K+ Providers</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="hidden md:flex items-center space-x-3">
                <Button
                  variant="outline"
                  className="border-gray-200 text-gray-700 hover:bg-gray-50 rounded-full px-6 transition-all duration-200 bg-transparent"
                >
                  Provider Login
                </Button>
                <Link href="/book-appointment">
                  <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-6 py-2.5 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
                    Book Appointment
                  </Button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-200">
            <div className="container mx-auto px-4 py-6">
              <nav className="space-y-4">
                {navigationItems.map((item, index) => (
                  <div key={index}>
                    <Link
                      href={item.href}
                      className="block py-3 text-gray-700 hover:text-black font-medium transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 space-y-2 mt-2">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            href={dropdownItem.href}
                            className="block py-2 text-sm text-gray-600 hover:text-black transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Action Buttons */}
              <div className="mt-6 space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 rounded-full py-3 bg-transparent"
                >
                  Provider Login
                </Button>
                <Link href="/book-appointment" className="block">
                  <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-full py-3">
                    Book Appointment
                  </Button>
                </Link>
              </div>

              {/* Mobile Professional Stats */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <Users className="w-5 h-5 text-gray-600 mb-1" />
                    <span className="text-sm font-medium text-gray-900">50K+ Patients</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Award className="w-5 h-5 text-gray-600 mb-1" />
                    <span className="text-sm font-medium text-gray-900">1K+ Providers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

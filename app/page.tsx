"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Calendar,
  FileText,
  Bell,
  Video,
  Star,
  Check,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ProfessionalNavbar from "@/components/professional-navbar"

export default function MedicalLandingPage() {
  const [isYearly, setIsYearly] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const features = [
    {
      icon: Video,
      title: "Teleconsultation",
      description: "Connect with healthcare professionals from the comfort of your home through secure video calls.",
      color: "text-gray-600",
    },
    {
      icon: Calendar,
      title: "Appointment Booking",
      description: "Schedule appointments with your preferred doctors at your convenience with real-time availability.",
      color: "text-gray-600",
    },
    {
      icon: FileText,
      title: "Health Records",
      description: "Access and manage your complete medical history, test results, and prescriptions in one place.",
      color: "text-gray-600",
    },
    {
      icon: Bell,
      title: "Medicine Reminders",
      description: "Never miss a dose with smart medication reminders and dosage tracking features.",
      color: "text-gray-600",
    },
  ]

  const testimonials = [
    {
      name: "Dr. Sarah Mitchell, MD",
      role: "Chief of Cardiology",
      company: "Metropolitan Heart Institute",
      location: "New York, NY",
      content:
        "MediCare+ has revolutionized our patient engagement model. We've seen a 40% increase in appointment adherence and a 35% reduction in no-shows since implementing their platform. The teleconsultation feature has been particularly valuable for our post-operative cardiac patients.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      credentials: "MD, FACC, FSCAI",
      specialty: "Interventional Cardiology",
      yearsExperience: "15+ years",
      verification: "Verified Healthcare Provider",
    },
    {
      name: "Jennifer Rodriguez, RN",
      role: "Director of Patient Care",
      company: "Sunrise Medical Center",
      location: "Los Angeles, CA",
      content:
        "As a healthcare administrator, I've evaluated numerous digital health platforms. MediCare+ stands out for its intuitive design and comprehensive feature set. Our patient satisfaction scores have improved by 28% since adoption, and our staff efficiency has increased significantly.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      credentials: "RN, MSN, CPHQ",
      specialty: "Healthcare Administration",
      yearsExperience: "12+ years",
      verification: "Verified Healthcare Professional",
    },
    {
      name: "Michael Chen, PharmD",
      role: "Clinical Pharmacist",
      company: "University Medical Center",
      location: "Chicago, IL",
      content:
        "The medication management and reminder system has been a game-changer for our chronic disease patients. We've documented a 45% improvement in medication adherence rates. The integration with our existing systems was seamless, and the clinical decision support tools are exceptional.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      credentials: "PharmD, BCPS, BCACP",
      specialty: "Clinical Pharmacy",
      yearsExperience: "10+ years",
      verification: "Verified Clinical Pharmacist",
    },
    {
      name: "Dr. Amanda Foster, MD",
      role: "Family Medicine Physician",
      company: "Community Health Partners",
      location: "Austin, TX",
      content:
        "MediCare+ has transformed how I practice medicine. The comprehensive health records system and patient portal have streamlined my workflow considerably. My patients appreciate the convenience, and I've been able to provide more personalized care while reducing administrative burden by 30%.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      credentials: "MD, ABFM",
      specialty: "Family Medicine",
      yearsExperience: "8+ years",
      verification: "Board Certified Physician",
    },
  ]

  const plans = [
    {
      name: "Basic",
      monthlyPrice: 9,
      yearlyPrice: 90,
      features: ["Teleconsultation", "Appointment Booking", "Basic Health Records", "Email Support"],
      popular: false,
    },
    {
      name: "Premium",
      monthlyPrice: 19,
      yearlyPrice: 190,
      features: [
        "Everything in Basic",
        "Advanced Health Analytics",
        "Medicine Reminders",
        "Priority Support",
        "Family Sharing",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: 39,
      yearlyPrice: 390,
      features: [
        "Everything in Premium",
        "Custom Integrations",
        "Dedicated Account Manager",
        "Advanced Security",
        "API Access",
      ],
      popular: false,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-white">
      {/* Professional Navbar */}
      <ProfessionalNavbar currentPage="home" />

      {/* Hero Section */}
      <section className="pt-16 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gray-100 text-black hover:bg-gray-200 transition-colors duration-200 border border-gray-200">
              🚀 Now Available - Advanced Health Monitoring
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Your Health, <span className="text-gray-600">Simplified</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience healthcare like never before with our comprehensive digital platform. Connect with doctors,
              manage appointments, and track your health journey seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/book-appointment">
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-3 transition-all duration-200 hover:scale-105 hover:shadow-lg group"
                >
                  Book Appointment
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-200 text-black hover:bg-gray-50 rounded-full px-8 py-3 transition-all duration-200 hover:scale-105 bg-transparent"
              >
                Watch Demo
              </Button>
            </div>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gray-200 rounded-3xl blur-3xl opacity-20"></div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="MediCare+ App Interface"
                width={800}
                height={600}
                className="relative rounded-3xl shadow-2xl border border-gray-100 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Everything You Need for Better Health</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare solutions designed to make your wellness journey effortless and effective.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 shadow-lg bg-white"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Trusted by Healthcare Professionals</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leading healthcare providers and medical professionals rely on MediCare+ to deliver exceptional patient
              care and improve clinical outcomes.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <Card className="border border-gray-200 shadow-xl bg-white">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Professional Info Panel */}
                  <div className="bg-gray-50 p-8 flex flex-col justify-center">
                    <div className="text-center">
                      <Image
                        src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                        alt={testimonials[currentTestimonial].name}
                        width={80}
                        height={80}
                        className="rounded-full border-4 border-white shadow-lg mx-auto mb-4"
                      />
                      <div className="mb-2">
                        <Badge className="bg-black text-white text-xs px-2 py-1 mb-2">
                          {testimonials[currentTestimonial].verification}
                        </Badge>
                      </div>
                      <h3 className="font-bold text-black text-lg mb-1">{testimonials[currentTestimonial].name}</h3>
                      <p className="text-gray-600 font-medium mb-1">{testimonials[currentTestimonial].role}</p>
                      <p className="text-gray-500 text-sm mb-2">{testimonials[currentTestimonial].company}</p>
                      <p className="text-gray-500 text-sm mb-3">{testimonials[currentTestimonial].location}</p>

                      <div className="space-y-1 text-xs text-gray-600">
                        <p>
                          <span className="font-medium">Credentials:</span>{" "}
                          {testimonials[currentTestimonial].credentials}
                        </p>
                        <p>
                          <span className="font-medium">Specialty:</span> {testimonials[currentTestimonial].specialty}
                        </p>
                        <p>
                          <span className="font-medium">Experience:</span>{" "}
                          {testimonials[currentTestimonial].yearsExperience}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="md:col-span-2 p-8 flex flex-col justify-center">
                    <div className="flex justify-start mb-6">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-gray-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg text-black mb-6 leading-relaxed italic">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>

                    {/* Professional Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-black">40%</div>
                        <div className="text-xs text-gray-600">Improved Efficiency</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-black">35%</div>
                        <div className="text-xs text-gray-600">Reduced No-Shows</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-black">28%</div>
                        <div className="text-xs text-gray-600">Higher Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`group flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
                    index === currentTestimonial ? "bg-gray-100" : "hover:bg-gray-50"
                  }`}
                >
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-200 mb-1 ${
                      index === currentTestimonial ? "bg-black scale-125" : "bg-gray-300 group-hover:bg-gray-400"
                    }`}
                  />
                  <div className="text-xs text-gray-600 text-center max-w-16">
                    {testimonial.name.split(" ")[1]} {/* Last name */}
                  </div>
                </button>
              ))}
            </div>

            {/* Professional Credentials Footer */}
            <div className="mt-12 text-center">
              <p className="text-sm text-gray-500 mb-4">
                Testimonials from verified healthcare professionals across leading medical institutions
              </p>
              <div className="flex justify-center space-x-8 text-xs text-gray-400">
                <span>Board Certified Physicians</span>
                <span>•</span>
                <span>Licensed Healthcare Providers</span>
                <span>•</span>
                <span>Verified Medical Professionals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Flexible pricing options to suit your healthcare needs and budget.
            </p>
            <div className="inline-flex items-center bg-white rounded-full p-1 border border-gray-200">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  !isYearly ? "bg-black text-white shadow-md" : "text-gray-600"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  isYearly ? "bg-black text-white shadow-md" : "text-gray-600"
                }`}
              >
                Yearly
                <Badge className="ml-2 bg-gray-100 text-black text-xs border border-gray-200">Save 20%</Badge>
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? "border-2 border-black shadow-xl bg-white"
                    : "border border-gray-200 shadow-lg hover:shadow-xl bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-black text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-black mb-2">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      <span className="text-lg text-gray-600 font-normal">/{isYearly ? "year" : "month"}</span>
                    </div>
                    {isYearly && (
                      <div className="text-gray-600 text-sm font-medium">
                        Save ${plan.monthlyPrice * 12 - plan.yearlyPrice} annually
                      </div>
                    )}
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-gray-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full rounded-full py-3 transition-all duration-200 hover:scale-105 ${
                      plan.popular
                        ? "bg-black hover:bg-gray-800 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-black border border-gray-200"
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-black" />
                </div>
                <span className="text-xl font-semibold">MediCare+</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Revolutionizing healthcare through technology. Making quality healthcare accessible, convenient, and
                affordable for everyone.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="max-w-md mx-auto text-center">
              <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
              <p className="text-gray-400 mb-4">Get the latest health tips and product updates.</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 rounded-full"
                />
                <Button className="bg-white hover:bg-gray-100 text-black rounded-full px-6 transition-all duration-200 hover:scale-105">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} MediCare+. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

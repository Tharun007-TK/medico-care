"use client"

import { useState, useEffect } from "react"
import ProfessionalNavbar from "@/components/professional-navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Clock, Users, Star, CheckCircle, ArrowRight, Stethoscope, Calendar, Award } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    {
      name: "Dr. Sarah Chen, MD",
      role: "Chief Medical Officer, Metro Health System",
      experience: "Board Certified Internal Medicine • 15+ years experience",
      content:
        "This platform has revolutionized how we manage patient appointments and consultations. The integration with our existing systems was seamless, and patient satisfaction has increased by 40%.",
    },
    {
      name: "Dr. Michael Rodriguez, MD",
      role: "Director of Digital Health, Regional Medical Center",
      experience: "Board Certified Family Medicine • 20+ years experience",
      content:
        "The security features and HIPAA compliance give us complete confidence in protecting patient data. Our telehealth consultations have increased by 300% since implementation.",
    },
    {
      name: "Dr. Emily Thompson, MD",
      role: "Head of Cardiology, University Hospital",
      experience: "Board Certified Cardiology • Fellow of American College of Cardiology",
      content:
        "Outstanding platform that has streamlined our patient management workflow. The analytics and reporting features help us deliver better outcomes and improve operational efficiency.",
    },
  ]

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <ProfessionalNavbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Badge className="mb-6 bg-black text-white px-4 py-2 text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default">
              Trusted by 50,000+ Patients Worldwide
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight animate-in slide-in-from-bottom duration-700 delay-200">
              Modern Healthcare
              <br />
              <span className="text-gray-600 bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom duration-700 delay-300">
              Connect with certified healthcare professionals instantly. Book appointments, get consultations, and
              manage your health records all in one secure platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in slide-in-from-bottom duration-700 delay-500">
              <Link href="/book-appointment">
                <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                  Book Appointment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg rounded-lg bg-transparent hover:scale-105 transition-all duration-300 hover:shadow-md"
              >
                Learn More
              </Button>
            </div>

            <div className="mt-12 flex justify-center items-center space-x-8 text-sm text-gray-500 animate-in fade-in duration-1000 delay-700">
              <div className="flex items-center space-x-2 hover:text-gray-700 transition-colors duration-300 cursor-default">
                <Shield className="w-4 h-4" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-gray-700 transition-colors duration-300 cursor-default">
                <Clock className="w-4 h-4" />
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-gray-700 transition-colors duration-300 cursor-default">
                <Award className="w-4 h-4" />
                <span>Certified Providers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4 animate-in slide-in-from-bottom duration-700">
              Everything You Need for Better Health
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-in slide-in-from-bottom duration-700 delay-200">
              Our comprehensive platform brings together the best of modern healthcare technology with personalized care
              from certified professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Easy Scheduling",
                description:
                  "Book appointments with healthcare providers in seconds. Choose your preferred time, date, and consultation type with our intuitive booking system.",
                delay: "delay-300",
              },
              {
                icon: Stethoscope,
                title: "Expert Care",
                description:
                  "Connect with board-certified doctors, specialists, and healthcare professionals who are committed to providing personalized, high-quality care.",
                delay: "delay-500",
              },
              {
                icon: Shield,
                title: "Secure Platform",
                description:
                  "Your health information is protected with enterprise-grade security, HIPAA compliance, and encrypted data transmission for complete peace of mind.",
                delay: "delay-700",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group animate-in slide-in-from-bottom duration-700 ${feature.delay}`}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4 animate-in slide-in-from-bottom duration-700">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-in slide-in-from-bottom duration-700 delay-200">
              Leading medical institutions and healthcare providers choose our platform for its reliability, security,
              and comprehensive features.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border border-gray-100 hover:shadow-xl transition-all duration-500 animate-in slide-in-from-bottom duration-700 delay-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-current animate-in zoom-in duration-300"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="transition-all duration-500 ease-in-out">
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    "{testimonials[currentTestimonial].content}"
                  </p>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mr-4 hover:scale-110 transition-transform duration-300">
                      <Users className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-black">{testimonials[currentTestimonial].name}</p>
                      <p className="text-sm text-gray-600">{testimonials[currentTestimonial].role}</p>
                      <p className="text-xs text-gray-500 mt-1">{testimonials[currentTestimonial].experience}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentTestimonial ? "bg-black scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4 animate-in slide-in-from-bottom duration-700">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-in slide-in-from-bottom duration-700 delay-200">
              Choose the plan that works best for your healthcare needs. No hidden fees, no long-term contracts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Basic",
                price: "$29",
                description: "Perfect for individuals",
                features: ["Up to 3 consultations/month", "Basic health records", "Email support"],
                popular: false,
                delay: "delay-300",
              },
              {
                name: "Professional",
                price: "$79",
                description: "Best for families",
                features: [
                  "Unlimited consultations",
                  "Advanced health records",
                  "Priority support",
                  "Family sharing (up to 4 members)",
                ],
                popular: true,
                delay: "delay-500",
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For healthcare organizations",
                features: ["Custom integrations", "Advanced analytics", "Dedicated support", "SLA guarantees"],
                popular: false,
                delay: "delay-700",
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`${plan.popular ? "border-2 border-black hover:shadow-2xl scale-105" : "border border-gray-200 hover:shadow-lg hover:scale-105"} transition-all duration-500 group animate-in slide-in-from-bottom duration-700 ${plan.delay}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-black text-white px-4 py-1 animate-bounce">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-8 text-center relative">
                  <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors duration-300">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-black group-hover:scale-110 transition-transform duration-300 inline-block">
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && <span className="text-gray-600">/month</span>}
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center group-hover:translate-x-1 transition-transform duration-300"
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? "bg-black hover:bg-gray-800 text-white" : "bg-gray-100 hover:bg-gray-200 text-black border border-gray-200"} rounded-lg py-3 hover:scale-105 transition-all duration-300 hover:shadow-lg`}
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
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
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-in slide-in-from-bottom duration-700 delay-200">
              <div className="flex items-center space-x-3 mb-6 group">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 text-black group-hover:text-red-500 transition-colors duration-300" />
                </div>
                <span className="text-xl font-bold">MediCare+</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Modern healthcare platform connecting patients with certified professionals for better health outcomes.
              </p>
            </div>

            {[
              {
                title: "Services",
                links: ["Teleconsultation", "Appointment Booking", "Health Records", "Prescription Management"],
                delay: "delay-300",
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Press", "Contact"],
                delay: "delay-500",
              },
              {
                title: "Support",
                links: ["Help Center", "Privacy Policy", "Terms of Service", "HIPAA Compliance"],
                delay: "delay-700",
              },
            ].map((section, index) => (
              <div key={index} className={`animate-in slide-in-from-bottom duration-700 ${section.delay}`}>
                <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2 text-gray-400">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center animate-in fade-in duration-1000 delay-1000">
            <p className="text-gray-400 text-sm">© 2024 MediCare+. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Badge className="bg-gray-800 text-gray-300 text-xs px-2 py-1 hover:bg-gray-700 transition-colors duration-300">
                <Shield className="w-3 h-3 mr-1" />
                HIPAA Compliant
              </Badge>
              <Badge className="bg-gray-800 text-gray-300 text-xs px-2 py-1 hover:bg-gray-700 transition-colors duration-300">
                <Award className="w-3 h-3 mr-1" />
                SOC 2 Certified
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

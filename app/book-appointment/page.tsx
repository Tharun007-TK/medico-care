"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  Stethoscope,
  CheckCircle,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import ProfessionalNavbar from "@/components/professional-navbar"

interface FormData {
  name: string
  email: string
  phone: string
  doctor: string
  date: string
  time: string
}

interface FormErrors {
  [key: string]: string
}

export default function BookAppointmentPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [focusedField, setFocusedField] = useState<string>("")
  const [isVisible, setIsVisible] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const sectionRef = useRef<HTMLElement>(null)

  const doctors = [
    { value: "dr-smith", label: "Dr. Sarah Smith - Cardiology", specialty: "Cardiology" },
    { value: "dr-johnson", label: "Dr. Michael Johnson - Dermatology", specialty: "Dermatology" },
    { value: "dr-williams", label: "Dr. Emily Williams - Pediatrics", specialty: "Pediatrics" },
    { value: "dr-brown", label: "Dr. David Brown - Orthopedics", specialty: "Orthopedics" },
    { value: "dr-davis", label: "Dr. Lisa Davis - Neurology", specialty: "Neurology" },
  ]

  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
  ]

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        return value.length < 2 ? "Name must be at least 2 characters" : ""
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Please enter a valid email" : ""
      case "phone":
        return !/^\+?[\d\s-()]{10,}$/.test(value) ? "Please enter a valid phone number" : ""
      case "doctor":
        return !value ? "Please select a doctor" : ""
      case "date":
        return !value ? "Please select a date" : ""
      case "time":
        return !value ? "Please select a time" : ""
      default:
        return ""
    }
  }

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate all fields
    const newErrors: FormErrors = {}
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof FormData])
      if (error) newErrors[key] = error
    })

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          doctor: "",
          date: "",
          time: "",
        })
      }, 3000)
    }
  }

  const generateCalendar = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())

    const days = []
    const today = new Date()

    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate)
      date.setDate(startDate.getDate() + i)

      const isCurrentMonth = date.getMonth() === month
      const isToday = date.toDateString() === today.toDateString()
      const isPast = date < today && !isToday
      const isSelected = formData.date === date.toISOString().split("T")[0]

      days.push({
        date,
        isCurrentMonth,
        isToday,
        isPast,
        isSelected,
        dateString: date.toISOString().split("T")[0],
      })
    }

    return days
  }

  const selectDate = (dateString: string) => {
    handleInputChange("date", dateString)
    setShowCalendar(false)
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Professional Navbar */}
      <ProfessionalNavbar currentPage="appointment" />

      {/* Main Content */}
      <main
        ref={sectionRef}
        className={`py-12 px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-2xl mb-6">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Book Your Appointment</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Schedule a consultation with our experienced healthcare professionals. Choose your preferred doctor, date,
              and time for a personalized care experience.
            </p>
          </div>

          <Card className="border border-gray-200 shadow-lg bg-white overflow-hidden">
            <CardContent className="p-0">
              {isSuccess ? (
                <div className="p-12 text-center animate-in fade-in duration-500">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
                    <CheckCircle className="w-10 h-10 text-black" />
                  </div>
                  <h2 className="text-2xl font-bold text-black mb-4">Appointment Booked Successfully!</h2>
                  <p className="text-gray-600 mb-6">
                    We've sent a confirmation email with your appointment details. Our team will contact you shortly to
                    confirm your booking.
                  </p>
                  <Badge className="bg-gray-100 text-black px-4 py-2 mb-8 border border-gray-200">
                    Confirmation sent to {formData.email}
                  </Badge>
                  <div className="space-y-2 text-left max-w-md mx-auto bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="font-semibold text-black mb-4">Appointment Details:</h3>
                    <p>
                      <span className="font-medium">Name:</span> {formData.name}
                    </p>
                    <p>
                      <span className="font-medium">Doctor:</span>{" "}
                      {doctors.find((d) => d.value === formData.doctor)?.label}
                    </p>
                    <p>
                      <span className="font-medium">Date:</span> {formatDate(formData.date)}
                    </p>
                    <p>
                      <span className="font-medium">Time:</span> {formData.time}
                    </p>
                  </div>
                  <Button
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 bg-black hover:bg-gray-800 text-white rounded-full px-8 transition-all duration-200 hover:scale-105"
                  >
                    Book Another Appointment
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Personal Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-black mb-4 flex items-center">
                        <User className="w-5 h-5 mr-2 text-gray-600" />
                        Personal Information
                      </h3>

                      {/* Name Field */}
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 font-medium">
                          Full Name
                        </Label>
                        <div className="relative">
                          <Input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField("")}
                            className={`transition-all duration-200 rounded-xl border-2 ${
                              errors.name
                                ? "border-red-300 focus:border-red-500"
                                : focusedField === "name"
                                  ? "border-black focus:border-black shadow-lg shadow-gray-100"
                                  : "border-gray-200 focus:border-gray-400"
                            } ${formData.name ? "bg-gray-50" : ""}`}
                            placeholder="Enter your full name"
                          />
                          {errors.name && (
                            <div className="absolute -bottom-6 left-0 flex items-center text-red-500 text-sm animate-in slide-in-from-left duration-200">
                              <AlertCircle className="w-4 h-4 mr-1" />
                              {errors.name}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Email Field */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-medium">
                          Email Address
                        </Label>
                        <div className="relative">
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField("")}
                            className={`transition-all duration-200 rounded-xl border-2 ${
                              errors.email
                                ? "border-red-300 focus:border-red-500"
                                : focusedField === "email"
                                  ? "border-black focus:border-black shadow-lg shadow-gray-100"
                                  : "border-gray-200 focus:border-gray-400"
                            } ${formData.email ? "bg-gray-50" : ""}`}
                            placeholder="Enter your email address"
                          />
                          <Mail className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
                          {errors.email && (
                            <div className="absolute -bottom-6 left-0 flex items-center text-red-500 text-sm animate-in slide-in-from-left duration-200">
                              <AlertCircle className="w-4 h-4 mr-1" />
                              {errors.email}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Phone Field */}
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700 font-medium">
                          Phone Number
                        </Label>
                        <div className="relative">
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            onFocus={() => setFocusedField("phone")}
                            onBlur={() => setFocusedField("")}
                            className={`transition-all duration-200 rounded-xl border-2 ${
                              errors.phone
                                ? "border-red-300 focus:border-red-500"
                                : focusedField === "phone"
                                  ? "border-black focus:border-black shadow-lg shadow-gray-100"
                                  : "border-gray-200 focus:border-gray-400"
                            } ${formData.phone ? "bg-gray-50" : ""}`}
                            placeholder="Enter your phone number"
                          />
                          <Phone className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
                          {errors.phone && (
                            <div className="absolute -bottom-6 left-0 flex items-center text-red-500 text-sm animate-in slide-in-from-left duration-200">
                              <AlertCircle className="w-4 h-4 mr-1" />
                              {errors.phone}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Appointment Details */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-black mb-4 flex items-center">
                        <Stethoscope className="w-5 h-5 mr-2 text-gray-600" />
                        Appointment Details
                      </h3>

                      {/* Doctor Selection */}
                      <div className="space-y-2">
                        <Label className="text-gray-700 font-medium">Select Doctor</Label>
                        <Select value={formData.doctor} onValueChange={(value) => handleInputChange("doctor", value)}>
                          <SelectTrigger
                            className={`rounded-xl border-2 transition-all duration-200 ${
                              errors.doctor
                                ? "border-red-300"
                                : formData.doctor
                                  ? "border-gray-300 bg-gray-50"
                                  : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <SelectValue placeholder="Choose your preferred doctor" />
                          </SelectTrigger>
                          <SelectContent className="rounded-xl border shadow-xl">
                            {doctors.map((doctor) => (
                              <SelectItem
                                key={doctor.value}
                                value={doctor.value}
                                className="rounded-lg hover:bg-gray-50 focus:bg-gray-50"
                              >
                                <div className="flex flex-col">
                                  <span className="font-medium">{doctor.label.split(" - ")[0]}</span>
                                  <span className="text-sm text-gray-500">{doctor.specialty}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.doctor && (
                          <div className="flex items-center text-red-500 text-sm animate-in slide-in-from-left duration-200">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.doctor}
                          </div>
                        )}
                      </div>

                      {/* Date Selection */}
                      <div className="space-y-2">
                        <Label className="text-gray-700 font-medium">Preferred Date</Label>
                        <div className="relative">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setShowCalendar(!showCalendar)}
                            className={`w-full justify-start rounded-xl border-2 transition-all duration-200 ${
                              errors.date
                                ? "border-red-300"
                                : formData.date
                                  ? "border-gray-300 bg-gray-50"
                                  : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <Calendar className="w-4 h-4 mr-2" />
                            {formData.date ? formatDate(formData.date) : "Select a date"}
                          </Button>

                          {showCalendar && (
                            <Card className="absolute top-full left-0 right-0 z-50 mt-2 border shadow-2xl animate-in slide-in-from-top duration-200">
                              <CardContent className="p-4">
                                <div className="flex items-center justify-between mb-4">
                                  <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() =>
                                      setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
                                    }
                                    className="rounded-lg hover:bg-gray-50"
                                  >
                                    <ChevronLeft className="w-4 h-4" />
                                  </Button>
                                  <h4 className="font-semibold">
                                    {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                                  </h4>
                                  <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() =>
                                      setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
                                    }
                                    className="rounded-lg hover:bg-gray-50"
                                  >
                                    <ChevronRight className="w-4 h-4" />
                                  </Button>
                                </div>

                                <div className="grid grid-cols-7 gap-1 mb-2">
                                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                                    <div key={day} className="text-center text-sm font-medium text-gray-500 p-2">
                                      {day}
                                    </div>
                                  ))}
                                </div>

                                <div className="grid grid-cols-7 gap-1">
                                  {generateCalendar().map((day, index) => (
                                    <Button
                                      key={index}
                                      type="button"
                                      variant="ghost"
                                      size="sm"
                                      disabled={day.isPast || !day.isCurrentMonth}
                                      onClick={() => selectDate(day.dateString)}
                                      className={`h-8 w-8 p-0 rounded-lg transition-all duration-200 ${
                                        day.isSelected
                                          ? "bg-black text-white hover:bg-gray-800"
                                          : day.isToday
                                            ? "bg-gray-100 text-black hover:bg-gray-200"
                                            : day.isCurrentMonth
                                              ? "hover:bg-gray-50"
                                              : "text-gray-300"
                                      } ${day.isPast ? "opacity-50 cursor-not-allowed" : ""}`}
                                    >
                                      {day.date.getDate()}
                                    </Button>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>
                          )}

                          {errors.date && (
                            <div className="absolute -bottom-6 left-0 flex items-center text-red-500 text-sm animate-in slide-in-from-left duration-200">
                              <AlertCircle className="w-4 h-4 mr-1" />
                              {errors.date}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Time Selection */}
                      <div className="space-y-2">
                        <Label className="text-gray-700 font-medium">Preferred Time</Label>
                        <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                          <SelectTrigger
                            className={`rounded-xl border-2 transition-all duration-200 ${
                              errors.time
                                ? "border-red-300"
                                : formData.time
                                  ? "border-gray-300 bg-gray-50"
                                  : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <Clock className="w-4 h-4 mr-2" />
                            <SelectValue placeholder="Choose your preferred time" />
                          </SelectTrigger>
                          <SelectContent className="rounded-xl border shadow-xl">
                            {timeSlots.map((time) => (
                              <SelectItem
                                key={time}
                                value={time}
                                className="rounded-lg hover:bg-gray-50 focus:bg-gray-50"
                              >
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.time && (
                          <div className="flex items-center text-red-500 text-sm animate-in slide-in-from-left duration-200">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.time}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-12 text-center">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-12 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 ${
                        isSubmitting
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-black hover:bg-gray-800 hover:scale-105 hover:shadow-xl shadow-lg"
                      } text-white`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Booking Appointment...
                        </div>
                      ) : (
                        "Book Now"
                      )}
                    </Button>
                    <p className="text-sm text-gray-500 mt-4">
                      By booking an appointment, you agree to our terms of service and privacy policy.
                    </p>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

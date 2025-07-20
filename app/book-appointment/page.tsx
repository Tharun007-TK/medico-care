"use client"

import type React from "react"

import { useState, useEffect } from "react"
import ProfessionalNavbar from "@/components/professional-navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Clock, User, Phone, Mail, FileText, Heart, CheckCircle, ArrowLeft } from "lucide-react"
import { format } from "date-fns"
import Link from "next/link"

export default function BookAppointment() {
  const [date, setDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [selectedDoctor, setSelectedDoctor] = useState<string>("")
  const [appointmentType, setAppointmentType] = useState<string>("")
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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

  const doctors = [
    { id: "1", name: "Dr. Sarah Chen", specialty: "Internal Medicine", rating: "4.9" },
    { id: "2", name: "Dr. Michael Rodriguez", specialty: "Family Medicine", rating: "4.8" },
    { id: "3", name: "Dr. Emily Thompson", specialty: "Cardiology", rating: "4.9" },
    { id: "4", name: "Dr. James Wilson", specialty: "Dermatology", rating: "4.7" },
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSuccess(false)
      setFormData({ firstName: "", lastName: "", email: "", phone: "", reason: "" })
      setDate(undefined)
      setSelectedTime("")
      setSelectedDoctor("")
      setAppointmentType("")
    }, 3000)
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50">
        <ProfessionalNavbar currentPage="appointment" />
        <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[80vh]">
          <Card className="bg-white shadow-2xl border-0 max-w-2xl w-full animate-in zoom-in duration-500">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-in zoom-in duration-700 delay-200">
                <CheckCircle className="w-10 h-10 text-green-600 animate-in zoom-in duration-500 delay-500" />
              </div>
              <h2 className="text-3xl font-bold text-black mb-4 animate-in slide-in-from-bottom duration-700 delay-300">
                Appointment Booked Successfully!
              </h2>
              <p className="text-gray-600 mb-8 text-lg animate-in slide-in-from-bottom duration-700 delay-500">
                We've sent a confirmation email with your appointment details. Our team will contact you shortly to
                confirm your booking.
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left animate-in slide-in-from-bottom duration-700 delay-700">
                <h3 className="font-semibold text-black mb-4">Appointment Summary:</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">Patient:</span> {formData.firstName} {formData.lastName}
                  </p>
                  <p>
                    <span className="font-medium">Doctor:</span> {doctors.find((d) => d.id === selectedDoctor)?.name}
                  </p>
                  <p>
                    <span className="font-medium">Date:</span> {date ? format(date, "MMMM d, yyyy") : "Not selected"}
                  </p>
                  <p>
                    <span className="font-medium">Time:</span> {selectedTime}
                  </p>
                  <p>
                    <span className="font-medium">Type:</span> {appointmentType}
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom duration-700 delay-1000">
                <Link href="/">
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 bg-transparent hover:scale-105 transition-all duration-300"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
                <Button
                  onClick={() => setIsSuccess(false)}
                  className="bg-black hover:bg-gray-800 text-white px-6 hover:scale-105 transition-all duration-300"
                >
                  Book Another Appointment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ProfessionalNavbar currentPage="appointment" />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="text-4xl font-bold text-black mb-4">Book Your Appointment</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Schedule a consultation with our certified healthcare professionals. Choose your preferred date, time, and
            consultation type.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Booking Form */}
            <div className="lg:col-span-2">
              <Card
                className={`bg-white shadow-lg border-0 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold text-black">Appointment Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2 group">
                        <Label
                          htmlFor="firstName"
                          className="text-sm font-medium text-gray-700 group-focus-within:text-black transition-colors duration-300"
                        >
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          placeholder="Enter your first name"
                          className="border-gray-200 focus:border-black focus:ring-black transition-all duration-300 hover:border-gray-300"
                          required
                        />
                      </div>
                      <div className="space-y-2 group">
                        <Label
                          htmlFor="lastName"
                          className="text-sm font-medium text-gray-700 group-focus-within:text-black transition-colors duration-300"
                        >
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          placeholder="Enter your last name"
                          className="border-gray-200 focus:border-black focus:ring-black transition-all duration-300 hover:border-gray-300"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2 group">
                        <Label
                          htmlFor="email"
                          className="text-sm font-medium text-gray-700 group-focus-within:text-black transition-colors duration-300"
                        >
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                          className="border-gray-200 focus:border-black focus:ring-black transition-all duration-300 hover:border-gray-300"
                          required
                        />
                      </div>
                      <div className="space-y-2 group">
                        <Label
                          htmlFor="phone"
                          className="text-sm font-medium text-gray-700 group-focus-within:text-black transition-colors duration-300"
                        >
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="(555) 123-4567"
                          className="border-gray-200 focus:border-black focus:ring-black transition-all duration-300 hover:border-gray-300"
                          required
                        />
                      </div>
                    </div>

                    {/* Appointment Type */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-gray-700">Appointment Type *</Label>
                      <Select value={appointmentType} onValueChange={setAppointmentType} required>
                        <SelectTrigger className="border-gray-200 focus:border-black focus:ring-black hover:border-gray-300 transition-all duration-300">
                          <SelectValue placeholder="Select appointment type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="consultation" className="hover:bg-gray-50 transition-colors duration-200">
                            General Consultation
                          </SelectItem>
                          <SelectItem value="followup" className="hover:bg-gray-50 transition-colors duration-200">
                            Follow-up Visit
                          </SelectItem>
                          <SelectItem value="specialist" className="hover:bg-gray-50 transition-colors duration-200">
                            Specialist Consultation
                          </SelectItem>
                          <SelectItem value="telehealth" className="hover:bg-gray-50 transition-colors duration-200">
                            Telehealth Consultation
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Doctor Selection */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-gray-700">Select Doctor *</Label>
                      <Select value={selectedDoctor} onValueChange={setSelectedDoctor} required>
                        <SelectTrigger className="border-gray-200 focus:border-black focus:ring-black hover:border-gray-300 transition-all duration-300">
                          <SelectValue placeholder="Choose your preferred doctor" />
                        </SelectTrigger>
                        <SelectContent>
                          {doctors.map((doctor) => (
                            <SelectItem
                              key={doctor.id}
                              value={doctor.id}
                              className="hover:bg-gray-50 transition-colors duration-200"
                            >
                              <div className="flex items-center justify-between w-full">
                                <span>{doctor.name}</span>
                                <span className="text-sm text-gray-500 ml-2">
                                  {doctor.specialty} • ⭐ {doctor.rating}
                                </span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Date Selection */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-gray-700">Preferred Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal border-gray-200 focus:border-black focus:ring-black bg-transparent hover:border-gray-300 transition-all duration-300"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Select a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 animate-in slide-in-from-top duration-200" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Time Selection */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-gray-700">Preferred Time *</Label>
                      <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                        {timeSlots.map((time, index) => (
                          <Button
                            key={time}
                            type="button"
                            variant={selectedTime === time ? "default" : "outline"}
                            className={`text-sm transition-all duration-300 hover:scale-105 ${
                              selectedTime === time
                                ? "bg-black text-white shadow-lg"
                                : "border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                            }`}
                            onClick={() => setSelectedTime(time)}
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Reason for Visit */}
                    <div className="space-y-2 group">
                      <Label
                        htmlFor="reason"
                        className="text-sm font-medium text-gray-700 group-focus-within:text-black transition-colors duration-300"
                      >
                        Reason for Visit
                      </Label>
                      <Textarea
                        id="reason"
                        value={formData.reason}
                        onChange={(e) => handleInputChange("reason", e.target.value)}
                        placeholder="Please describe your symptoms or reason for the appointment..."
                        className="border-gray-200 focus:border-black focus:ring-black min-h-[100px] transition-all duration-300 hover:border-gray-300"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 text-lg font-medium transition-all duration-300 ${
                        isSubmitting
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-black hover:bg-gray-800 hover:scale-105 hover:shadow-lg"
                      } text-white`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Booking Appointment...
                        </div>
                      ) : (
                        "Book Appointment"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Appointment Summary */}
              <Card
                className={`bg-white shadow-lg border-0 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-black">Appointment Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 text-sm group hover:translate-x-1 transition-transform duration-300">
                    <CalendarIcon className="w-4 h-4 text-gray-500 group-hover:text-black transition-colors duration-300" />
                    <span className="text-gray-700">{date ? format(date, "MMMM d, yyyy") : "Date not selected"}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm group hover:translate-x-1 transition-transform duration-300">
                    <Clock className="w-4 h-4 text-gray-500 group-hover:text-black transition-colors duration-300" />
                    <span className="text-gray-700">{selectedTime || "Time not selected"}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm group hover:translate-x-1 transition-transform duration-300">
                    <User className="w-4 h-4 text-gray-500 group-hover:text-black transition-colors duration-300" />
                    <span className="text-gray-700">
                      {selectedDoctor ? doctors.find((d) => d.id === selectedDoctor)?.name : "Doctor not selected"}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm group hover:translate-x-1 transition-transform duration-300">
                    <FileText className="w-4 h-4 text-gray-500 group-hover:text-black transition-colors duration-300" />
                    <span className="text-gray-700">
                      {appointmentType
                        ? appointmentType.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())
                        : "Type not selected"}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card
                className={`bg-white shadow-lg border-0 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-black">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 text-sm group hover:translate-x-1 transition-transform duration-300">
                    <Phone className="w-4 h-4 text-gray-500 group-hover:text-green-600 transition-colors duration-300" />
                    <span className="text-gray-700">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm group hover:translate-x-1 transition-transform duration-300">
                    <Mail className="w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-colors duration-300" />
                    <span className="text-gray-700">support@medicare-plus.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm group hover:translate-x-1 transition-transform duration-300">
                    <Clock className="w-4 h-4 text-gray-500 group-hover:text-black transition-colors duration-300" />
                    <span className="text-gray-700">24/7 Support Available</span>
                  </div>
                </CardContent>
              </Card>

              {/* Security Badge */}
              <Card
                className={`bg-gradient-to-br from-gray-900 to-black text-white shadow-lg border-0 hover:shadow-xl transition-all duration-700 delay-700 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                    <Heart className="w-6 h-6 text-white animate-pulse" />
                  </div>
                  <h3 className="font-bold mb-2">Secure & Private</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Your health information is protected with enterprise-grade security and HIPAA compliance.
                  </p>
                  <Badge className="bg-green-600 text-white text-xs px-3 py-1 hover:bg-green-700 transition-colors duration-300">
                    HIPAA Compliant
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

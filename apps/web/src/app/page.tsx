'use client'
import { Map } from '@elitevalet/ui/src/components/organisms/map/Map'
import {
  IconArrowRight,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconClock,
  IconMapPin,
  IconShieldCheck,
  IconSparkles,
  IconStar,
  IconStarFilled,
  IconUsers,
} from '@tabler/icons-react'
import { motion } from 'framer-motion'

import {
  IconBrandTwitter,
  IconBuildingSkyscraper,
  IconCar,
  // IconCarousel,
  IconCertificate,
  IconChevronDown,
  IconChevronUp,
  IconCloudDownload,
  IconCrown,
  IconGasStation,
  IconMail,
  IconPhone,
  IconQuote,
  IconReportAnalytics,
  IconRoad,
  IconShoppingCart,
} from '@tabler/icons-react'
import Image from 'next/image'

import Link from 'next/link'
import { useState } from 'react'

// Animated section component for reusability
const AnimatedSection = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
)

const LandingPage = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <HeroSection />

        <ServiceCoverageSection />

        {/* New: Pricing Section */}
        <PricingSection />

        {/* Testimonials */}
        <TestimonialSection />

        {/* New: FAQ Section */}
        <FAQSection />

        {/* New: App Showcase Section */}
        <ShowcaseSection />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  )
}

export default LandingPage

const HeroSection = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image Container */}
            <div className="lg:w-1/2 relative w-full h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/hero.jpg" // Replace with your actual image path
                alt="Luxury valet service"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                Luxury Valet Service <br />
                Reimagined
              </h1>
              <p className="text-xl text-primary-700 mb-8 max-w-2xl mx-auto lg:mx-0">
                Experience white-glove vehicle service with digital precision.
                Book premium valet services in seconds, track in real-time,
                retrieve instantly.
              </p>

              {/* Buttons Container */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-primary-500 text-primary-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-400 flex items-center gap-2 mx-auto sm:mx-0"
                >
                  Book Now <IconArrowRight className="w-5 h-5" />
                </motion.button>

                <Link href="/search" passHref>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="border-2 border-primary-500 text-primary-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-50 flex items-center gap-2 mx-auto sm:mx-0"
                  >
                    Search Services
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

const ServiceCoverageSection = () => {
  const cities = {
    east: ['New York City', 'Los Angeles', 'Chicago', 'San Francisco', 'Miami'],
    west: ['Dallas', 'Houston', 'Boston', 'Seattle', 'Washington DC'],
  }

  const coverageDetails = [
    {
      title: 'Extensive Network',
      description:
        'Our growing network of valet professionals is always ready to provide top-tier service.',
      icon: IconRoad,
      color: 'text-blue-500',
    },
    {
      title: 'On-Demand Availability',
      description:
        'Book your valet service when you need it, with real-time confirmations and updates.',
      icon: IconClock,
      color: 'text-emerald-500',
    },
    {
      title: 'Trusted Professionals',
      description:
        'All our valets are vetted and background checked to ensure your vehicle is in safe hands.',
      icon: IconShieldCheck,
      color: 'text-amber-500',
    },
  ]

  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="rounded-3xl p-8 sm:p-12 bg-white shadow-xl border border-primary-100">
            {/* Header Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">
                Nationwide Valet Coverage
              </h2>
              <p className="text-xl text-primary-600 max-w-2xl mx-auto">
                Serving 250+ locations across major cities, airports, and
                business districts
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-blue-50 p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-primary-600 font-medium">
                  Service Coverage
                </div>
              </div>
              <div className="bg-emerald-50 p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  24/7
                </div>
                <div className="text-primary-600 font-medium">Availability</div>
              </div>
              <div className="bg-amber-50 p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  5k+
                </div>
                <div className="text-primary-600 font-medium">
                  Active Agents
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="space-y-12">
                {/* Features Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                  {coverageDetails.map((feature, index) => (
                    <div
                      key={index}
                      className="group p-6 rounded-xl border border-primary-200 hover:border-blue-200 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <feature.icon
                          className={`w-8 h-8 ${feature.color} mt-1`}
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-primary-900 mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-primary-600 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cities Section */}
                <div className="bg-primary-50 rounded-2xl p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-primary-900 mb-4 flex items-center gap-2">
                        <IconMapPin className="w-5 h-5 text-blue-500" />
                        East Coast
                      </h3>
                      <ul className="space-y-2">
                        {cities.east.map((city) => (
                          <li
                            key={city}
                            className="text-primary-600 flex items-center gap-2"
                          >
                            <span className="text-blue-500">•</span> {city}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-900 mb-4 flex items-center gap-2">
                        <IconMapPin className="w-5 h-5 text-emerald-500" />
                        West Coast
                      </h3>
                      <ul className="space-y-2">
                        {cities.west.map((city) => (
                          <li
                            key={city}
                            className="text-primary-600 flex items-center gap-2"
                          >
                            <span className="text-emerald-500">•</span> {city}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-12">
                {/* Map Section */}
                <div className="bg-primary-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-primary-900 mb-6">
                    Live Service Map
                  </h3>
                  <div className="aspect-video bg-white rounded-xl border border-primary-200 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Map />
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      <span className="text-sm text-primary-600">
                        High availability
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <span className="text-sm text-primary-600">
                        Peak hours
                      </span>
                    </div>
                  </div>
                </div>

                {/* How It Works */}
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-primary-900 mb-6">
                    3-Step Service Process
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium text-primary-900 mb-1">
                          Book Instantly
                        </h4>
                        <p className="text-primary-600 text-sm">
                          Select location, date, and time through our platform
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium text-primary-900 mb-1">
                          Get Confirmation
                        </h4>
                        <p className="text-primary-600 text-sm">
                          Receive agent details and digital ticket
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium text-primary-900 mb-1">
                          Enjoy Service
                        </h4>
                        <p className="text-primary-600 text-sm">
                          Verified agent handles your vehicle with care
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 flex flex-wrap gap-8 items-center justify-center bg-primary-50 py-8 rounded-2xl">
              <div className="text-center px-6">
                <IconShieldCheck className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <div className="text-2xl font-bold text-primary-900">$2M</div>
                <div className="text-primary-600 text-sm">
                  Insurance Coverage
                </div>
              </div>
              <div className="text-center px-6">
                <IconStar className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <div className="text-2xl font-bold text-primary-900">4.9★</div>
                <div className="text-primary-600 text-sm">Customer Rating</div>
              </div>
              <div className="text-center px-6">
                <IconUsers className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <div className="text-2xl font-bold text-primary-900">5k+</div>
                <div className="text-primary-600 text-sm">Served Daily</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

const PricingSection = () => {
  return (
    <section className="py-28 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-center mb-4 text-primary-800">
              Fair & Transparent Pricing
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Pay only for what you need. All plans include our 100%
              satisfaction guarantee and 24/7 customer support.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Standard Tier */}
          <AnimatedSection delay={0.1}>
            <div className="bg-white p-8 rounded-3xl border border-primary-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                  Best for individuals
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary-700">
                Standard
              </h3>
              <div className="mb-8">
                <div className="text-4xl font-bold mb-2 text-primary-600">
                  $25<span className="text-lg text-primary-500">/hour</span>
                </div>
                <p className="text-primary-500 text-sm">
                  + $5 security fee • 1 hour minimum
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-primary-600">
                  <IconShieldCheck className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Basic insurance</span>
                    <span className="block text-sm text-primary-400">
                      Up to $50,000 coverage
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-primary-600">
                  <IconClock className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">24/7 Availability</span>
                    <span className="block text-sm text-primary-400">
                      Average 15-min response time
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-primary-600">
                  <IconCar className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Standard vehicles</span>
                    <span className="block text-sm text-primary-400">
                      Sedans, SUVs, trucks
                    </span>
                  </div>
                </li>
              </ul>
              <button className="w-full py-4 rounded-xl bg-primary-100 text-primary-700 hover:bg-primary-200 transition-colors font-medium flex items-center justify-center gap-2">
                <IconShoppingCart className="w-5 h-5" />
                Choose Standard
              </button>
            </div>
          </AnimatedSection>

          {/* Premium Tier */}
          <AnimatedSection delay={0.2}>
            <div className="bg-gradient-to-b from-primary-600 to-primary-700 p-8 rounded-3xl text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 bg-primary-800 px-4 py-1 text-sm rounded-bl-xl">
                Most Popular
              </div>
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-sm bg-primary-500/20 text-primary-100 rounded-full">
                  Best for luxury vehicles
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <div className="mb-8">
                <div className="text-4xl font-bold mb-2">
                  $45<span className="text-lg text-primary-200">/hour</span>
                </div>
                <p className="text-primary-200 text-sm">
                  Includes security fee • 30-min minimum
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <IconSparkles className="w-5 h-5 text-primary-200 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Priority service</span>
                    <span className="block text-sm text-primary-200">
                      Guaranteed 5-min response
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <IconCar className="w-5 h-5 text-primary-200 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Luxury vehicles</span>
                    <span className="block text-sm text-primary-200">
                      Exotics, classics, premium brands
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <IconGasStation className="w-5 h-5 text-primary-200 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Fuel top-up</span>
                    <span className="block text-sm text-primary-200">
                      Complimentary fuel service
                    </span>
                  </div>
                </li>
              </ul>
              <button className="w-full py-4 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors font-medium flex items-center justify-center gap-2">
                <IconCrown className="w-5 h-5" />
                Choose Premium
              </button>
            </div>
          </AnimatedSection>

          {/* Enterprise Tier */}
          <AnimatedSection delay={0.3}>
            <div className="bg-white p-8 rounded-3xl border border-primary-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-sm bg-purple-100 text-purple-800 rounded-full">
                  For businesses
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary-700">
                Enterprise
              </h3>
              <div className="mb-8">
                <div className="text-4xl font-bold mb-2 text-primary-600">
                  Custom
                </div>
                <p className="text-primary-500 text-sm">
                  Volume discounts available • Dedicated support
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-primary-600">
                  <IconBuildingSkyscraper className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">
                      Multi-location management
                    </span>
                    <span className="block text-sm text-primary-400">
                      Centralized dashboard
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-primary-600">
                  <IconCertificate className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Dedicated team</span>
                    <span className="block text-sm text-primary-400">
                      Personalized valet squad
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-primary-600">
                  <IconReportAnalytics className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Advanced analytics</span>
                    <span className="block text-sm text-primary-400">
                      Custom reporting & insights
                    </span>
                  </div>
                </li>
              </ul>
              <button className="w-full py-4 rounded-xl bg-primary-100 text-primary-700 hover:bg-primary-200 transition-colors font-medium flex items-center justify-center gap-2">
                <IconPhone className="w-5 h-5" />
                Contact Sales
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

const TestimonialSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-primary-600 font-semibold text-lg mb-4 block">
              Trusted by Thousands
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Voices of Satisfaction
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how we&apos;re transforming valet experiences through the
              words of our valued customers
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary-100 overflow-hidden mr-4">
                    <img
                      src={`/avatar_${index + 1}.jpg`}
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex gap-1 text-amber-400 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <IconStarFilled key={i} className="w-5 h-5" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">Verified User</span>
                  </div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic font-serif">
                  &ldquo;The best valet experience I&apos;ve ever had. The app
                  is seamless and the service is exceptional.&ldquo;
                </p>

                <div className="border-t border-gray-100 pt-5">
                  <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                  <p className="text-primary-600 text-sm">Premium Member</p>
                </div>

                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <IconQuote className="w-16 h-16 text-primary-600" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              className="w-3 h-3 rounded-full bg-gray-300 hover:bg-primary-600 transition-colors"
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const FooterSection = () => {
  return (
    <footer className="bg-primary-900/90 text-primary-100 py-16 mx-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <AnimatedSection>
            <div className="space-y-4">
              <div className="text-2xl font-bold flex items-center gap-2">
                <IconSparkles className="w-6 h-6 text-primary-400" />
                EliteValet
              </div>
              <p className="text-primary-300 text-sm leading-relaxed">
                Redefining luxury valet experiences through innovation and
                exceptional service.
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  href="#"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  <IconBrandTwitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  <IconBrandInstagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  <IconBrandLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Quick Links */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary-200 mb-2">
                Company
              </h3>
              <nav className="space-y-3">
                {['About Us', 'Careers', 'Blog', 'Press'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-primary-400 hover:text-primary-300 transition-colors text-sm"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          </AnimatedSection>

          {/* Resources */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary-200 mb-2">
                Resources
              </h3>
              <nav className="space-y-3">
                {['Help Center', 'Partners', 'Legal', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-primary-400 hover:text-primary-300 transition-colors text-sm"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          </AnimatedSection>

          {/* Contact */}
          <AnimatedSection delay={0.3}>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary-200 mb-2">
                Contact
              </h3>
              <div className="space-y-3 text-sm text-primary-400">
                <div className="flex items-center gap-2">
                  <IconMail className="w-4 h-4" />
                  support@elitevalet.com
                </div>
                <div className="flex items-center gap-2">
                  <IconPhone className="w-4 h-4" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center gap-2">
                  <IconMapPin className="w-4 h-4" />
                  123 Luxury Avenue, Suite 450
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Copyright */}
        <AnimatedSection delay={0.4}>
          <div className="border-t border-primary-800 pt-8 text-center">
            <p className="text-sm text-primary-400">
              © 2024 EliteValet. All rights reserved.
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-primary-300 transition-colors">
                Privacy Policy
              </a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-primary-300 transition-colors">
                Terms of Service
              </a>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}

const ShowcaseSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-green-900 rounded-3xl p-8 md:p-12 text-primary-50">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="flex-1">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight">
                  Experience Effortless Parking with Our Mobile App
                </h2>
                <p className="text-lg mb-6 md:mb-8 text-primary-200">
                  Book, manage, and track your valet service right from your
                  phone.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <IconCloudDownload className="w-6 h-6 text-primary-300" />
                    <span className="text-primary-200">
                      Easy Booking & Management
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <IconPhone className="w-6 h-6 text-primary-300" />
                    <span className="text-primary-200">
                      Real-time Tracking & Updates
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <IconPhone className="w-6 h-6 text-primary-300" />
                    <span className="text-primary-200">
                      Direct Support Access
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <button className="bg-primary-400 px-5 py-3 rounded-xl hover:bg-primary-400 transition-colors text-sm">
                    App Store
                  </button>
                  <button className="bg-primary-400 px-5 py-3 rounded-xl hover:bg-primary-400 transition-colors text-sm">
                    Google Play
                  </button>
                </div>
              </AnimatedSection>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <AnimatedSection delay={0.2}>
                <div className="relative max-w-xs md:max-w-sm">
                  <div className="absolute -inset-1 bg-primary-700 rounded-3xl -rotate-2"></div>
                  <div className="relative bg-primary-600 p-2 rounded-3xl shadow-xl">
                    {/* Phone Mockup with Next.js Image */}
                    <Image
                      src="/footer.jpg"
                      alt="App Mockup on a Phone"
                      width={250}
                      height={400}
                      className="rounded-xl"
                      objectFit="contain"
                      priority
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const FAQSection = () => {
  const faqs = [
    {
      question: 'How do I book a valet service?',
      answer:
        'You can easily book a valet service through our customer-facing web app. Simply create an account, add your vehicle details, choose a pickup time and location, and confirm your booking. Our team will take care of the rest.',
    },
    {
      question: 'What happens after I book?',
      answer:
        'Once you have booked the service, your booking will be visible to the valet agent assigned to your area. You will receive updates and notifications through the app.',
    },
    {
      question: 'How do I cancel a booking?',
      answer:
        'You can cancel the booking before the valet agent arrives. Go to your booking details and cancel it. Please note that there may be cancellation charges associated with the booking cancellation, depending on your cancellation time.',
    },
    {
      question: 'How do I know who is taking care of my vehicle?',
      answer:
        'Our valet agent will be visible in the app, you will receive his details and his profile. They are all verified and professional and you can reach out to our support team, if you face any issues.',
    },
    {
      question: 'Can I add special instructions when I book?',
      answer:
        'Yes, when you create the booking, you can add a special instructions. This will be provided to valet agent as well.',
    },
    {
      question: 'How do I pay for the valet service?',
      answer:
        'Our payment process is seamlessly integrated within the web app. You can add your preferred payment method and pay for your service.',
    },
  ]

  return (
    <section className="relative py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-800">
            Frequently Asked Questions
          </h2>
        </AnimatedSection>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const FAQItem = ({
  faq,
  index,
}: {
  faq: { question: string; answer: string }
  index: number
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AnimatedSection key={index} delay={index * 0.1}>
      <div className="bg-white rounded-lg shadow-md border border-primary-50 overflow-hidden">
        <button
          className="flex items-center justify-between w-full p-4 text-left focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="text-lg font-semibold text-primary-700">
            {faq.question}
          </h3>
          {isOpen ? (
            <IconChevronUp className="w-5 h-5 text-primary-500" />
          ) : (
            <IconChevronDown className="w-5 h-5 text-primary-500" />
          )}
        </button>
        {isOpen && (
          <div className="px-4 pb-4 text-primary-600 leading-relaxed">
            {faq.answer}
          </div>
        )}
      </div>
    </AnimatedSection>
  )
}

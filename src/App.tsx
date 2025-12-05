import Frame31 from "./imports/Frame31";
import Frame1948754621 from "./imports/Frame1948754621";
import { Menu, X, Check } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1d2fff] shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-16 h-auto sm:w-20">
                <Frame31 />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-white/90 hover:text-white transition-colors">
                Features
              </a>
              <a href="#download" className="text-white/90 hover:text-white transition-colors">
                Download
              </a>
              <button className="bg-white text-[#1d2fff] px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              <div className="flex flex-col gap-4">
                <a
                  href="#features"
                  className="text-white/90 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#download"
                  className="text-white/90 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Download
                </a>
                <button className="bg-white text-[#1d2fff] px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors w-full">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 pb-0 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">
            {/* Left Column - Text Content */}
            <div className="text-left pt-8 lg:pt-0 order-2 lg:order-1">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#252525] mb-4 sm:mb-6"
                style={{ fontFamily: 'Host Grotesk, sans-serif', fontWeight: 700 }}
              >
                Everything you need to stay productive, in one place
              </h1>
              <p className="text-lg sm:text-xl text-[#252525]/80 mb-6 sm:mb-8 max-w-xl">
                Quick, easy, and friendly access to all your projects, tasks, and notes. The productivity app that adapts to the way you work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-[#1d2fff] text-white px-8 py-4 rounded-full hover:bg-[#1d2fff]/90 transition-all transform hover:scale-105 shadow-lg">
                  Download for iOS
                </button>
                <button className="bg-transparent text-[#252525] border-2 border-[#252525] px-8 py-4 rounded-full hover:bg-[#252525]/5 transition-all">
                  Learn More
                </button>
              </div>
              {/* Trust indicators */}
              <div className="flex items-center gap-2 text-[#252525]/70">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#252525]/10 border-2 border-[#FAFAFA]" />
                  <div className="w-8 h-8 rounded-full bg-[#252525]/10 border-2 border-[#FAFAFA]" />
                  <div className="w-8 h-8 rounded-full bg-[#252525]/10 border-2 border-[#FAFAFA]" />
                </div>
                <span className="text-sm sm:text-base">Trusted by 1000+ users worldwide</span>
              </div>
            </div>

            {/* Right Column - 3D Phone Mockup */}
            <div className="relative order-1 lg:order-2 flex items-center justify-center lg:justify-end pt-8 lg:pt-0 min-h-[500px] lg:min-h-[600px]" id="download">
              {/* Background decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[500px] h-[500px] bg-[#252525]/5 rounded-full blur-3xl" />
              </div>
              
              {/* 3D Phone Frame from Figma */}
              <div className="relative w-full max-w-[600px] h-[600px] scale-75 sm:scale-90 md:scale-100">
                <Frame1948754621 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8" id="features">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4"
              style={{ fontFamily: 'Host Grotesk, sans-serif', fontWeight: 700 }}
            >
              Why choose Listo?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Built for modern productivity with features that help you focus on what matters most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#1d2fff] rounded-2xl flex items-center justify-center mb-6">
                <Check className="text-white" size={28} />
              </div>
              <h3
                className="text-xl sm:text-2xl text-gray-900 mb-3"
                style={{ fontFamily: 'Host Grotesk, sans-serif', fontWeight: 600 }}
              >
                Quick Access
              </h3>
              <p className="text-gray-600">
                Get to your work instantly with our intuitive interface. No complicated menus or hidden features. Everything you need is just a tap away.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#1d2fff] rounded-2xl flex items-center justify-center mb-6">
                <Check className="text-white" size={28} />
              </div>
              <h3
                className="text-xl sm:text-2xl text-gray-900 mb-3"
                style={{ fontFamily: 'Host Grotesk, sans-serif', fontWeight: 600 }}
              >
                Easy & Friendly
              </h3>
              <p className="text-gray-600">
                Designed with simplicity in mind. A clean, modern interface that feels natural from the first use. Productivity shouldn&apos;t be complicated.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#1d2fff] rounded-2xl flex items-center justify-center mb-6">
                <Check className="text-white" size={28} />
              </div>
              <h3
                className="text-xl sm:text-2xl text-gray-900 mb-3"
                style={{ fontFamily: 'Host Grotesk, sans-serif', fontWeight: 600 }}
              >
                All in One Place
              </h3>
              <p className="text-gray-600">
                Projects, tasks, and notes unified in a single app. No more switching between different tools. Your entire workflow in one beautiful package.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-[#1d2fff] rounded-3xl sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 shadow-2xl shadow-[#1d2fff]/20">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-6"
              style={{ fontFamily: 'Host Grotesk, sans-serif', fontWeight: 700 }}
            >
              Ready to boost your productivity?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8">
              Join thousands of users who have transformed the way they work with Listo.
            </p>
            <button className="bg-white text-[#1d2fff] px-8 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Download Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#252525] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="w-20 mb-4">
                <Frame31 />
              </div>
              <p className="text-white/80">
                The all-in-one productivity app for modern teams.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="mb-4" style={{ fontFamily: 'Host Grotesk, sans-serif', fontWeight: 600 }}>
                Product
              </h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#download" className="hover:text-white transition-colors">Download</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-4" style={{ fontFamily: 'Host Grotesk, sans-serif', fontWeight: 600 }}>
                Company
              </h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="mb-4" style={{ fontFamily: 'Host Grotesk, sans-serif', fontWeight: 600 }}>
                Legal
              </h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-white/60">
            <p>&copy; 2025 Listo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
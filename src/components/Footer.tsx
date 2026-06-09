import React from "react";
import { Phone, Globe, Clock } from "lucide-react";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Address Section */}
          <div className="group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-600 rounded-lg flex items-center justify-center mr-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6 text-maroon" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-white">Visit Us</h3>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gold/30 transition-all duration-300">
              <p className="text-gray-300 leading-relaxed text-sm">
                <span className="text-gold font-semibold">📍 Address:</span>
                <br />
                Near Apna Mart, Avanti Vihar, Sector 2 Shankar Nagar
                <br />
                Raipur, Chhattisgarh 492001
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-600 rounded-lg flex items-center justify-center mr-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-maroon" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-white">Contact</h3>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gold/30 transition-all duration-300">
              <p className="text-gray-300 mb-4 text-sm">
                <span className="text-gold font-semibold">📞 Phone:</span> 7999527007
              </p>
            </div>
          </div>

          {/* Opening Hours Section */}
          <div className="group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-600 rounded-lg flex items-center justify-center mr-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6 text-maroon" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-white">Opening Hours</h3>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gold/30 transition-all duration-300">
              <div className="text-center">
                <p className="text-gold font-bold text-lg mb-2">11:00 AM - 10:00 PM</p>
                <div className="inline-flex items-center gap-2 bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Open Monday to Friday
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Instasaree Boutique. All rights reserved.
            </p>

            {/* Legal Links */}
            <nav className="flex items-center gap-4 text-sm">
              <a
                href="#/privacy-policy"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="#/terms-and-conditions"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                Terms &amp; Conditions
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="#/shipping-policy"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                Shipping &amp; Delivery
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="#/refund-policy"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                Cancellation &amp; Refund
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-maroon font-bold text-xs">IS</span>
              </div>
              <p className="text-gold font-playfair font-semibold text-sm">
                Effortless Elegance | Saree, No Worries!
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

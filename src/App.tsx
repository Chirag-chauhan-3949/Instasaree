import React from "react";
import {
  Phone,
  Mail,
  Globe,
  Instagram,
  MessageCircle,
  Star,
  Truck,
  Shield,
  Clock,
  Sparkles,
  Heart,
  Users,
  Award,
  Scissors,
  Palette,
  Gift,
  ChevronRight,
  Quote,
} from "lucide-react";
import image1 from "./images/1.jpeg";

function App() {
  const features = [
    { icon: Star, text: "Premium Quality Sarees" },
    { icon: Truck, text: "Doorstep Delivery Available" },
    { icon: Users, text: "Professional Styling Consultation" },
    { icon: Clock, text: "Quick Turnaround Time" },
    { icon: Shield, text: "Authentic & Genuine Products" },
    { icon: Heart, text: "Customization Available" },
    { icon: Sparkles, text: "Exclusive Designer Collection" },
    { icon: MessageCircle, text: "24/7 Customer Support" },
  ];

  const services = [
    {
      icon: Palette,
      title: "Custom Styling",
      description:
        "Personalized saree styling consultation to match your unique taste and occasion.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Scissors,
      title: "Alterations",
      description:
        "Expert tailoring and fitting services to ensure your saree fits perfectly.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Gift,
      title: "Gift Wrapping",
      description:
        "Elegant gift wrapping services for special occasions and celebrations.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      title: "Premium Collection",
      description:
        "Exclusive designer sarees from renowned brands and emerging designers.",
      color: "from-gold to-yellow-500",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "Absolutely stunning collection! The quality is exceptional and the styling advice was perfect for my wedding.",
      rating: 5,
    },
    {
      name: "Anita Patel",
      location: "Delhi",
      text: "Quick delivery and beautiful packaging. The saree was exactly as shown and fits perfectly!",
      rating: 5,
    },
    {
      name: "Meera Reddy",
      location: "Bangalore",
      text: "Professional service and gorgeous sarees. Instasaree has become my go-to boutique for all occasions.",
      rating: 5,
    },
  ];

  const galleryImages = [image1];

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/917999527007?text=Hi! I'm interested in your saree collection.",
      "_blank"
    );
  };

  const handlePhoneClick = () => {
    window.open("tel:+917999527007", "_self");
  };

  const handleInstagramClick = () => {
    window.open("https://instagram.com/instasareeboutique", "_blank");
  };

  return (
    <div className="min-h-screen bg-maroon text-white font-inter">
      {/* Hero Section */}
      <header className="relative overflow-hidden min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-maroon via-red-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(240,184,0,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(240,184,0,0.05)_0%,transparent_50%)]"></div>

        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-gold rounded-full opacity-60 animate-ping"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-gold-light rounded-full opacity-80 animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-gold rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-gold rounded-full opacity-70 animate-ping"></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-gold-light rounded-full opacity-50 animate-pulse"></div>

        <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 text-center">
          {/* Logo */}
          <div className="mb-12 flex justify-center animate-scale-in">
            <div className="relative group">
              <div className="w-28 h-28 md:w-36 md:h-36 bg-gradient-to-br from-gold via-gold-light to-yellow-400 rounded-full flex items-center justify-center shadow-2xl animate-float relative overflow-hidden">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shimmer"></div>
                <div className="w-20 h-20 md:w-26 md:h-26 bg-gradient-to-br from-black to-gray-900 rounded-full flex items-center justify-center relative z-10 shadow-inner">
                  <span className="text-gold font-playfair font-bold text-xl md:text-2xl tracking-wider">
                    IS
                  </span>
                </div>
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 w-28 h-28 md:w-36 md:h-36 bg-gold rounded-full opacity-20 blur-xl animate-pulse"></div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="font-playfair font-bold text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight animate-fade-in-up tracking-wider">
            <span className="bg-gradient-to-r from-white via-gold-light to-white bg-clip-text text-transparent">
              INSTASAREE
            </span>
          </h1>

          {/* Tagline */}
          <div
            className="mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl lg:text-3xl text-gold font-medium tracking-widest font-inter">
              EFFORTLESS ELEGANCE | SAREE, NO WORRIES!
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6"></div>
          </div>

          {/* CTA Button */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={handleWhatsAppClick}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-gold via-gold-light to-gold text-maroon font-bold px-10 py-5 rounded-full text-lg md:text-xl transition-all duration-500 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-gold focus:ring-opacity-50 overflow-hidden"
              aria-label="Contact us on WhatsApp"
            >
              {/* Button Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Contact Us</span>
            </button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-maroon via-red-900 to-maroon relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, rgba(240,184,0,0.3) 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <div className="animate-fade-in-up">
                <span className="inline-block px-4 py-2 bg-gold bg-opacity-20 text-gold text-sm font-semibold rounded-full mb-6 border border-gold border-opacity-30">
                  ABOUT US
                </span>
              </div>
              <h2
                className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl mb-8 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                <span className="bg-gradient-to-r from-white via-gold-light to-white bg-clip-text text-transparent">
                  About Instasaree
                </span>
              </h2>
              <div
                className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full mb-10 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <p
                className="text-xl md:text-2xl text-gray-100 leading-relaxed mb-12 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                At Instasaree Boutique, we believe that every woman deserves to
                feel elegant and confident. Our carefully curated collection of
                premium sarees combines traditional craftsmanship with
                contemporary style, ensuring you look stunning for every
                occasion.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div
                  className="text-center group animate-slide-in-left"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-gold via-gold-light to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <Star className="w-8 h-8 text-maroon" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-gold">
                    5+ Years
                  </h3>
                  <p className="text-gray-200 text-lg">of Excellence</p>
                </div>
                <div
                  className="text-center group animate-fade-in-up"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-gold via-gold-light to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <Users className="w-8 h-8 text-maroon" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-gold">1000+</h3>
                  <p className="text-gray-200 text-lg">Happy Customers</p>
                </div>
                <div
                  className="text-center group animate-slide-in-right"
                  style={{ animationDelay: "0.6s" }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-gold via-gold-light to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <Award className="w-8 h-8 text-maroon" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-gold">Premium</h3>
                  <p className="text-gray-200 text-lg">Quality Assured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gold-light opacity-3 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-gold bg-opacity-20 text-gold text-sm font-semibold rounded-full mb-6 border border-gold border-opacity-30">
                OUR SERVICES
              </span>
            </div>
            <h2
              className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="bg-gradient-to-r from-white via-gold-light to-white bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p
              className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Beyond beautiful sarees, we offer comprehensive services to ensure
              your complete satisfaction
            </p>
            <div
              className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-gradient-to-br from-maroon via-red-900 to-black rounded-2xl border border-gold border-opacity-20 hover:border-opacity-80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  {/* Card Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-10 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000"></div>

                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <IconComponent className="w-8 h-8 text-white relative z-10" />
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-gold group-hover:text-gold-light transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-base leading-relaxed mb-6 group-hover:text-gray-100 transition-colors duration-300">
                    {service.description}
                  </p>
                  <div className="flex items-center text-gold text-sm font-semibold group-hover:text-gold-light transition-all duration-300">
                    Learn More{" "}
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-red-900 via-maroon to-red-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(240,184,0,0.1) 25%, transparent 25%), 
                          linear-gradient(-45deg, rgba(240,184,0,0.1) 25%, transparent 25%), 
                          linear-gradient(45deg, transparent 75%, rgba(240,184,0,0.1) 75%), 
                          linear-gradient(-45deg, transparent 75%, rgba(240,184,0,0.1) 75%)`,
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Heading */}
          <div className="text-center mb-16">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-gold bg-opacity-20 text-gold text-sm font-semibold rounded-full mb-6 border border-gold border-opacity-30">
                GALLERY
              </span>
            </div>
            <h2
              className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="bg-gradient-to-r from-white via-gold-light to-white bg-clip-text text-transparent">
                Our Collection
              </span>
            </h2>
            <p
              className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Discover our exquisite range of sarees, each piece carefully
              selected for its beauty and quality
            </p>
            <div
              className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            ></div>
          </div>

          {/* SINGLE CENTERED IMAGE */}
          <div className="flex justify-center items-center mb-12">
            {galleryImages?.[0] ? (
              <div
                className="relative group overflow-hidden rounded-2xl shadow-xl transform transition-all duration-700 "
                style={{ width: "min(80vw, 400px)", height: "500px" }} // smaller, balanced size
              >
                <img
                  src={galleryImages[0]}
                  alt="Saree collection featured"
                  className="w-full h-full object-cover transition-transform duration-900 "
                  loading="lazy"
                />

                {/* Overlay dark */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0  transition-opacity duration-500"></div>

                {/* Overlay gold shimmer */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold via-transparent to-transparent opacity-0  transition-opacity duration-500"></div>
              </div>
            ) : (
              <div className="text-gray-300">No image available</div>
            )}
          </div>

          {/* CTA Button */}
          {/* <div
            className="text-center animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <button
              onClick={handleWhatsAppClick}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-gold via-gold-light to-gold text-maroon font-bold px-10 py-4 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-gold focus:ring-opacity-50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative z-10">View Full Collection</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            </button>
          </div> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-maroon relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold via-transparent to-transparent opacity-5"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-gold-light via-transparent to-transparent opacity-5"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-gold bg-opacity-20 text-gold text-sm font-semibold rounded-full mb-6 border border-gold border-opacity-30">
                WHY CHOOSE US
              </span>
            </div>
            <h2
              className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="bg-gradient-to-r from-white via-gold-light to-white bg-clip-text text-transparent">
                Why Choose Instasaree?
              </span>
            </h2>
            <div
              className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group flex items-center gap-5 p-8 bg-gradient-to-br from-maroon via-red-900 to-black rounded-2xl backdrop-blur-sm border border-gold border-opacity-20 hover:bg-opacity-90 hover:border-opacity-80 transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl relative overflow-hidden animate-slide-in-left"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-10 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000"></div>

                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold via-gold-light to-yellow-400 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <IconComponent className="w-6 h-6 text-maroon relative z-10" />
                  </div>
                  <p className="text-white text-base md:text-lg font-semibold leading-relaxed group-hover:text-gold-light transition-colors duration-300">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-maroon via-red-900 to-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-40 h-40 bg-gold opacity-10 rounded-full blur-2xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-60 h-60 bg-gold-light opacity-5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-gold bg-opacity-20 text-gold text-sm font-semibold rounded-full mb-6 border border-gold border-opacity-30">
                TESTIMONIALS
              </span>
            </div>
            <h2
              className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="bg-gradient-to-r from-white via-gold-light to-white bg-clip-text text-transparent">
                What Our Customers Say
              </span>
            </h2>
            <p
              className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Don't just take our word for it - hear from our satisfied
              customers
            </p>
            <div
              className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-black via-gray-900 to-maroon rounded-2xl backdrop-blur-sm border border-gold border-opacity-20 hover:bg-opacity-90 hover:border-opacity-80 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                {/* Card Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-10 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000"></div>

                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-10 h-10 text-gold group-hover:text-gold-light transition-colors duration-300 group-hover:scale-110 transition-transform" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-gold fill-current group-hover:text-gold-light transition-colors duration-300"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-200 mb-6 leading-relaxed italic text-lg group-hover:text-gray-100 transition-colors duration-300">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gold border-opacity-30 pt-6 group-hover:border-opacity-60 transition-colors duration-300">
                  <p className="font-bold text-gold text-lg group-hover:text-gold-light transition-colors duration-300">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400 text-base mt-1 group-hover:text-gray-300 transition-colors duration-300">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-maroon relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(240,184,0,0.5) 1px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-gold bg-opacity-20 text-gold text-sm font-semibold rounded-full mb-6 border border-gold border-opacity-30">
                CONTACT US
              </span>
            </div>
            <h2
              className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="bg-gradient-to-r from-white via-gold-light to-white bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p
              className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Ready to elevate your wardrobe? Contact us through any of these
              channels and let's create your perfect saree look.
            </p>
            <div
              className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* WhatsApp */}
            <button
              onClick={handleWhatsAppClick}
              className="group p-8 bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 relative overflow-hidden animate-slide-in-left"
              style={{ animationDelay: "0.4s" }}
              aria-label="Contact via WhatsApp"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000"></div>
              <MessageCircle className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10" />
              <h3 className="font-bold text-white mb-3 text-xl relative z-10">
                WhatsApp
              </h3>
              <p className="text-green-100 text-base font-medium relative z-10">
                +91 7999527007
              </p>
            </button>

            {/* Phone */}
            <button
              onClick={handlePhoneClick}
              className="group p-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 relative overflow-hidden animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
              aria-label="Call us"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000"></div>
              <Phone className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10" />
              <h3 className="font-bold text-white mb-3 text-xl relative z-10">
                Call Us
              </h3>
              <p className="text-blue-100 text-base font-medium relative z-10">
                +91 7999527007
              </p>
            </button>

            {/* Instagram */}
            <button
              onClick={handleInstagramClick}
              className="group p-8 bg-gradient-to-br from-pink-600 via-purple-700 to-purple-800 rounded-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50 relative overflow-hidden animate-slide-in-right"
              style={{ animationDelay: "0.7s" }}
              aria-label="Follow us on Instagram"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000"></div>
              <Instagram className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10" />
              <h3 className="font-bold text-white mb-3 text-xl relative z-10">
                Instagram
              </h3>
              <p className="text-pink-100 text-base font-medium relative z-10">
                @instasareeboutique
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-gold via-gold-light to-yellow-400 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(165,0,30,0.1) 10px, rgba(165,0,30,0.1) 20px)`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h3 className="font-playfair font-bold text-3xl md:text-4xl text-maroon mb-6 animate-fade-in-up">
              Stay Updated with Latest Collections
            </h3>
            <p
              className="text-maroon text-lg mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Be the first to know about new arrivals, exclusive offers, and
              styling tips
            </p>
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <button
                onClick={handleWhatsAppClick}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-maroon via-red-900 to-maroon text-white font-bold px-10 py-4 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-maroon focus:ring-opacity-50 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000"></div>
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                <span className="relative z-10">WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-b from-black to-gray-900 border-t border-gold border-opacity-30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>

        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6 animate-fade-in-up">
            <div className="relative group">
              <div className="w-16 h-16 bg-gradient-to-br from-gold via-gold-light to-yellow-400 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="text-maroon font-playfair font-bold text-lg relative z-10">
                  IS
                </span>
              </div>
              <div className="absolute inset-0 w-16 h-16 bg-gold rounded-full opacity-20 blur-lg animate-pulse"></div>
            </div>
          </div>
          <p
            className="text-gray-300 text-base mb-3 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            © 2025 Instasaree Boutique. All rights reserved.
          </p>
          <p
            className="text-gold text-sm font-medium animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Effortless Elegance | Saree, No Worries!
          </p>
        </div>
      </footer>

      
    </div>
  );
}

export default App;

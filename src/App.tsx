import React from "react";
import {
  Phone,
  Globe,
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
      description: "Personalized saree styling for every occasion.",
      color: "from-pink-100 to-pink-200",
    },
    {
      icon: Scissors,
      title: "Alterations",
      description: "Perfect fitting through expert tailoring.",
      color: "from-blue-100 to-blue-200",
    },
    {
      icon: Gift,
      title: "Gift Wrapping",
      description: "Elegant wrapping for special occasions.",
      color: "from-green-100 to-green-200",
    },
    {
      icon: Award,
      title: "Premium Collection",
      description: "Exclusive sarees from top designers.",
      color: "from-yellow-100 to-yellow-200",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "Absolutely stunning collection! The quality is exceptional and the styling advice was perfect for my wedding.",
    },
    {
      name: "Anita Patel",
      location: "Delhi",
      text: "Quick delivery and beautiful packaging. The saree was exactly as shown and fits perfectly!",
    },
    {
      name: "Meera Reddy",
      location: "Bangalore",
      text: "Professional service and gorgeous sarees. Instasaree has become my go-to boutique for all occasions.",
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

  return (
    <div className="min-h-screen bg-white text-gray-800 font-inter">
      {/* Hero Section */}
      <header className="py-20 text-center bg-maroon text-white">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto bg-gold text-maroon rounded-full flex items-center justify-center font-playfair font-bold text-xl shadow-sm">
              IS
            </div>
          </div>
          <h1 className="font-playfair font-bold text-4xl md:text-5xl mb-4">
            INSTASAREE
          </h1>
          <p className="text-lg mb-6 tracking-wide">
            EFFORTLESS ELEGANCE | SAREE, NO WORRIES!
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-2 bg-gold text-maroon px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Us
          </button>
        </div>
      </header>

      {/* About */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-playfair text-3xl font-bold text-maroon mb-4">
            About Instasaree
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            At Instasaree Boutique, we believe every woman deserves to feel
            elegant and confident. Our premium saree collection blends
            traditional craftsmanship with modern style, making you shine at
            every occasion.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold text-maroon mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center bg-gradient-to-br ${service.color}`}
                >
                  <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-white shadow">
                    <Icon className="w-7 h-7 text-maroon" />
                  </div>
                  <h3 className="font-semibold text-lg text-maroon mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold text-maroon mb-8">
            Our Collection
          </h2>
          {galleryImages?.[0] && (
            <div className="mx-auto w-full max-w-sm rounded-xl overflow-hidden shadow-md">
              <img
                src={galleryImages[0]}
                alt="Saree collection"
                className="w-full object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold text-maroon mb-8">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all bg-gradient-to-r from-gold/10 to-yellow-50"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold text-maroon mb-8">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-left bg-gradient-to-br from-gray-50 to-gray-100"
              >
                <p className="text-gray-700 mb-4 italic">“{t.text}”</p>
                <p className="font-semibold text-maroon">{t.name}</p>
                <p className="text-xs text-gray-500">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl font-bold text-maroon mb-6">
            Visit Us
          </h2>
          <div className="w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-md mb-6">
            <iframe
              title="Instasaree Boutique Location"
              src="https://www.google.com/maps?q=INSTASAREE,+near+apna+mart,+Avanti+Vihar,+sector+2,+Shankar+Nagar,+Raipur,+Chhattisgarh+492001&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=INSTASAREE,+near+apna+mart,+Avanti+Vihar,+sector+2,+Shankar+Nagar,+Raipur,+Chhattisgarh+492001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-maroon px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
          >
            <ChevronRight className="w-5 h-5" />
            Get Directions
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center text-gray-400">
        <p className="text-sm">
          © 2025 Instasaree Boutique. All rights reserved.
        </p>
        <p className="text-xs text-gold mt-1">
          Effortless Elegance | Saree, No Worries!
        </p>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <button
          onClick={handlePhoneClick}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </button>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=INSTASAREE,+near+apna+mart,+Avanti+Vihar,+sector+2,+Shankar+Nagar,+Raipur,+Chhattisgarh+492001"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gold text-maroon px-4 py-2 rounded-full shadow hover:bg-yellow-500 transition"
        >
          <Globe className="w-4 h-4" />
          Directions
        </a>
      </div>
    </div>
  );
}

export default App;

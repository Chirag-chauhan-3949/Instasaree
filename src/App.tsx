import React, { useEffect, useState } from "react";
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
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";

function getRoute() {
  return window.location.hash.replace(/^#/, "") || "/";
}

function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (route === "/privacy-policy") {
    return <PrivacyPolicy />;
  }

  if (route === "/terms-and-conditions") {
    return <TermsConditions />;
  }

  if (route === "/refund-policy") {
    return <RefundPolicy />;
  }

  if (route === "/shipping-policy") {
    return <ShippingPolicy />;
  }

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
      name: "Monalisa Mishra",
      text: "I truly appreciate the concept of ready-to-wear sarees. I had been looking for something like this for a long time and was delighted to find your collection. The designs are elegant and rich, and I would personally recommend them for the comfort and ease they offer, without the usual struggle of draping..",
    },
    {
      name: "Vidhi Kapoor",
      text: "Instasaree Boutique has an amazing collection with beautiful designs and vibrant colors for ready to wear sarees.The fabric quality is excellent and looks even better in person. It’s affordable and delivers on time. Truly a great shopping experience I highly recommended! 🌸",
    },
    {
      name: "Rehana Parveen",
      text: "Nice Colour combination we got.And the best part is,i don't know how to wear a saree,it's really saves my time .🌷",
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center">
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
                <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
                <p className="font-semibold text-maroon">{t.name}</p>
                {/* <p className="text-xs text-gray-500">{t.location}</p> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
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

      {/* Enhanced Footer */}
      <Footer />

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
        <button
          onClick={() => window.open("https://www.instagram.com/p/DQS_OAgDFct/", "_blank")}
          className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-full shadow hover:bg-pink-700 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 4a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zm5.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"
            />
          </svg>
          Instagram
        </button>

      </div>
    </div>
  );
}

export default App;

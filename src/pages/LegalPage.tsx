import React from "react";
import { ArrowLeft } from "lucide-react";
import Footer from "../components/Footer";

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-inter flex flex-col">
      {/* Header */}
      <header className="py-14 text-center bg-maroon text-white">
        <div className="container mx-auto px-4">
          <a
            href="#/"
            className="inline-flex items-center gap-2 text-gold hover:text-yellow-300 transition mb-6 text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
          <h1 className="font-playfair font-bold text-3xl md:text-4xl mb-2">{title}</h1>
          <p className="text-sm text-gold tracking-wide">Last Updated: {lastUpdated}</p>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10 leading-relaxed space-y-6">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default LegalPage;

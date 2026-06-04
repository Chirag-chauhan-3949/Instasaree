import React from "react";
import LegalPage from "./LegalPage";

const headingClass = "font-playfair text-xl font-bold text-maroon mt-6 mb-2";

function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="June 2026">
      <p className="text-gray-700">
        Welcome to InstaSaree ("we," "our," or "us"). We value your privacy and are
        committed to protecting your personal information.
      </p>

      <div>
        <h2 className={headingClass}>Information We Collect</h2>
        <p className="text-gray-700">
          When you use our website, place an order, or contact us, we may collect:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li>Name</li>
          <li>Mobile number</li>
          <li>Email address</li>
          <li>Shipping and billing address</li>
          <li>Payment-related information (processed securely through payment gateways)</li>
          <li>Order history</li>
          <li>Device and browser information</li>
        </ul>
      </div>

      <div>
        <h2 className={headingClass}>How We Use Your Information</h2>
        <p className="text-gray-700">We use your information to:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li>Process and fulfill orders</li>
          <li>Deliver purchased products</li>
          <li>Provide customer support</li>
          <li>Send order updates and notifications</li>
          <li>Improve our website and customer experience</li>
          <li>Comply with legal obligations</li>
        </ul>
      </div>

      <div>
        <h2 className={headingClass}>Sharing of Information</h2>
        <p className="text-gray-700">
          We do not sell, rent, or trade your personal information. Your information may be
          shared only with:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li>Delivery and logistics partners</li>
          <li>Payment gateway providers</li>
          <li>Government authorities when required by law</li>
        </ul>
      </div>

      <div>
        <h2 className={headingClass}>Data Security</h2>
        <p className="text-gray-700">
          We implement reasonable security measures to protect your personal information from
          unauthorized access, misuse, or disclosure.
        </p>
      </div>

      <div>
        <h2 className={headingClass}>Cookies</h2>
        <p className="text-gray-700">
          Our website may use cookies and similar technologies to improve browsing experience
          and website functionality.
        </p>
      </div>

      <div>
        <h2 className={headingClass}>Third-Party Services</h2>
        <p className="text-gray-700">
          We may use third-party services for payments, shipping, analytics, and communication.
          These providers have their own privacy policies.
        </p>
      </div>

      <div>
        <h2 className={headingClass}>Your Rights</h2>
        <p className="text-gray-700">
          You may request access, correction, or deletion of your personal information by
          contacting us.
        </p>
      </div>

      <div>
        <h2 className={headingClass}>Contact Us</h2>
        <p className="text-gray-700">
          <span className="font-semibold text-maroon">InstaSaree</span>
          <br />
          Address: Near Apna Mart, Avanti Vihar, Sector 2, Shankar Nagar, Raipur, Chhattisgarh
          492001
          <br />
          Phone:{" "}
          <a href="tel:+917999527007" className="text-maroon hover:underline">
            079995 27007
          </a>
          <br />
          Email:{" "}
          <a href="mailto:dikshakhatri77@gmail.com" className="text-maroon hover:underline">
            dikshakhatri77@gmail.com
          </a>
        </p>
      </div>
    </LegalPage>
  );
}

export default PrivacyPolicy;

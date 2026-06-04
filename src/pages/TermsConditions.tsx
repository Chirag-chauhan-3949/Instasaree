import React from "react";
import LegalPage from "./LegalPage";

const headingClass = "font-playfair text-xl font-bold text-maroon mt-6 mb-2";

function TermsConditions() {
  return (
    <LegalPage title="Terms & Conditions" lastUpdated="June 2026">
      <p className="text-gray-700">
        Welcome to InstaSaree. By accessing or using our website, you agree to these Terms &amp;
        Conditions.
      </p>

      <div>
        <h2 className={headingClass}>Products</h2>
        <p className="text-gray-700">
          We strive to display product images, colors, and descriptions accurately. However,
          slight variations may occur due to screen settings, lighting, and photography.
        </p>
      </div>

      <div>
        <h2 className={headingClass}>Pricing</h2>
        <p className="text-gray-700">
          All prices are listed in Indian Rupees (INR) and are subject to change without prior
          notice.
        </p>
      </div>

      <div>
        <h2 className={headingClass}>Orders</h2>
        <p className="text-gray-700">We reserve the right to:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li>Accept or reject any order</li>
          <li>Cancel orders due to pricing errors, stock unavailability, or suspected fraudulent activity</li>
          <li>Limit quantities purchased per customer</li>
        </ul>
      </div>

      <div>
        <h2 className={headingClass}>Payments</h2>
        <p className="text-gray-700">
          Payments are processed through secure payment gateways. We do not store your payment
          card details.
        </p>
      </div>

      <div>
        <h2 className={headingClass}>Intellectual Property</h2>
        <p className="text-gray-700">
          All content including images, logos, product descriptions, graphics, and website
          content is the property of InstaSaree and may not be copied or reproduced without
          permission.
        </p>
      </div>

      <div>
        <h2 className={headingClass}>User Responsibilities</h2>
        <p className="text-gray-700">You agree not to:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li>Use the website for unlawful purposes</li>
          <li>Submit false information</li>
          <li>Interfere with website operations</li>
        </ul>
      </div>

      <div>
        <h2 className={headingClass}>Limitation of Liability</h2>
        <p className="text-gray-700">
          InstaSaree shall not be liable for indirect, incidental, or consequential damages
          arising from the use of our website or products.
        </p>
      </div>

      <div>
        <h2 className={headingClass}>Governing Law</h2>
        <p className="text-gray-700">
          These Terms &amp; Conditions shall be governed by the laws of India.
        </p>
      </div>

      <div>
        <h2 className={headingClass}>Contact Information</h2>
        <p className="text-gray-700">
          <span className="font-semibold text-maroon">InstaSaree</span>
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
          <br />
          Address: Near Apna Mart, Avanti Vihar, Sector 2, Shankar Nagar, Raipur, Chhattisgarh
          492001
        </p>
      </div>
    </LegalPage>
  );
}

export default TermsConditions;

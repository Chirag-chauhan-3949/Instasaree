import React from "react";
import LegalPage from "./LegalPage";

const headingClass = "font-playfair text-xl font-bold text-maroon mt-6 mb-2";

function ShippingPolicy() {
  return (
    <LegalPage title="Shipping & Delivery Policy" lastUpdated="June 2026">
      <p className="text-gray-700">InstaSaree ships across India.</p>

      <div>
        <h2 className={headingClass}>Order Processing</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li>Orders are typically processed within 1–3 business days.</li>
          <li>
            Processing times may be longer during festivals, sales, or peak
            seasons.
          </li>
        </ul>
      </div>

      <div>
        <h2 className={headingClass}>Shipping Time</h2>
        <p className="text-gray-700">Estimated delivery timelines:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li>Metro Cities: 3–7 business days</li>
          <li>Other Locations: 5–10 business days</li>
          <li>Remote Areas: 7–15 business days</li>
        </ul>
        <p className="text-gray-700 mt-2">
          Delivery timelines are estimates and may vary due to courier partner
          operations, weather conditions, or unforeseen circumstances.
        </p>
      </div>

      <div>
        <h2 className={headingClass}>Shipping Charges</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li>
            Shipping charges, if applicable, will be displayed during checkout.
          </li>
          <li>Promotional free shipping offers may be available from time to time.</li>
        </ul>
      </div>

      <div>
        <h2 className={headingClass}>Order Tracking</h2>
        <p className="text-gray-700">
          Customers will receive tracking details via email, SMS, or WhatsApp once
          the order is shipped.
        </p>
      </div>

      <div>
        <h2 className={headingClass}>Delivery Issues</h2>
        <p className="text-gray-700">
          If your order is delayed, lost, or delivered in damaged condition, please
          contact us immediately.
        </p>
      </div>

      <div>
        <h2 className={headingClass}>Contact Information</h2>
        <p className="text-gray-700">
          <span className="font-semibold text-maroon">InstaSaree</span>
          <br />
          Address: Near Apna Mart, Avanti Vihar, Sector 2, Shankar Nagar, Raipur,
          Chhattisgarh 492001
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

export default ShippingPolicy;

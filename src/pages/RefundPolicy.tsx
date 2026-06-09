import React from "react";
import LegalPage from "./LegalPage";

const headingClass = "font-playfair text-xl font-bold text-maroon mt-6 mb-2";

function RefundPolicy() {
  return (
    <LegalPage title="Cancellation, Return & Refund Policy" lastUpdated="June 2026">
      <p className="text-gray-700">
        At InstaSaree, customer satisfaction is important to us.
      </p>

      <div>
        <h2 className={headingClass}>1. Order Cancellation</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li>Orders can be cancelled within 12 hours of placing the order.</li>
          <li>
            Once an order has been processed or shipped, cancellation requests may
            not be accepted.
          </li>
        </ul>
      </div>

      <div>
        <h2 className={headingClass}>2. Return Eligibility</h2>
        <p className="text-gray-700">
          We accept returns only under the following conditions:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li>Product received is damaged</li>
          <li>Wrong product delivered</li>
          <li>Product has a manufacturing defect</li>
        </ul>
        <p className="text-gray-700 mt-2">
          Customers must notify us within 12 hours of delivery with clear
          photo/video proof.
        </p>
      </div>

      <div>
        <h2 className={headingClass}>3. Return Conditions</h2>
        <p className="text-gray-700">To be eligible for a return:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li>The product must be unused and unwashed</li>
          <li>All original tags, packaging, and accessories must be intact</li>
          <li>Returns not meeting these conditions may be rejected</li>
        </ul>
      </div>

      <div>
        <h2 className={headingClass}>4. How to Initiate a Return</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li>Contact us via WhatsApp or Email within 12 hours of delivery</li>
          <li>Share your Order ID and reason for return along with proof</li>
          <li>
            Upon approval, you will receive return authorization and instructions
          </li>
          <li>Securely pack the item in its original packaging</li>
          <li>Ship the product back as instructed</li>
        </ul>
      </div>

      <div>
        <h2 className={headingClass}>5. Refund Process</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li>
            Refunds are processed within 5–7 business days after we receive and
            inspect the returned item
          </li>
          <li>Refunds are credited to the UPI method</li>
        </ul>
      </div>

      <div>
        <h2 className={headingClass}>6. Non-Returnable &amp; Non-Refundable Cases</h2>
        <p className="text-gray-700">
          The following are not eligible for return or refund:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li>Products damaged due to customer misuse</li>
          <li>Customized or altered products</li>
          <li>Items returned without original packaging</li>
          <li>
            Shipping charges and Product amount will not be refunded if the
            returned item is not received by us
          </li>
        </ul>
      </div>

      <div>
        <h2 className={headingClass}>7. Contact Us</h2>
        <p className="text-gray-700">
          For any return or refund queries:
          <br />
          Email:{" "}
          <a href="mailto:dikshakhatri77@gmail.com" className="text-maroon hover:underline">
            dikshakhatri77@gmail.com
          </a>
          <br />
          Phone:{" "}
          <a href="tel:+917999527007" className="text-maroon hover:underline">
            079995 27007
          </a>
        </p>
      </div>

      <p className="text-gray-700">
        We reserve the right to update this policy at any time without prior notice.
      </p>
    </LegalPage>
  );
}

export default RefundPolicy;

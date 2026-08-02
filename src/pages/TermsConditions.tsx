import { Link } from "react-router-dom";
import LegalPage from "../components/LegalPage";
import { site } from "../config/site";

export default function TermsConditions() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="Welcome to ZARQ. These Terms & Conditions govern your use of our website and purchases made through our official WhatsApp Business account. By accessing our website or placing an order with us, you agree to these terms."
      sections={[
        {
          heading: "Website Usage",
          body: (
            <>
              <p>
                The ZARQ website is intended to provide information about our
                brand, products, and policies. At this time, our website does
                not support online shopping or checkout.
              </p>

              <p className="mt-4">
                All orders are placed and confirmed exclusively through our
                official WhatsApp Business account.
              </p>
            </>
          ),
        },
        {
          heading: "Placing an Order",
          body: (
            <>
              <p>
                To place an order, simply contact us on WhatsApp using our
                official business number.
              </p>

              <div className="mt-4">
                <a
                  href="https://wa.me/923107843983?text=Hi%20ZARQ!%20I'm%20interested%20in%20your%20jewelry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold underline underline-offset-4"
                >
                  Chat with us on WhatsApp
                </a>
              </div>

              <p className="mt-4">
                During the ordering process, we will confirm:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Product availability</li>
                <li>Product price</li>
                <li>Delivery address</li>
                <li>Shipping charges (if applicable)</li>
                <li>Estimated delivery time</li>
                <li>Payment method</li>
              </ul>

              <p className="mt-4">
                An order is considered confirmed only after our team has
                acknowledged and accepted it.
              </p>
            </>
          ),
        },
        {
          heading: "Pricing",
          body: (
            <>
              <p>
                All prices are listed in Pakistani Rupees (PKR).
              </p>

              <p className="mt-4">
                Prices may change without prior notice. Promotional offers are
                valid only for the specified duration.
              </p>

              <p className="mt-4">
                While we strive for accuracy, pricing errors may occasionally
                occur. If an incorrect price is displayed, we will inform you
                before confirming your order.
              </p>
            </>
          ),
        },
        {
          heading: "Payment",
          body: (
            <>
              <p>
                Payment methods will be communicated during the WhatsApp order
                process.
              </p>

              <p className="mt-4">
                Depending on your location and order, we may offer:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Cash on Delivery (COD)</li>
                <li>Bank Transfer</li>
                <li>Other approved payment methods</li>
              </ul>

              <p className="mt-4">
                We reserve the right to request advance payment for certain
                orders where necessary.
              </p>
            </>
          ),
        },
        {
          heading: "Shipping & Delivery",
          body: (
            <>
              <p>
                We currently deliver across Pakistan through trusted courier
                partners.
              </p>

              <p className="mt-4">
                Delivery times are estimates and may vary depending on your
                location, courier operations, weather conditions, or public
                holidays.
              </p>

              <p className="mt-4">
                Please read our{" "}
                <Link
                  to="/shipping-policy"
                  className="text-gold underline underline-offset-4"
                >
                  Shipping Policy
                </Link>{" "}
                for complete shipping information.
              </p>
            </>
          ),
        },
        {
          heading: "Returns & Exchanges",
          body: (
            <>
              <p>
                If you receive a damaged, defective, or incorrect product,
                please contact us as soon as possible so we can assist you.
              </p>

              <p className="mt-4">
                Returns and exchanges are handled according to our{" "}
                <Link
                  to="/refund-policy"
                  className="text-gold underline underline-offset-4"
                >
                  Refund & Exchange Policy
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Product Information",
          body: (
            <>
              <p>
                We make every effort to accurately display our products through
                photographs and descriptions.
              </p>

              <p className="mt-4">
                Slight variations in color, texture, or finish may occur due to
                photography, lighting conditions, or differences in device
                screens.
              </p>
            </>
          ),
        },
        {
          heading: "Customer Responsibilities",
          body: (
            <>
              <p>
                Customers are responsible for providing accurate contact
                information and delivery details.
              </p>

              <p className="mt-4">
                ZARQ is not responsible for delays or failed deliveries caused
                by incorrect information provided by the customer.
              </p>
            </>
          ),
        },
        {
          heading: "Intellectual Property",
          body: (
            <>
              <p>
                All content on the ZARQ website and our official social media
                pages, including our brand name, logo, product photographs,
                graphics, text, and website design, is owned by ZARQ unless
                otherwise stated.
              </p>

              <p className="mt-4">
                No content may be copied, reproduced, modified, distributed, or
                used commercially without prior written permission from ZARQ.
              </p>
            </>
          ),
        },
        {
          heading: "Limitation of Liability",
          body: (
            <>
              <p>
                ZARQ is not liable for delays or losses resulting from courier
                services, natural disasters, internet failures, government
                actions, or circumstances beyond our reasonable control.
              </p>

              <p className="mt-4">
                Our liability shall never exceed the purchase price of the
                product involved in the order.
              </p>
            </>
          ),
        },
        {
          heading: "Changes to These Terms",
          body: (
            <>
              <p>
                We may update these Terms & Conditions from time to time to
                reflect changes to our business practices or legal
                requirements.
              </p>

              <p className="mt-4">
                Updated versions will always be published on this page with the
                latest revision date.
              </p>
            </>
          ),
        },
        {
          heading: "Contact Us",
          body: (
            <>
              <p>
                If you have any questions about these Terms & Conditions or wish
                to place an order, we're happy to help.
              </p>

              <div className="mt-4 space-y-3">
                <p>
                  <strong>WhatsApp:</strong>{" "}
                  <a
                    href="https://wa.me/923107843983?text=Hi%20ZARQ!%20I'm%20interested%20in%20your%20jewelry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold underline underline-offset-4"
                  >
                    +92 310 7843983
                  </a>
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="text-gold underline underline-offset-4"
                  >
                    {site.email}
                  </a>
                </p>

                <p>
                  You can also visit our{" "}
                  <Link
                    to="/contact"
                    className="text-gold underline underline-offset-4"
                  >
                    Contact Page
                  </Link>{" "}
                  for additional ways to reach us.
                </p>
              </div>
            </>
          ),
        },
      ]}
    />
  );
}
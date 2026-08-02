import { Link } from "react-router-dom";
import LegalPage from "../components/LegalPage";
import { site } from "../config/site";

export default function ShippingPolicy() {
  return (
    <LegalPage
      title="Shipping Policy"
      intro="At ZARQ, we aim to make your shopping experience smooth from order confirmation to delivery. This Shipping Policy explains how we process and deliver orders across Pakistan."
      sections={[
        {
          heading: "How to Place an Order",
          body: (
            <>
              <p>
                ZARQ currently accepts orders exclusively through our official
                WhatsApp Business account. Our website is for informational
                purposes only and does not support online ordering.
              </p>

              <div className="mt-4">
                <a
                  href="https://wa.me/923107843983?text=Hi%20ZARQ!%20I'm%20interested%20in%20your%20jewelry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold underline underline-offset-4"
                >
                  Place Your Order on WhatsApp
                </a>
              </div>
            </>
          ),
        },
        {
          heading: "Delivery Areas",
          body: (
            <>
              <p>
                We currently deliver to customers across Pakistan through
                trusted courier partners.
              </p>

              <p className="mt-4">
                If your location falls outside a courier's service area, we'll
                let you know before confirming your order.
              </p>
            </>
          ),
        },
        {
          heading: "Order Processing",
          body: (
            <>
              <p>
                Once your order is confirmed, we carefully inspect and pack your
                jewelry before handing it over to our courier partner.
              </p>

              <p className="mt-4">
                Most orders are processed within <strong>1–2 business days</strong>.
                During busy periods or promotional campaigns, processing may
                take slightly longer.
              </p>
            </>
          ),
        },
        {
          heading: "Estimated Delivery Time",
          body: (
            <>
              <p>
                Estimated delivery times after dispatch are:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Major Cities: 2–4 business days</li>
                <li>Other Cities & Towns: 3–7 business days</li>
                <li>Remote Areas: Delivery times may vary depending on courier availability.</li>
              </ul>

              <p className="mt-4">
                These are estimated timelines and may occasionally vary due to
                courier operations or unforeseen circumstances.
              </p>
            </>
          ),
        },
        {
          heading: "Shipping Charges",
          body: (
            <>
              <p>
                Shipping charges, if applicable, are shared with you during the
                WhatsApp ordering process before your order is confirmed.
              </p>

              <p className="mt-4">
                From time to time, ZARQ may offer free shipping as part of
                promotional campaigns.
              </p>
            </>
          ),
        },
        {
          heading: "Order Tracking",
          body: (
            <>
              <p>
                Once your order has been dispatched, we'll provide a tracking
                number whenever it is available from our courier partner.
              </p>

              <p className="mt-4">
                If you have questions about your shipment, feel free to contact
                us through WhatsApp.
              </p>
            </>
          ),
        },
        {
          heading: "Delivery Delays",
          body: (
            <>
              <p>
                While we do our best to ensure timely delivery, delays can occur
                due to:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Public holidays</li>
                <li>Extreme weather conditions</li>
                <li>Courier operational delays</li>
                <li>Political or regional disruptions</li>
                <li>Incorrect delivery information provided by the customer</li>
              </ul>

              <p className="mt-4">
                We appreciate your patience in such situations and will assist
                you in tracking your shipment.
              </p>
            </>
          ),
        },
        {
          heading: "Customer Responsibilities",
          body: (
            <>
              <p>
                To avoid delivery issues, customers are responsible for
                providing:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Correct recipient name</li>
                <li>Complete delivery address</li>
                <li>Accurate phone number</li>
                <li>Availability to receive the parcel</li>
              </ul>

              <p className="mt-4">
                ZARQ is not responsible for failed deliveries caused by
                incomplete or incorrect information provided by the customer.
              </p>
            </>
          ),
        },
        {
          heading: "Damaged or Missing Packages",
          body: (
            <>
              <p>
                If your package arrives damaged or appears to have missing
                items, please contact us within <strong>48 hours</strong> of
                receiving your order.
              </p>

              <p className="mt-4">
                Please include clear photographs of the package and the product
                so we can investigate and assist you promptly.
              </p>
            </>
          ),
        },
        {
          heading: "Need Help?",
          body: (
            <>
              <p>
                If you have any questions regarding shipping or your order,
                we're always happy to help.
              </p>

              <div className="mt-4 space-y-3">
                <p>
                  <strong>WhatsApp:</strong>{" "}
                  <a
                    href="https://wa.me/923107843983?text=Hi%20ZARQ!%20I%20have%20a%20question%20about%20shipping."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold underline underline-offset-4"
                  >
                    +92 310 7843983
                  </a>
                </p>

                {/* <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="text-gold underline underline-offset-4"
                  >
                    {site.email}
                  </a>
                </p> */}

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
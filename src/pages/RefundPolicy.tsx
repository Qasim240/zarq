import { Link } from "react-router-dom";
import LegalPage from "../components/LegalPage";
import { site } from "../config/site";

export default function RefundPolicy() {
  return (
    <LegalPage
      title="Refund & Exchange Policy"
      intro="Your satisfaction is important to us. If there's an issue with your order, we'll do our best to make it right. Please read our refund and exchange policy below before placing your order."
      sections={[
        {
          heading: "Our Promise",
          body: (
            <>
              <p>
                At ZARQ, every order is carefully inspected before it is packed
                and shipped. If you receive a damaged, defective, or incorrect
                item, we'll work with you to resolve the issue as quickly as
                possible.
              </p>
            </>
          ),
        },
        {
          heading: "Eligible for Refund or Exchange",
          body: (
            <>
              <p>
                You may be eligible for a refund or exchange if:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>You received the wrong product.</li>
                <li>Your product arrived damaged during delivery.</li>
                <li>Your product has a manufacturing defect.</li>
              </ul>

              <p className="mt-4">
                Please contact us within <strong>48 hours</strong> of receiving
                your parcel and include clear photos or videos of the issue.
              </p>
            </>
          ),
        },
        {
          heading: "Return Conditions",
          body: (
            <>
              <p>
                To qualify for a refund or exchange, the product must:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Be unused and unworn.</li>
                <li>Be returned in its original packaging.</li>
                <li>Include all accessories or items received with the order.</li>
                <li>Show no signs of damage caused after delivery.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "Items Not Eligible for Refund",
          body: (
            <>
              <p>
                Unfortunately, we cannot accept refunds or exchanges if:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>The product has been worn or used.</li>
                <li>
                  The product has been exposed to perfumes, deodorants,
                  cosmetics, lotions, chemicals, cleaning agents, or similar
                  substances.
                </li>
                <li>
                  The product has been scratched, bent, broken, or damaged due
                  to improper handling.
                </li>
                <li>
                  The return request is made after the allowed reporting period.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "Waterproof & Acid Resistant Guarantee",
          body: (
            <>
              <p>
                Selected ZARQ products are clearly marked as{" "}
                <strong>Waterproof</strong> or{" "}
                <strong>Acid Resistant</strong>.
              </p>

              <p className="mt-4">
                These products are covered by our <strong>100% Money-Back Guarantee</strong> if
                they fail to perform as advertised under normal use and in
                accordance with our care instructions.
              </p>

              <p className="mt-4">
                This guarantee does not apply if the product has been damaged
                due to misuse, physical force, intentional damage, or exposure
                to chemicals that are specifically listed as excluded in the
                product care instructions.
              </p>
            </>
          ),
        },
        {
          heading: "Refund Process",
          body: (
            <>
              <p>
                Once we receive and inspect the returned product, we'll notify
                you of the outcome.
              </p>

              <p className="mt-4">
                If your refund is approved, it will be processed using the
                original payment method whenever possible or through another
                mutually agreed method.
              </p>
            </>
          ),
        },
        {
          heading: "Need Assistance?",
          body: (
            <>
              <p>
                If you believe your order qualifies for a refund or exchange,
                contact us through WhatsApp and we'll guide you through the
                process.
              </p>

              <div className="mt-4 space-y-3">
                <p>
                  <strong>WhatsApp:</strong>{" "}
                  <a
                    href={site.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold underline underline-offset-4"
                  >
                    {site.whatsappNumber}
                  </a>
                </p>

                {site.email && (
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href={`mailto:${site.email}`}
                      className="text-gold underline underline-offset-4"
                    >
                      {site.email}
                    </a>
                  </p>
                )}

                <p>
                  You can also visit our{" "}
                  <Link
                    to="/contact"
                    className="text-gold underline underline-offset-4"
                  >
                    Contact Page
                  </Link>
                  .
                </p>
              </div>
            </>
          ),
        },
      ]}
    />
  );
}
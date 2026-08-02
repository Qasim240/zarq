import { Link } from "react-router-dom";
import LegalPage from "../components/LegalPage";
import { site } from "../config/site";

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="At ZARQ, your privacy matters to us. This Privacy Policy explains what information we collect, why we collect it, and how we protect it when you interact with us through our website, Facebook, Instagram, or WhatsApp."
      sections={[
        {
          heading: "Information We Collect",
          body: (
            <>
              <p>
                When you place an order or contact ZARQ, we may collect the
                following information:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Your full name</li>
                <li>Mobile phone number</li>
                <li>Delivery address</li>
                <li>Email address (if provided)</li>
                <li>Order details and purchase history</li>
                <li>
                  Messages you send us through Facebook, Instagram, WhatsApp, or
                  email
                </li>
              </ul>

              <p className="mt-4">
                We only collect information that is necessary to process your
                order and provide customer support.
              </p>
            </>
          ),
        },
        {
          heading: "How We Use Your Information",
          body: (
            <>
              <p>Your information is used to:</p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Process and deliver your orders</li>
                <li>Respond to your questions and support requests</li>
                <li>Share order confirmations and delivery updates</li>
                <li>Improve our products and customer experience</li>
                <li>Prevent fraudulent or unauthorized activities</li>
              </ul>

              <p className="mt-4">
                We do not sell, rent, or trade your personal information to
                anyone.
              </p>
            </>
          ),
        },
        {
          heading: "Cookies & Website Analytics",
          body: (
            <>
              <p>
                Our website may use cookies and similar technologies to improve
                your browsing experience and understand how visitors use our
                website.
              </p>

              <p className="mt-4">
                Cookies help us remember preferences, measure website
                performance, and improve our services. You can disable cookies
                through your browser settings at any time.
              </p>
            </>
          ),
        },
        {
          heading: "Third-Party Services",
          body: (
            <>
              <p>
                To operate our business efficiently, we work with trusted
                third-party services that may process limited customer
                information when necessary.
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Courier and delivery partners</li>
                <li>Meta platforms (Facebook & Instagram)</li>
                <li>WhatsApp Business</li>
                <li>Email service providers</li>
                <li>Website hosting providers</li>
              </ul>

              <p className="mt-4">
                These providers receive only the information required to perform
                their services and are responsible for handling data according
                to their own privacy policies.
              </p>
            </>
          ),
        },
        {
          heading: "Data Security",
          body: (
            <>
              <p>
                We take reasonable administrative and technical measures to
                protect your personal information against unauthorized access,
                loss, misuse, or disclosure.
              </p>

              <p className="mt-4">
                While we strive to protect your information, no website or
                method of electronic transmission can guarantee absolute
                security.
              </p>
            </>
          ),
        },
        {
          heading: "Data Retention",
          body: (
            <>
              <p>
                We retain your information only for as long as necessary to
                complete your orders, provide customer support, comply with
                applicable legal obligations, and maintain business records.
              </p>
            </>
          ),
        },
        {
          heading: "Your Rights",
          body: (
            <>
              <p>
                You may contact us at any time to:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Request access to your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information where applicable</li>
                <li>Ask questions about how your information is used</li>
              </ul>
            </>
          ),
        },
        {
          heading: "Changes to This Privacy Policy",
          body: (
            <>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our business or legal requirements. Any updates will
                be published on this page with the latest revision date.
              </p>
            </>
          ),
        },
        {
          heading: "Contact Us",
          body: (
            <p>
              If you have any questions about this Privacy Policy or how we
              handle your personal information, please contact us at{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-gold underline underline-offset-4"
              >
                {site.email}
              </a>{" "}
              or visit our{" "}
              <Link
                to="/contact"
                className="text-gold underline underline-offset-4"
              >
                Contact Page
              </Link>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
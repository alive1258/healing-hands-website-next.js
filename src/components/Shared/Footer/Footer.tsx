"use client";

import Link from "next/link";
import { MapPin, Mail, PhoneCall, ArrowUp } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "../Logo/Logo";

/* ================= CONSTANTS ================= */
const CONTACT_PHONE = "+1 234 567 090";
const CONTACT_EMAIL = "info@healinghands.com";
const OFFICE_ADDRESS = "123 Wellness Street, California, USA";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/#experiences" },
  { label: "Packages", href: "/#packages" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const OUR_SERVICES = [
  { label: "Massage Therapy", href: "/#experiences" },
  { label: "Facial Care", href: "/#experiences" },
  { label: "Body Treatments", href: "/#experiences" },
  { label: "Wellness Programs", href: "/#experiences" },
  { label: "Gift Cards", href: "/#gift-card" },
];

// TODO: swap in the spa's real social profile URLs
const SOCIAL_LINKS = [
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
];

/* ================= COMPONENT ================= */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-900 text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* BRAND */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <Link href="/#home" className="inline-flex">
                <Logo variant="light" size="lg" />
              </Link>
              <p className="mt-4 text-brand-100/70 text-sm max-w-sm leading-relaxed">
                Rejuvenate your body, calm your mind, and uplift your soul.
                Healing Hands brings personalized wellness therapies to
                everyone who needs a moment of true relaxation.
              </p>
            </div>

            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={href === "#" ? (e) => e.preventDefault() : undefined}
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 text-brand-100/70 hover:bg-brand-600 hover:text-white transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* LINK COLUMNS */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="space-y-5">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-brand-100/70 hover:text-gold-400 text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white">
                Our Services
              </h3>
              <ul className="space-y-3">
                {OUR_SERVICES.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-brand-100/70 hover:text-gold-400 text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 space-y-5 sm:col-span-1">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`tel:${CONTACT_PHONE.replace(/[^+\d]/g, "")}`}
                    className="flex items-start gap-2.5 text-brand-100/70 hover:text-gold-400 text-sm transition-colors duration-300"
                  >
                    <PhoneCall size={15} className="mt-0.5 shrink-0" />
                    {CONTACT_PHONE}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-start gap-2.5 text-brand-100/70 hover:text-gold-400 text-sm transition-colors duration-300"
                  >
                    <Mail size={15} className="mt-0.5 shrink-0" />
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-brand-100/70 text-sm">
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  {OFFICE_ADDRESS}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-brand-100/60 text-center md:text-left">
            © {currentYear}{" "}
            <span className="text-gold-400">Healing Hands Spa</span>. All
            rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              href="/privacy-policy"
              className="text-xs text-brand-100/60 hover:text-gold-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="text-xs text-brand-100/60 hover:text-gold-400 transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-100/60 hover:text-gold-400 transition-all group"
          >
            Back to top
            <ArrowUp size={12} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

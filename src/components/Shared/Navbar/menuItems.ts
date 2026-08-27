export interface MenuItem {
  display: string;
  href: string;
  children?: MenuItem[];
}

export const MENU_ITEMS: MenuItem[] = [
  { display: "Home", href: "/" },
  { display: "About Us", href: "/about" },
  { display: "Services", href: "/#experiences" },
  { display: "Packages", href: "/#packages" },
  {
    display: "Pages",
    href: "/privacy-policy",
    children: [
      { display: "Privacy Policy", href: "/privacy-policy" },
      { display: "Terms & Conditions", href: "/terms-conditions" },
      { display: "Refund Policy", href: "/refund-policy" },
      { display: "Contact Us", href: "/contact" },
    ],
  },
  { display: "Blog", href: "/blog" },
];

export const CONTACT_PHONE = "+1 234 567 090";
export const CONTACT_EMAIL = "info@healinghands.com";

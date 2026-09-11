/**
 * Central, editable site configuration.
 * Replace the placeholder values below with real details when available.
 */
export const SITE = {
  name: "Rumana Rab Holistic Yoga",
  tagline: "Holistic yoga, breath and nutrition guidance for a calmer, stronger everyday life.",
  contact: {
    address:
      "Suite #103, Office Court Building, Next to Oud Metha Metro Station, Dubai, U.A.E, P.O Box - 128614",
    phone: "+971502132529 | +97143967648",
    email: "info@rumanaholisticyoga.com",
  },
  social: {
    instagram: "https://www.instagram.com/rumanayoga/",
    facebook: "https://www.facebook.com/RumanaRabHolisticYoga/",
    x: "https://x.com/RumanaYoga",
    whatsapp:
      "https://api.whatsapp.com/send/?phone=971502132529&text&type=phone_number&app_absent=0",
    linkedin: "https://www.linkedin.com/company/rumana-rab-holistic-yoga/?utm_source=chatgpt.com",
  },
  developer: {
    name: "Zar Solutions",
    url: "https://www.zarsolutions.co.in/",
    logo: "https://www.zarsolutions.co.in/assets/logo-DUBK7VPE.png",
  },
};

export const MAIN_NAV = [
  { label: "Home", to: "/" },
  { label: "Program", to: "/classes" },
  { label: "About", to: "/about" },
  { label: "Trainers", to: "/trainers" },
  { label: "Schedule", to: "/schedule" },
  { label: "Packages", to: "/packages" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

export const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "Trainers", to: "/trainers" },
  { label: "Schedule", to: "/schedule" },
  { label: "Packages", to: "/packages" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

import { BusinessConfig } from "./types";

export const businessConfig: BusinessConfig = {
  brandName: "Your Web Page",
  legalEntity: "NightTech Service Inc.",
  tradeNotice: "Your Web Page is a trade name of NightTech Service Inc.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL!,
  email: "hello@yourwebpage.ca",
  emailLink: "mailto:hello@yourwebpage.ca",
  phone: "902-629-9691",
  phoneLink: "tel:+19026299691",
  address: {
    street: "44 Beach Grove Road, Unit 3",
    city: "Charlottetown",
    province: "PE",
    postalCode: "C1E 1Y5",
    country: "Canada",
    fullFormatted: "44 Beach Grove Road, Unit 3, Charlottetown, PE C1E 1Y5, Canada",
  },
  primaryMarket: "Prince Edward Island & Anywhere (Remote & In-Person)",
  widerMarket: "Canada-wide and International — We service businesses anywhere",
  appointmentNotice: "Visits by appointment only. As we are a home-based business, please contact us before visiting.",
  appointmentHoursTimezone: "America/Halifax",
  appointmentHours: [
    { day: "Monday", hours: "1:00 PM – 8:00 PM" },
    { day: "Tuesday", hours: "1:00 PM – 8:00 PM" },
    { day: "Wednesday", hours: "1:00 PM – 8:00 PM" },
    { day: "Thursday", hours: "1:00 PM – 8:00 PM" },
    { day: "Friday", hours: "No appointments", closed: true },
    { day: "Saturday", hours: "1:00 PM – 8:00 PM" },
    { day: "Sunday", hours: "1:00 PM – 8:00 PM" },
  ],
  socials: {
    facebook: "https://facebook.com/yourwebpage",
    instagram: "https://instagram.com/yourwebpage",
    linkedin: "https://linkedin.com/yourwebpage",
  },
  pricingPolicyNotice:
    "Tell us what you need, and we will discuss a suitable solution and provide a quote.",
};

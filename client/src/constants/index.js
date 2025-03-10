import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";


import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";


export const CHOOSE_US_DATA = [
  {
    id: 1,
    type: "Hygienic Food",
    description:
      "We adhere to the highest standards of food safety and hygiene, ensuring that every dish is prepared in a meticulously clean environment. Our commitment to hygiene guarantees a safe and enjoyable dining experience for all guests.",
  },
  {
    id: 2,
    type: "Natural Ambiance",
    description:
      "Our establishment provides a serene and inviting atmosphere, designed to enhance your dining experience. We prioritize comfort and aesthetics, allowing you to relax and enjoy your meal in an environment that fosters lasting memories.",
  },
  {
    id: 3,
    type: "Skilled Chefs",
    description:
      "Our team of highly trained chefs possesses extensive culinary expertise, dedicated to crafting exquisite and innovative dishes. With a passion for perfection, we take pride in delivering a superior gastronomic experience.",
  },
  {
    id: 4,
    type: "Event & Party Services",
    description:
      "We specialize in the seamless organization of events and celebrations, offering bespoke catering and event planning services. Our goal is to ensure that every occasion is meticulously executed, leaving a lasting impression on your guests.",
  },
];

export const FOOTER_DATA = {
  footerNav: [
    
    { id: 1, label: "About", url: "/about" },
    { id: 2, label: "Reservation", url: "/reservation" },
    { id: 3, label: "Contact", url: "/contact" },
    { id: 4, label: "Privacy Policy", url: "/privacy-policy" },
  ],
  socialLinks: [
    {
      id: 1,
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://www.facebook.com",
    },
    { id: 2, name: "Twitter", icon: FaTwitter, url: "https://www.twitter.com" },
    {
      id: 3,
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com",
    },
    { id: 4, name: "YouTube", icon: FaYoutube, url: "https://www.youtube.com" },
  ],
  contactInfo: [
    { id: 1, label: "Location", value: "Silk St, Barbican, London E2Y, UK", icon: FaLocationDot },
    { id: 2, label: "Phone Number", value: "+39-055-123456, +258-2549 253", icon: IoMailSharp },
    { id: 3, label: "Email Address", value: "booking@webexample.com", icon: FaPhoneAlt },
  ],
  openingHours: [
    { id: 1, days: "Monday - Friday", time: "09:00 - 22:00" },
    { id: 2, days: "Saturday", time: "11:00 - 00:00" },
    { id: 3, days: "Sunday", time: "11:00 - 23:00" },
    { id: 4, days: "* Happy hour", time: "17:00 - 21:00", highlight: true },
  ],
  copyrightText: "© Copyright Ferris. All Rights Reserved.",
};

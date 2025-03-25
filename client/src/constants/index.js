import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";



export const CHOOSE_US_DATA = [
  {
    id: 1,
    type: "Authentic Italian Cuisine",
    description:
      "At Ferris Osteria, we bring the rich flavors of Italy to Berlin. Our menu features traditional dishes crafted with passion and the finest ingredients, ensuring an unforgettable dining experience.",
  },
  {
    id: 2,
    type: "Inviting Atmosphere",
    description:
      "Our restaurant offers a cozy and welcoming environment, perfect for any occasion. Whether you're here for a casual meal or a special celebration, our ambiance enhances your dining experience.",
  },
  {
    id: 3,
    type: "Prime Location with Terrace Seating",
    description:
      "Located opposite the Kaiser-Wilhelm-Gedächtnis-Kirche at Breitscheidplatz, Ferris Osteria boasts a spacious terrace. It's an ideal spot to enjoy your meal while taking in the vibrant surroundings.",
  },
  {
    id: 4,
    type: "Exceptional Service",
    description:
      "Our friendly and attentive staff are dedicated to providing top-notch service. Guests have praised our team's commitment to making every visit memorable.",
  },
];


export const FOOTER_DATA = {
  footerNav: [
    { id: 1, label: "About", url: "/about" },
    // { id: 2, label: "Reservation", url: "/" },
    // { id: 3, label: "Contact", url: "/" },
    // { id: 4, label: "Privacy Policy", url: "/privacy-policy" },
  ],
  socialLinks: [
    {
      id: 1,
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://www.facebook.com/ferris.osteria",
    },
    // { id: 2, name: "Twitter", icon: FaTwitter, url: "https://www.twitter.com" },
    {
      id: 2,
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/ferris.berlin/",
    },
    // {
    //   id: 3,
    //   name: "LinkedIn",
    //   icon: FaLinkedinIn,
    //   url: "https://www.linkedin.com",
    // },
    // { id: 4, name: "YouTube", icon: FaYoutube, url: "https://www.youtube.com" },
  ],
  contactInfo: [
    {
      id: 1,
      label: "Location",
      value: "Rankenstraße 1 , 10789 Berlin",
      icon: FaLocationDot,
      url: '#'
    },
    {
      id: 2,
      label: "Phone Number",
      value: "+49 0177 9728115",
      icon: FaPhoneAlt,
      url: "tel:+4901779728115"
    },
    // {
    //   id: 3,
    //   label: "Email Address",
    //   value: "booking@webexample.com",
    //   icon: IoMailSharp,
    // },
  ],
  openingHours: [
    { id: 1, days: "Monday", time: "10:00 - 01:00" },
    { id: 2, days: "Tuesday", time: "09:00 - 01:00" },
    { id: 3, days: "Wednesday - Sunday", time: "10:00 - 01:00" },
    
  ],
  copyrightText: "© Copyright Ferris Osteria. All Rights Reserved.",
};




export const BLOG_POSTS = [
  {
    id: 1,
    title: "A Taste of Italy in Berlin",
    author: "Ferris Osteria",
    date: "September 15, 2024",
    category: "Italian Cuisine",
    image: "https://source.unsplash.com/600x400/?italian-food,pasta",
    content:
      "At Ferris Osteria, we offer an authentic Italian dining experience in the heart of Berlin. From our fresh homemade pasta to our tender grilled meats, every dish is crafted with high-quality ingredients. Whether you’re in the mood for classic spaghetti aglio e olio, a rich Vitello Tonnato, or a delicious Carpaccio, we promise to deliver the true flavors of Italy. Our welcoming ambiance, paired with exquisite Italian wine, makes for the perfect evening out. Book your table today or order via Lieferando!",
  },
  {
    id: 2,
    title: "Fall Flavors at Ferris Osteria",
    author: "Ferris Osteria",
    date: "October 5, 2024",
    category: "Seasonal Specials",
    image: "https://source.unsplash.com/600x400/?autumn-food,italian",
    content:
      "As the season changes, so does our menu at Ferris Osteria! This fall, warm up with our new dishes like spaghetti with beef fillet strips and mushrooms—a perfect combination for those cozy evenings. Whether you're enjoying a glass of Italian red wine or savoring our handmade pasta, there’s something for everyone. Visit us at Rankestraße 1, Berlin, and let us bring Italy to you!",
  },
  {
    id: 3,
    title: "A Culinary Journey in Berlin",
    author: "Ferris Osteria",
    date: "August 28, 2024",
    category: "Dining Experience",
    image: "https://source.unsplash.com/600x400/?berlin,restaurant",
    content:
      "Looking for a delicious Italian meal in Berlin? Look no further than Ferris Osteria. With a menu featuring everything from fresh seafood to classic pasta dishes like spaghetti aglio e olio, we’ve got your cravings covered. Our homemade pasta is a fan favorite, made fresh every day. Whether you're dining in or ordering through Lieferando, we guarantee an unforgettable Italian experience. Visit us today and enjoy a true taste of Italy!",
  },
  {
    id: 4,
    title: "Indulge in Fresh Italian Flavors",
    author: "Ferris Osteria",
    date: "July 10, 2024",
    category: "Signature Dishes",
    image: "https://source.unsplash.com/600x400/?italian-dishes,food",
    content:
      "At Ferris Osteria, we pride ourselves on bringing you the freshest Italian dishes, straight from the heart of Italy to Berlin. Whether you’re craving our classic Carpaccio or a bowl of perfectly cooked spaghetti aglio e olio, our menu is designed to satisfy all your Italian food cravings. With every dish made from scratch using the finest ingredients, we ensure every meal is a delightful experience. Come and join us at Rankestraße 1, Berlin, for an unforgettable culinary experience!",
  },
  {
    id: 5,
    title: "Cozy Evenings at Ferris Osteria",
    author: "Ferris Osteria",
    date: "November 20, 2024",
    category: "Dinner Specials",
    image: "https://source.unsplash.com/600x400/?wine,dining",
    content:
      "Enjoy a cozy Italian dinner at Ferris Osteria in Berlin. As the weather cools down, there’s nothing better than enjoying a warm bowl of our homemade pasta or a flavorful meat dish like Vitello Tonnato. Paired with a glass of Italian wine, it’s the perfect setting for a night out. Whether you’re here with friends or loved ones, we promise to deliver an authentic Italian experience every time. Don’t wait—book your table now!",
  },
];



export const FERRIS_BANNERS_INFO = [
  {
    id: 1,
    title: "Culinary Excellence and Warm Hospitality",
    description: "At Ferris Osteria, we pride ourselves on delivering an exceptional dining experience. Guests have praised our friendly staff and the delightful combination of quality food at reasonable prices. Whether you're joining us for lunch or dinner, our team is dedicated to making your visit memorable."
  },
  {
    id: 2,
    title: "Authentic Italian Cuisine in the Heart of Berlin",
    description: "Nestled at Rankestraße 1a, Ferris Osteria brings the rich flavors of Italy to Berlin. Our menu boasts a variety of traditional dishes, from fresh seafood and grilled meats to classic pizzas and homemade pastas, all crafted with passion and the finest ingredients."
  },
  {
    id: 3,
    title: "Warm Ambiance and Friendly Service",
    description: "At Ferris Osteria, we pride ourselves on creating a cozy atmosphere complemented by our attentive staff. Guests have praised our friendly service, making every dining experience memorable."
  },
  {
    id: 4,
    title: "Prime Location with a Spacious Terrace",
    description: "Situated opposite the Kaiser-Wilhelm-Gedächtnis-Kirche at Breitscheidplatz, our restaurant features a large terrace. It's the perfect spot to relax and enjoy a meal while taking in the vibrant surroundings of one of Europe's most renowned shopping streets."
  },
  {
    id: 5,
    title: "Diverse Menu Catering to All Tastes",
    description: "Our extensive menu offers something for everyone, from hearty meat dishes to vegetarian options. Each dish is prepared with care, ensuring a delightful culinary experience for all our guests."
  },
  {
    id: 6,
    title: "Join Our Community Online",
    description: "Stay connected with Ferris Osteria through our social media channels. Follow us on Instagram and Facebook for the latest updates, promotions, and a glimpse into our daily specials."
  },
  {
    id: 7,
    title: "Seasonal Specials Crafted with Fresh Ingredients",
    description: "At Ferris Osteria, we pride ourselves on using the freshest seasonal ingredients to create dishes that celebrate the flavors of each season. Our chefs meticulously select local produce to craft specials that not only delight the palate but also showcase the best that each time of year has to offer. Join us to experience a menu that evolves with the seasons, ensuring a unique dining experience with every visit."
  }
];



import { Link } from "react-router-dom";
import { FOOTER_DATA } from "../../constants";
import logo from '../../assets/logo/logo-rec.jpg'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Navigation Links */}
        <div className="flex justify-between items-center pb-2">
          {/* <h1 className="font-cormorant text-4xl">Ferris</h1> */}
          <img src={logo} className="w-28" alt="" />
          <div className="flex gap-6 items-center text-ferris-sec/50 text-sm">
            {FOOTER_DATA.footerNav.map((item) => (
              <Link
                to={item.url}
                key={item.id}
                className="hover:text-ferris-prim transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t font-jost border-gray-700 pt-10 grid md:grid-cols-3 gap-8">
          {/* Left - Social Media & About */}
          <div>
            <h3 className="text-lg font-semibold mb-3">GET IN TOUCH</h3>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet consectetur elit. Etiam sollicitudin
              ante phasellus, sed egestas cursus eget porta.
            </p>
            <div className="flex space-x-4">
              {FOOTER_DATA.socialLinks.map((link) => {
                const Icon = link.icon; // Use the function reference to render the icon
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-ferris-sec hover:bg-ferris-prim text-ferris-prim hover:text-ferris-sec transition rounded-full  text-xl"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Middle - Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-3">GET IN TOUCH</h3>
            <div className="space-y-2">
              {FOOTER_DATA.contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.id} className="flex items-center gap-5">
                    <div className="p-2 rounded-full bg-ferris-sec hover:bg-ferris-prim text-ferris-prim hover:text-ferris-sec">
                      <Icon className="text-lg"></Icon>
                    </div>
                    <div>
                      <p className="text-ferris-prim">{info.label}</p>
                      <p className="text-ferris-sec">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-3">OPENING HOURS</h3>
            <ul>
              {FOOTER_DATA.openingHours.map((hour) => (
                <li
                  key={hour.id}
                  className={`text-gray-400 mb-1 ${
                    hour.highlight ? "font-semibold" : ""
                  }`}
                >
                  {hour.days}: {hour.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="border-t font-jost border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
          {FOOTER_DATA.copyrightText}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

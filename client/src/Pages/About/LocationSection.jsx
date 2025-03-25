import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";

const LocationSection = () => {
  return (
    <section className="w-full bg-red-50 py-20 bg-ferris-prim/10 text-ferris-ter">
    <div className="container mx-auto px-6 md:px-8 lg:px-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-cormorant font-bold uppercase tracking-wide">
          Find Us Here
        </h2>
        <p className="md:text-lg text-gray-600 mt-2">
          Experience authentic Italian cuisine at Ferris Osteria.
        </p>
      </div>
  
      {/* Flex Layout */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Google Map */}
        <div className="flex-1 w-full md;w-auto  rounded-lg overflow-hidden shadow-lg h-full">
          <iframe
            title="Ferris Osteria Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.632788295505!2d13.332202775925444!3d52.50388643742333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a850ff6b53e6ab%3A0x5baf3ea9f575627!2sRankestra%C3%9Fe%201%2C%2010789%20Berlin%2C%20Germany!5e0!3m2!1sen!2sbd!4v1741780414934!5m2!1sen!2sbd"
            className="w-full h-[300px] md:h-[400px] rounded-lg"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
  
        {/* Contact Information */}
        <div className="flex  flex-col justify-between lg:px-10 space-y-6">
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-3xl text-ferris-prim" />
            <div>
              <h3 className="text-xl font-semibold">Our Location</h3>
              <p className="text-gray-600">Rankenstraße 1 , 10789 Berlin</p>
            </div>
          </div>
  
          <div className="flex items-center gap-4">
            <FaPhone className="text-3xl text-ferris-prim" />
            <div>
              <h3 className="text-xl font-semibold">Call Us</h3>
              <a href="tel:+4901779728115" className="text-gray-600">+49 0177 9728115</a>
            </div>
          </div>
  
          <div className="flex items-center gap-4">
            <FaClock className="text-3xl text-ferris-prim" />
            <div>
              <h3 className="text-xl font-semibold">Opening Hours</h3>
              <p className="text-gray-600">Mon - Sun: 10:00 AM - 1:00 AM</p>
            </div>
          </div>
  
          {/* CTA Button */}
          <a
            href="https://www.google.com/maps/dir//Rankestra%C3%9Fe+1+10789+Berlin+Germany/@52.5038832,13.3347777,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47a850ff6b53e6ab:0x5baf3ea9f575627!2m2!1d13.3347777!2d52.5038832?entry=ttu&g_ep=EgoyMDI1MDMwOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center px-6 py-3 bg-ferris-prim hover:bg-ferris-prim-hov text-white rounded-lg  font-semibold transition duration-300 shadow-lg"
          >
            Get Directions
          </a>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default LocationSection;

import React from "react";
import { motion } from "framer-motion";
import { Wrench, Building, Truck, HardHat, Paintbrush, ShieldCheck, Clock, Users } from "lucide-react";

const services = [
  {
    title: "Equipment Hire",
    description: "Reliable and modern construction equipment for hire at affordable rates.",
    icon: <Wrench className="h-8 w-8 text-yellow-600" />,
  },
  {
    title: "Building & Construction",
    description: "Expert building solutions from foundation to finish.",
    icon: <Building className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Logistics & Transport",
    description: "On-time delivery of materials and equipment across Nairobi.",
    icon: <Truck className="h-8 w-8 text-green-600" />,
  },
  {
    title: "Site Supervision",
    description: "Professional site management ensuring project success.",
    icon: <HardHat className="h-8 w-8 text-orange-500" />,
  },
  {
    title: "Interior Finishing",
    description: "Elegant painting, tiling, and finishing services.",
    icon: <Paintbrush className="h-8 w-8 text-purple-600" />,
  },
];

const benefits = [
  {
    title: "Trusted & Insured",
    icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
    text: "We are fully certified, licensed, and insured for all types of construction projects.",
  },
  {
    title: "Timely Delivery",
    icon: <Clock className="h-6 w-6 text-green-600" />,
    text: "Our team values your time—projects are delivered on schedule with no excuses.",
  },
  {
    title: "Experienced Team",
    icon: <Users className="h-6 w-6 text-yellow-600" />,
    text: "We bring years of experience and technical skill to every project we handle.",
  },
];

function Services() {
  return (
    <div className="bg-gray-50 py-16 px-6 lg:px-20 mt-10" id="services">
      {/* Services Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Hammer-Hire offers top-tier construction and logistics solutions across Nairobi, delivering reliability and excellence in every project.
        </p>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">Why Choose Hammer-Hire?</h3>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">{benefit.title}</h4>
              <p className="text-gray-600 text-sm">{benefit.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-white p-10 rounded-2xl shadow-lg">
        <h4 className="text-2xl font-semibold mb-4 text-gray-800">Ready to Start Your Project?</h4>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Contact Hammer-Hire today for a free quote or to consult with our construction experts in Nairobi.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition"
        >
          Request
        </a>
      </div>
    </div>
  );
}

export default Services;

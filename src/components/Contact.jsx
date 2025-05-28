import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.message) {
      setError('All fields are required.');
      return;
    }

    try {
      await axios.post('http://localhost:3000/usersMessage', formData);
      setSubmitted(true);
      setFormData({ fullName: '', email: '', message: '' });
      setError('');
    } catch (err) {
      setError('Failed to send message. Try again.');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 md:px-20 mt-11">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Contact Info */}
          <div className="bg-blue-900 text-white p-10">
            <h2 className="text-3xl font-bold mb-4">Contact Hammer-Hire</h2>
            <p className="mb-6 text-sm leading-relaxed">
              We'd love to hear from you. Whether you have a question about services, pricing, or anything else — our team is ready to answer all your questions.
            </p>
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold">Head Office:</h4>
                <p>3rd Floor, Hammer Plaza, Nairobi, Kenya</p>
              </div>
              <div>
                <h4 className="font-semibold">Phone:</h4>
                <p>+254 712 345678</p>
              </div>
              <div>
                <h4 className="font-semibold">Email:</h4>
                <p>info@hammerhire.co.ke</p>
              </div>
              <div>
                <h4 className="font-semibold">Working Hours:</h4>
                <p>Mon - Fri: 8:00am - 5:00pm</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>

            {submitted && (
              <div className="bg-green-100 text-green-700 p-3 rounded mb-4">
                Your message has been sent!
              </div>
            )}

            {error && (
              <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Optional: Embedded Google Map */}
        <div className="h-64 w-full mt-4">
          <iframe
            title="Hammer-Hire Nairobi Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.7442200131655!2d36.82194631625578!3d-1.292065600000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10df7d8c75c3%3A0xf4a4d546f7ed9f49!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1678490925954!5m2!1sen!2ske"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

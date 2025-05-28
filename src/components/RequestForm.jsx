
import React, { useState } from 'react';
import axios from 'axios';

function RequestForm () {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
    location: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.phone) newErrors.phone = 'Phone number is required.';
    if (!formData.serviceType) newErrors.serviceType = 'Please select a service.';
    if (!formData.location) newErrors.location = 'Location is required.';
    if (!formData.message) newErrors.message = 'Please describe your request.';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    try {
      await axios.post('http://localhost:3000/usersData', formData);
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        serviceType: '',
        location: '',
        message: '',
      });
      setErrors({});
    } catch (error) {
      alert('There was an error submitting your request.');
      console.error(error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-16">
      <h2 className="text-3xl font-bold text-blue-800 mb-2">Request Materials or Labor</h2>
      <p className="text-gray-600 mb-6">
        Fill out the form below and our team will contact you with the best options to support your construction needs.
      </p>

      {submitted && (
        <div className="bg-green-100 text-green-700 p-3 rounded mb-6">
          Thank you! Your request has been submitted successfully.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        {/* Service Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700">What Do You Need? *</label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">-- Select --</option>
            <option value="Labor">Labor</option>
            <option value="Materials">Materials</option>
            <option value="Both">Both</option>
          </select>
          {errors.serviceType && <p className="text-red-500 text-sm">{errors.serviceType}</p>}
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Project Location *</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Briefly Describe Your Request *</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-xl transition duration-200"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestForm;

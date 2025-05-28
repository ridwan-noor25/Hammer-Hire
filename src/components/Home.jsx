import React from 'react';

function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <div className="text-5xl font-bold leading-tight mb-4">
            BUILDING YOUR VISION
            <br />
            <span className="text-yellow-400">WITH EXPERTISE</span>
          </div>
          <p className="text-2xl mb-8 max-w-4xl">
            From groundbreaking to ribbon-cutting, we deliver quality construction services
            <br />
            with precision and professionalism.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
            Request
          </button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-12 bg-white font-sans">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
          {/* Who We Are Section - Left Side */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Hammer-Hire is a premier construction equipment rental company dedicated to providing 
              top-quality tools and machinery to contractors and DIY enthusiasts. Established in 2015, 
              we've built our reputation on reliability, safety, and exceptional customer service.
            </p>
            <div className="bg-amber-100 p-6 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-2">Our Promise</h3>
              <p className="text-amber-700">
                "We deliver the right equipment, on time, every time - with service that builds trust."
              </p>
            </div>
          </div>

          {/* Our Services Section - Right Side */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Our Services
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Heavy Equipment Rental",
                "Power Tools & Accessories",
                "Scaffolding Solutions",
                "Construction Vehicles",
                "On-Site Delivery",
                "Equipment Maintenance",
                "Safety Gear Rental",
                "Operator Training"
              ].map((service, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <svg className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold capitalize mb-2 text-gray-900">OUR SPECIALIZED SERVICES</h2>
          <p className="text-gray-600">Quality craftsmanship for every project</p>
        </div>

        {/* Services Grid */}
        <div className="flex items-center justify-center gap-6">
          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
            {[
              {
                img: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                title: 'Equipment Hire'
              },
              {
                img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                title: 'Contractor Services'
              },
              {
                img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2052&q=80',
                title: 'Training Programs'
              },
              {
                img: 'https://media.istockphoto.com/id/2156159566/photo/architect-or-engineer-checking-the-list-of-documents-and-approving-the-project-approved.jpg?s=1024x1024&w=is&k=20&c=-fPMPcrYmvAvFqU9NrXEfOMcg5PLoVlUuBllh3wYiBQ=',
                title: 'License Verification'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 border border-gray-200">
                <div className="h-48 overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 text-yellow-500">{service.title}</h3>
                  <button className="text-gray-900 border border-yellow-500 hover:bg-yellow-500 px-4 py-2 rounded transition duration-300 w-full">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '250+', label: 'Equipment Units' },
              { number: '15+', label: 'Years Experience' },
              { number: '500+', label: 'Certified Contractors' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-yellow-500 mb-2">{stat.number}</div>
                <div className="text-gray-700 uppercase text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">READY TO START YOUR PROJECT?</h2>
          <p className="text-xl mb-8 text-gray-300">Our team of experienced professionals is ready to bring your vision to life.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300">
              CALL NOW: +254 726981100
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300">
              REQUEST
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
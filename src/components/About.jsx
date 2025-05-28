import React from "react";

const About = () => {
  return (
    <div className="bg-white text-black py-12 px-4 md:px-0 mt-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Image */}
        <div className="mb-12">
          <img
            src="https://plus.unsplash.com/premium_photo-1683134181132-d21384512e01?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hammer-Hire Construction"
            className="w-full h-96 object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Title & Intro */}
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-6">
          About Hammer-Hire Construction Co.
        </h2>
        <p className="text-center text-black text-lg max-w-3xl mx-auto mb-12">
          Based in the heart of Nairobi, Hammer-Hire is a forward-thinking construction company
          dedicated to building the future. We offer reliable equipment rentals, skilled labor
          solutions, and expert project management to support your construction needs.
        </p>

        {/* Core Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Mission",
              content:
                "To empower Nairobi's construction sector by providing top-notch equipment, skilled workforce, and sustainable building practices.",
            },
            {
              title: "Our Core Values",
              content: (
                <ul className="list-disc pl-5 space-y-2">
                  <li>Integrity & Trust</li>
                  <li>Quality Craftsmanship</li>
                  <li>Client Satisfaction</li>
                  <li>Safety First</li>
                  <li>Innovation & Growth</li>
                </ul>
              ),
            },
            {
              title: "Why Choose Us",
              content:
                "With years of experience, a reliable team, and a passion for progress, we ensure every project is completed on time, on budget, and with excellence.",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-orange-100 rounded-2xl p-6 shadow hover:shadow-lg transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-orange-600 mb-3">{card.title}</h3>
              <div className="text-black text-sm">{card.content}</div>
            </div>
          ))}
        </div>

        {/* History */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-orange-500 mb-4 text-center">Our History</h3>
          <p className="text-lg text-black text-center max-w-4xl mx-auto">
            Founded in 2015, Hammer-Hire started with just one excavator and a vision to provide
            quality, affordable construction equipment to local contractors. Over the years, we've
            expanded into a full-scale construction service provider serving hundreds of satisfied
            clients across Kenya.
          </p>
        </div>

        {/* Services */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-orange-500 mb-8 text-center">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Equipment Rentals",
                desc: "Wide range of modern, well-maintained machines for hire.",
              },
              {
                title: "Skilled Labor Provision",
                desc: "Trained professionals for various construction needs.",
              },
              {
                title: "Project Management",
                desc: "Complete oversight from planning to completion.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white border border-orange-500 rounded-xl p-6 shadow hover:shadow-lg transition"
              >
                <h4 className="text-xl font-semibold text-orange-600 mb-2">{service.title}</h4>
                <p className="text-black">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-orange-500 mb-8 text-center">Meet the Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Mwangi",
                title: "Founder & CEO",
                img: "https://media.istockphoto.com/id/1503316342/photo/construction-worker-on-a-construction-site.jpg?s=1024x1024&w=is&k=20&c=d171rpHlFtHeg2hlpqUySqjuKQ2FgtdE2R34wAepZ2E=",
              },
              {
                name: "Grace Wanjiku",
                title: "Operations Director",
                img: "https://images.unsplash.com/photo-1725811641344-9bca74828fc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Peter Oduor",
                title: "Head of Engineering",
                img: "https://plus.unsplash.com/premium_photo-1663045854370-1aa3d652b179?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            ].map((leader, i) => (
              <div
                key={i}
                className="bg-orange-100 p-6 rounded-xl text-center shadow hover:shadow-xl transition"
              >
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                />
                <h4 className="text-xl font-bold text-orange-500">{leader.name}</h4>
                <p className="text-orange-500">{leader.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-orange-500 text-center mb-8">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "James Kariuki",
                feedback:
                  "Hammer-Hire exceeded our expectations. Their equipment was in top shape, and the support was incredible.",
              },
              {
                name: "Esther Mumo",
                feedback:
                  "Professional, dependable, and efficient. We will definitely be working with them again for future projects.",
              },
            ].map((testimony, idx) => (
              <div key={idx} className="bg-orange-100 p-6 rounded-xl shadow-sm">
                <p className="text-black italic mb-4">“{testimony.feedback}”</p>
                <p className="font-semibold text-orange-600">— {testimony.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h4 className="text-2xl font-semibold text-black mb-4">
            Ready to build with us?
          </h4>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
